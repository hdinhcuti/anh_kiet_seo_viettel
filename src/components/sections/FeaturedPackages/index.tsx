import { PackageData } from '@/types/package';
import FeaturedPackagesTabs from './FeaturedPackagesTabs';

export default function FeaturedPackages() {
    const packagesData: PackageData = {
        internet: [
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
        ],

        camera: [
            {
                id: 'cam_ai_1',
                name: 'Camera AI Viettel 1',
                speed: '—',
                description: 'Camera AI thông minh, phát hiện chuyển động và cảnh báo.',
                price: '199.000',
            },
            {
                id: 'cam_ai_2',
                name: 'Camera AI Viettel 2',
                speed: '—',
                description: 'Camera AI góc rộng, hỗ trợ quan sát toàn diện.',
                price: '299.000',
            },
        ],

        tivi: [
            {
                id: 'vtv_cab',
                name: 'Gói Truyền hình Cơ bản',
                speed: '—',
                description: 'Gói truyền hình cơ bản với hơn 130 kênh SD/HD.',
                price: '145.000',
            },
            {
                id: 'vtv_premium',
                name: 'Gói Truyền hình Premium',
                speed: '—',
                description: 'Kho nội dung giải trí phong phú cùng các kênh quốc tế.',
                price: '199.000',
            },
        ],
    };
    return (
        <section className="bg-gray-100">
            <h2 className="sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-4 text-black py-5">
                SẢN PHẨM NỔI BẬT
            </h2>
            <FeaturedPackagesTabs data={packagesData} />
        </section>
    );
}
