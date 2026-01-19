import React, { InputHTMLAttributes, forwardRef, useState } from 'react';

interface ValidationRule {
    required?: boolean | string;
    minLength?: { value: number; message: string };
    maxLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
    min?: { value: number; message: string };
    max?: { value: number; message: string };
    custom?: { validate: (value: string) => boolean | string; message?: string };
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    error?: string;
    helperText?: string;
    validation?: ValidationRule;
    variant?: 'outlined' | 'filled' | 'standard';
    inputSize?: 'sm' | 'md' | 'lg';
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    onValueChange?: (value: string, isValid: boolean) => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            label,
            error,
            helperText,
            validation,
            variant = 'outlined',
            inputSize = 'md',
            leftIcon,
            rightIcon,
            className = '',
            disabled,
            onValueChange,
            onChange,
            value,
            ...props
        },
        ref,
    ) => {
        const [internalValue, setInternalValue] = useState(value || '');
        const [internalError, setInternalError] = useState('');

        const currentValue = value !== undefined ? value : internalValue;
        const currentError = error || internalError;

        const validateValue = (val: string): string => {
            if (!validation) return '';

            // UX: chưa nhập gì thì chưa báo lỗi required
            if (!val) return '';

            if (validation.required && val.trim() === '') {
                return typeof validation.required === 'string' ? validation.required : 'Trường này là bắt buộc';
            }

            if (validation.minLength && val.length < validation.minLength.value) {
                return validation.minLength.message;
            }

            if (validation.maxLength && val.length > validation.maxLength.value) {
                return validation.maxLength.message;
            }

            if (validation.pattern && !validation.pattern.value.test(val)) {
                return validation.pattern.message;
            }

            if (validation.min && Number(val) < validation.min.value) {
                return validation.min.message;
            }

            if (validation.max && Number(val) > validation.max.value) {
                return validation.max.message;
            }

            if (validation.custom) {
                const result = validation.custom.validate(val);
                if (result !== true) {
                    return typeof result === 'string' ? result : validation.custom.message || 'Giá trị không hợp lệ';
                }
            }

            return '';
        };

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value;

            if (value === undefined) {
                setInternalValue(newValue);
            }

            const errorMsg = validateValue(newValue);
            setInternalError(errorMsg);
            onValueChange?.(newValue, !errorMsg);

            onChange?.(e);
        };

        const sizeClasses = {
            sm: 'px-3 py-1.5 text-sm',
            md: 'px-4 py-2 text-base',
            lg: 'px-5 py-3 text-lg',
        };

        const variantClasses = {
            outlined: 'border-2 bg-transparent focus:border-blue-500',
            filled: 'border-0 border-b-2 bg-gray-100 focus:bg-gray-200 focus:border-blue-500',
            standard: 'border-0 border-b-2 bg-transparent focus:border-blue-500',
        };

        const baseClasses = 'w-full rounded-md transition-all duration-200 outline-none';
        const errorClasses = currentError ? 'border-red-500 focus:border-red-500' : 'border-gray-300';
        const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed bg-gray-100' : '';
        const iconPadding = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '';

        return (
            <div className="w-full">
                {label && (
                    <label className="block mb-2 text-sm font-medium text-gray-700">
                        {label}
                        {validation?.required && <span className="text-red-500 ml-1">*</span>}
                    </label>
                )}

                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">{leftIcon}</div>
                    )}

                    <input
                        ref={ref}
                        value={currentValue}
                        onChange={handleChange}
                        disabled={disabled}
                        className={`
                            ${baseClasses}
                            ${sizeClasses[inputSize]}
                            ${variantClasses[variant]}
                            ${errorClasses}
                            ${disabledClasses}
                            ${iconPadding}
                            ${className}
                        `}
                        {...props}
                    />

                    {rightIcon && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">{rightIcon}</div>
                    )}
                </div>

                {currentError && (
                    <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                fillRule="evenodd"
                                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {currentError}
                    </p>
                )}

                {!currentError && helperText && <p className="mt-1 text-sm text-gray-500">{helperText}</p>}
            </div>
        );
    },
);

Input.displayName = 'Input';
export default Input;
