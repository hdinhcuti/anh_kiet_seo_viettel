'use client';
import { IconCircleXFilled } from '@tabler/icons-react';
import { Dialog } from 'radix-ui';
import styles from './styles.module.css';

interface IProps {
    title: string;
    classNames?: string;
    onClick?: () => void;
    onChange: (value: boolean) => void;
    open: boolean;
    // trigger: React.ReactNode;
    children: React.ReactNode;
}

const Modal = ({ title, classNames, onClick, onChange, open, children }: IProps) => {
    return (
        <Dialog.Root open={open} onOpenChange={(value) => onChange(value)}>
            {/* <Dialog.Trigger asChild>
                <button>{trigger}</button>
            </Dialog.Trigger> */}

            <Dialog.Portal>
                <div className="fixed inset-0 bg-style-overlay z-50 " aria-hidden />

                <Dialog.Overlay className={`${styles.Overlay}`} />

                <Dialog.Content
                    className={`${styles.Content}  ${
                        classNames ?? 'w-100 h-100'
                    } flex flex-col justify-between relative z-50 `}
                >
                    <div className="header flex justify-between items-center border-[rgba(0,0,0,0.1)] border-b-1 py-3 px-4 ">
                        <div className="w-[95%] text-2xl font-semibold">
                            <Dialog.Title className="flex justify-center">{title}</Dialog.Title>
                        </div>
                        <div className="flex-1">
                            <Dialog.Close asChild>
                                <button className="flex items-center justify-center w-8 h-8" aria-label="Close">
                                    <IconCircleXFilled className="w-full h-full text-gray" />
                                </button>
                            </Dialog.Close>
                        </div>
                    </div>

                    {children}
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default Modal;
