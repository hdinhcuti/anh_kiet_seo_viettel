import Button from '@/components/ui/Button/Button';
import Modal from '../../Modal';

interface DeleteModalProps {
    title: string;
    classNames?: string;
    onChange: (value: boolean) => void;
    open: boolean;
    loading?: boolean;
    onSubmit: () => void;
}
const DeleteModal = ({ title, classNames, onChange, open, loading, onSubmit }: DeleteModalProps) => {
    return (
        <Modal onChange={(value) => onChange(value)} open={open} title={title} classNames={classNames}>
            <div className="px-3 w-full h-full flex flex-col justify-center">
                <div className="title pt-2 px-2 mb-3 text-base">
                    Bạn có chắc chắn thực hiện hành động này. Điều này sẽ xóa dữ liệu
                </div>
                <div className="w-full flex justify-center pt-3 border-[rgba(0,0,0,0.1)] border-t-1 gap-15">
                    <Button type="submit" primary={false} className="w-50" onClick={() => onChange(false)}>
                        Hủy
                    </Button>
                    <Button type="submit" primary={true} loading={loading} className="w-50" onClick={() => onSubmit()}>
                        Xác nhận
                    </Button>
                </div>
            </div>
        </Modal>
    );
};

export default DeleteModal;
