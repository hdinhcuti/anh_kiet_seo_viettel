import { PackageItem } from '@/types/package';
import ClientChiTietSanPham from './ClientChiTietSanPham';
async function PackageDetail({ params }: { params: { slug: string } }) {
    const { slug } = await params;

    console.log(slug);

    const packageData: PackageItem = {
        id: '1',
        name: 'Gói Data Max 5G',
        speed: '100 Mbps',
        // thumbnail: cameraCard.src,
        description:
            'Gói cước data không giới hạn với tốc độ 5G siêu nhanh, phù hợp cho người dùng thường xuyên sử dụng internet, xem video 4K, chơi game online và làm việc từ xa. Tận hưởng trải nghiệm mạng tốc độ cao mượt mà không giới hạn.',
        price: '150.000đ/tháng',
    };

    return <ClientChiTietSanPham packageData={packageData} />;
}

export default PackageDetail;
