import { IconAddressBook, IconPhone, IconSearch } from '@tabler/icons-react';
interface IProps {
    width?: string;
    height?: string;
}
export const SearchIcon = ({ width = '1.5rem', height = '1.5rem' }: IProps) => {
    return <IconSearch width={width} height={height} />;
};

export const PhoneIcon = ({ width = '1.2rem', height = '1.2rem' }: IProps) => {
    return <IconPhone width={width} height={height} />;
};

export const ContactIcon = ({ width = '1.2rem', height = '1.2rem' }: IProps) => {
    return <IconAddressBook width={width} height={height} />;
};

