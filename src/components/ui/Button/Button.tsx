'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export interface ButtonProps {
    icon?: React.ReactNode;
    children?: React.ReactNode;
    href?: string; // Link or <a>
    to?: string; // open external link
    className?: string;
    primary?: boolean;
    search?: boolean;
    login?: boolean;
    medium?: boolean;
    small?: boolean;
    active?: boolean;
    resize?: boolean;
    hover?: boolean;
    onClick?: () => void;
}

export default function Button({
    icon,
    children,
    href,
    to,
    className,
    primary,
    search,
    login,
    medium,
    small,
    active,
    resize,
    hover,
    onClick,
}: ButtonProps) {
    const pathname = usePathname();
    const isActive = href === pathname;

    const classes = cx(
        'button-container',
        {
            primary,
            search,
            login,
            medium,
            small,
            resize,
            hover,
            active: isActive || active,
        },
        className,
    );

    if (to) {
        return (
            <Link href={to} className={classes}>
                {icon && <div className={cx('icon')}>{icon}</div>}
                <div className={cx('title')}>{children}</div>
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
                {icon && <div className={cx('icon')}>{icon}</div>}
                <div className={cx('title')}>{children}</div>
            </a>
        );
    }

    return (
        <button onClick={onClick} className={classes}>
            {icon && <div className={cx('icon')}>{icon}</div>}
            <div className={cx('title')}>{children}</div>
        </button>
    );
}
