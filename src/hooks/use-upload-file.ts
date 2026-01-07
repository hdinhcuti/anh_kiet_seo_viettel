import * as React from 'react';

import { toast } from 'sonner';
import { z } from 'zod';

export interface UploadedFile<T = unknown> {
    key: string;
    appUrl: string;
    name: string;
    size: number;
    type: string;
    url: string;
    data?: T;
}

interface UseUploadFileProps {
    onUploadComplete?: (file: UploadedFile) => void;
    onUploadError?: (error: unknown) => void;
    // Bạn có thể thêm các props khác nếu API của bạn yêu cầu (ví dụ: headers, meta)
    headers?: HeadersInit;
}

export function useUploadFile({ onUploadComplete, onUploadError, ...props }: UseUploadFileProps = {}) {
    const [uploadedFile, setUploadedFile] = React.useState<UploadedFile>();
    const [uploadingFile, setUploadingFile] = React.useState<File>();
    const [progress, setProgress] = React.useState<number>(0);
    const [isUploading, setIsUploading] = React.useState(false);

    async function uploadThing(file: File) {
        setIsUploading(true);
        setUploadingFile(file);
        setProgress(0); // Reset progress

        try {
            // --- BẮT ĐẦU PHẦN TÙY CHỈNH BACKEND CỦA BẠN ---
            const formData = new FormData();
            formData.append('image', file); // Sử dụng key 'image' như API yêu cầu

            // Đây là URL API upload của bạn
            const uploadUrl = 'http://localhost:3001/upload';

            const response = await fetch(uploadUrl, {
                method: 'POST',
                body: formData,
                headers: props.headers, // Sử dụng headers được truyền vào hook
            });

            if (!response.ok) {
                throw new Error('Failed to upload file to custom backend.');
            }

            const responseData = await response.json();

            // Giả định backend trả về { imageUrl: '...' }
            if (!responseData.imageUrl) {
                throw new Error('API response did not contain imageUrl.');
            }

            const customUploadedFile: UploadedFile = {
                key: Date.now().toString(), // Hoặc một ID duy nhất
                appUrl: responseData.imageUrl,
                name: file.name,
                size: file.size,
                type: file.type,
                url: responseData.imageUrl,
            };

            setUploadedFile(customUploadedFile);
            onUploadComplete?.(customUploadedFile);
            // --- KẾT THÚC PHẦN TÙY CHỈNH BACKEND CỦA BẠN ---

            return customUploadedFile;
        } catch (error) {
            const errorMessage = getErrorMessage(error);
            const message = errorMessage.length > 0 ? errorMessage : 'Có lỗi xảy ra, vui lòng thử lại sau.';
            toast.error(message);
            onUploadError?.(error);

            // Giữ lại phần mock upload cho mục đích phát triển nếu cần
            const mockUploadedFile = {
                key: 'mock-key-0',
                appUrl: `https://mock-app-url.com/${file.name}`,
                name: file.name,
                size: file.size,
                type: file.type,
                url: URL.createObjectURL(file),
            } as UploadedFile;

            let progress = 0;
            const simulateProgress = async () => {
                while (progress < 100) {
                    await new Promise((resolve) => setTimeout(resolve, 50));
                    progress += 2;
                    setProgress(Math.min(progress, 100));
                }
            };
            await simulateProgress();
            setUploadedFile(mockUploadedFile);
            return mockUploadedFile;
        } finally {
            setProgress(0);
            setIsUploading(false);
            setUploadingFile(undefined);
        }
    }

    return {
        isUploading,
        progress,
        uploadedFile,
        uploadFile: uploadThing,
        uploadingFile,
    };
}

export function getErrorMessage(err: unknown) {
    const unknownError = 'Something went wrong, please try again later.';

    if (err instanceof z.ZodError) {
        const errors = err.issues.map((issue) => issue.message);

        return errors.join('\n');
    }
    if (err instanceof Error) {
        return err.message;
    }
    return unknownError;
}

export function showErrorToast(err: unknown) {
    const errorMessage = getErrorMessage(err);

    return toast.error(errorMessage);
}
