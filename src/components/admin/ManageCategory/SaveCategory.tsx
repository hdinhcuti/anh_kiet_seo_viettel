'use client';
import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import { URL_CONFIG } from '@/configs/url-config';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

// Define the validation schema using Zod
const formSchema = z.object({
    nameCategory: z.string().trim().min(2, { message: 'Tên danh mục phải nhiều hơn 2 kí tự' }),
});

// Infer the type from the schema
type FormData = z.infer<typeof formSchema>;

interface SaveCategoryProps {
    onClose: (value: boolean) => void;
    value?: string;
    type: 'create' | 'update';
}

const SaveCategory = ({ value, type, onClose }: SaveCategoryProps) => {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nameCategory: value || '',
        },
    });

    const onSubmit = async (data: FormData) => {
        setLoading(true);
        try {
            console.log('API:', URL_CONFIG.api);
            console.log('Submitting data:', data);

            const res = await fetch(`${URL_CONFIG.api}/danh-muc-chinh`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tenDanhMuc: data.nameCategory,
                }),
            });

            if (!res.ok) {
                throw new Error('Request failed');
            }

            const responseData = await res.json();
            console.log(responseData);

            reset({ nameCategory: '' }); // Reset form after successful submission
        } catch (error) {
            console.error(error);
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
