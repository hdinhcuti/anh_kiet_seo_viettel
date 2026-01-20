'use client';
import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import { URL_CONFIG } from '@/configs/url-config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Category } from './ManageCategory';

const formSchema = z.object({
    nameCategory: z
        .string()
        .trim()
        .min(1, { message: 'Tên danh mục không được để trống' })
        .min(2, { message: 'Tên danh mục phải nhiều hơn 2 kí tự' }),
});

type FormData = z.infer<typeof formSchema>;

interface SaveCategoryProps {
    onClose: (value: boolean) => void;
    data?: Category | null;
    type: 'create' | 'update';
}

const SaveCategory = ({ data, type, onClose }: SaveCategoryProps) => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nameCategory: data?.tenDanhMuc || '',
        },
    });

    const onSubmit = async (formData: FormData) => {
        setLoading(true);
        try {
            const url = `${URL_CONFIG.api}/danh-muc-chinh${data?.id ? `/${data.id}` : ''}`;
            const res = await fetch(url, {
                method: type == 'create' ? 'POST' : 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tenDanhMuc: formData.nameCategory,
                }),
            });

            if (res.status == 201 || res.status == 200) {
                // const result = await res.json();
                toast.success(`${type == 'create' ? 'Thêm' : 'Sửa'} danh mục thành công!`);
                reset({ nameCategory: '' });
                return;
            }

            if (res.status == 409) {
                toast.error(`Danh mục đã tồn tại`);
                return;
            }
        } catch (error) {
            toast.error(`${type == 'create' ? 'Thêm' : 'Sửa'} danh mục thất bại! [Lỗi] => ${error}`);
        } finally {
            setLoading(false);
            onClose(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-full h-full flex flex-col">
            <div className="py-3 px-4 w-full flex-grow">
                <Input
                    label="Tên danh mục"
                    type="text"
                    required={true}
                    error={errors.nameCategory?.message}
                    helperText="Nhập tên danh mục"
                    {...register('nameCategory')}
                />
            </div>
            <div className="w-full flex justify-center p-3 border-[rgba(0,0,0,0.1)] border-t-1">
                <div className="font-bold text-xl w-full h-10 rounded-xl">
                    <Button type="submit" primary={true} hover loading={loading} className="w-full">
                        Lưu
                    </Button>
                </div>
            </div>
        </form>
    );
};

export default SaveCategory;
