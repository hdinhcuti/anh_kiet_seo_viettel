import { URL_CONFIG } from '@/configs/url-config';
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
    // const packagesData: PackageItem[] = [
    //     {
    //         id: 'cam_ai_1',
    //         name: 'Camera AI Viettel 1',
    //         thumbnail: cameraCard.src,
    //         description: 'Camera AI thông minh, phát hiện chuyển động và cảnh báo.',
    //         price: '199.000',
    //     },
    //     {
    //         id: 'cam_ai_2',
    //         name: 'Camera AI Viettel 2',
    //         thumbnail: cameraCard.src,

    //         description: 'Camera AI góc rộng, hỗ trợ quan sát toàn diện.',
    //         price: '299.000',
    //     },
    //     {
    //         id: 'cam_ai_2',
    //         name: 'Camera AI Viettel 2',
    //         thumbnail: cameraCard.src,

    //         description: 'Camera AI góc rộng, hỗ trợ quan sát toàn diện.',
    //         price: '299.000',
    //     },
    // ];
    const res = await fetch(`${URL_CONFIG.api}/posts/1767794048353`, { cache: 'no-store' });

    const data = await res.json();

    const titleService: string = 'DỊCH VỤ LẮP ĐẶT INTERNET VIETTEL';

    const description: string = `Các gói cước dịch vụ internet Viettel đang phổ biến hiện nay. Trọn gói chỉ từ
                                        180.000đ/tháng có ngay dịch vụ internet cáp quang siêu tốc, băng thông lên đến
                                        1Gbps (Download = Upload), trang bị wifi 6 và tặng 1 tháng cước sử dụng miễn phí
                                        khi đóng trước cước từ 12 tháng.`;

    const contentBlog = Base64.decode(data?.content);

    const titleBlog: string = 'Khuyến mãi đăng ký lắp đặt internet Viettel Tp Cần Thơ tháng 01/2026';
    return (
        <ClientInternet
            titleBlog={titleBlog}
            titleService={titleService}
            description={description}
            packagesData={packagesData}
            contentBlog={contentBlog}
        />
    );
};

export default Internet;
