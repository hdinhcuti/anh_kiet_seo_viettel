import Button from '../Button/Button';

export interface TabItem<T extends string> {
    label: string;
    value: T;
}

interface IProps<T extends string> {
    items: TabItem<T>[];
    selected: T;
    onChange: (value: T) => void;
    className?: string;
}

const Tabs = <T extends string>({ items, selected, onChange, className }: IProps<T>) => {
    return (
        <div className={`flex gap-3 lg:flex-row md:flex-row flex-col ${className || ''}`}>
            {items.map((item, index) => {
                const isActive = selected === item.value;
                return (
                    <Button key={index} onClick={() => onChange(item.value)} className={`${isActive ? 'active' : ''}`}>
                        {item.label}
                    </Button>
                );
            })}
        </div>
    );
};
export default Tabs;
