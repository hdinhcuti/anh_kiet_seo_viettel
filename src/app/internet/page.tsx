import { PackageItem } from '@/types/package';
import { Base64 } from 'js-base64';
import ClientInternet from './ClientInternet';
const Internet = async () => {
    const packagesData: PackageItem[] = [
        {
            id: 'giga2_h',
            name: 'Gói GIGA2_H',
            speed: '150 Mbps',
            description: 'Gói cước Internet tốc độ cao dành cho hộ gia đình.',
            price: '355.000',
        },
        {
            id: 'giga3_h',
            name: 'Gói GIGA3_H',
            speed: '200 Mbps',
            description: 'Gói cước Internet nâng cao cho nhu cầu sử dụng lớn.',
            price: '390.000',
        },
        {
            id: 'sup500_h',
            name: 'Gói SUP500_H',
            speed: '500 Mbps',
            description: 'Internet siêu tốc, phù hợp hộ gia đình sử dụng nhiều thiết bị.',
            price: '450.000',
        },
        {
            id: 'sup500_h',
            name: 'Gói SUP500_H',
            speed: '500 Mbps',
            description: 'Internet siêu tốc, phù hợp hộ gia đình sử dụng nhiều thiết bị.',
            price: '450.000',
        },
    ];
    const res = await fetch(`http://localhost:3001/posts/1767721928252`, { cache: 'no-store' });

    const data = await res.json();

    const contentBlog = Base64.decode(data?.content);
    return <ClientInternet packagesData={packagesData} contentBlog={contentBlog} />;
};

export default Internet;
