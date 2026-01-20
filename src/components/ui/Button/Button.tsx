'use client';

import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

export interface ButtonProps {
    rightIcon?: React.ReactNode;
    leftIcon?: React.ReactNode;
    children?: React.ReactNode;
    loading?: boolean;
    href?: string;
    to?: string;
    type?: 'button' | 'submit' | 'reset';
    className?: string;

    primary?: boolean;
    hover?: boolean;
    active?: boolean;

    onClick?: () => void;
}

export default function Button({
    rightIcon,
    leftIcon,
    children,
    loading = false,
    href,
    to,
    type = 'button',
    className,
    primary = false,
    hover = false,
    active,
    onClick,
}: ButtonProps) {
    const pathname = usePathname();
    const isActive = active ?? to === pathname;

    const isPrimary = primary || isActive;

    /* ================= BASE ================= */
    const baseClasses =
        'inline-flex items-center justify-center gap-1.5 px-4 py-1.5 h-10 rounded-[10px] border-2 cursor-pointer transition-all duration-[350ms] ease-in-out';

    /* ================= VARIANT ================= */
    const variantClasses = isPrimary ? 'bg-primary border-primary' : 'bg-transparent border-primary';

    /* ================= HOVER (ĐẢO NGƯỢC) ================= */
    const hoverClasses = hover && !loading ? (isPrimary ? 'hover:bg-transparent' : 'hover:bg-primary') : '';

    /* ================= TEXT & ICON ================= */
    const textColor = isPrimary ? 'text-white' : 'text-primary';
    const textHover = hover && !loading ? (isPrimary ? 'group-hover:text-primary' : 'group-hover:text-white') : '';

    const iconBaseClasses = 'flex items-center transition-all duration-[350ms] ease-in-out';
    const titleBaseClasses = 'font-medium whitespace-nowrap transition-all duration-[350ms] ease-in-out';

    const classes = `
        ${baseClasses}
        ${variantClasses}
        ${hoverClasses}
        group
        ${className || ''}
    `.trim();

    const renderContent = () => {
        if (loading) {
            return (
                <Loader2
                    className={`
                        animate-spin w-6 h-6
                        ${textColor}
                        ${textHover}
                    `}
                />
            );
        }

        return (
            <>
                {leftIcon && <div className={`${iconBaseClasses} ${textColor} ${textHover}`}>{leftIcon}</div>}

                {children && <span className={`${titleBaseClasses} ${textColor} ${textHover}`}>{children}</span>}

                {rightIcon && <div className={`${iconBaseClasses} ${textColor} ${textHover}`}>{rightIcon}</div>}
            </>
        );
    };

    /* ================= RENDER ================= */
    if (to) {
        return (
            <Link href={to} className={classes}>
                {renderContent()}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                {renderContent()}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={classes} disabled={loading}>
            {renderContent()}
        </button>
    );
}
