import Button from '@/components/ui/Button/Button';
import { Dialog } from 'radix-ui';
import { useState } from 'react';
import styles from './styles.module.css';

interface IProps {
    onChange: (value: boolean) => void;
}
const UploadPostModal = ({ onChange }: IProps) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading((prev) => true);
        setTimeout(() => {
            setLoading((prev) => false);
            onChange(false);
        }, 2000);
    };

    return (
        <>
            <div className="py-3 px-4 w-full h-full">
                <Dialog.Title className={styles.Title}>Edit profile</Dialog.Title>
                <Dialog.Description className={styles.Description}>
                    Make changes to your profile here. Click save when you're done.
                </Dialog.Description>
                <fieldset className={styles.Fieldset}>
                    <label className={styles.Label} htmlFor="name">
                        Name
                    </label>
                    <input className={styles.Input} id="name" defaultValue="Pedro Duarte" />
                </fieldset>
                <fieldset className={styles.Fieldset}>
                    <label className={styles.Label} htmlFor="username">
                        Username
                    </label>
                    <input className={styles.Input} id="username" defaultValue="@peduarte" />
                </fieldset>
            </div>

            <div className="w-full flex justify-center p-3 border-[rgba(0,0,0,0.1)] border-t-1">
                <div className="font-bold text-xl w-[95%] h-10 rounded-xl">
                    <Button primary={true} loading={loading} onClick={handleSubmit}>
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
};

export default UploadPostModal;
