import { NewsSummary } from '@/types/news';
import newsThumnails1 from '@public/images/news-thumnails-1.webp';
import FeaturedNewsCarousel from './FeaturedNewsCarousel';
const FeatureNews = () => {
    const newsData: NewsSummary[] = [
        {
            id: '1',
            slug: 'kinh-nghiem-lua-chon-goi-cuoc',
            title: 'Kinh nghiệm lựa chọn gói cước Viettel phù hợp',
            thumbnail: newsThumnails1.src,
            date: '2025-11-23T13:45:20.123Z',
            description: 'Những mẹo giúp bạn chọn gói cước Viettel phù hợp nhất dựa trên nhu cầu sử dụng.',
        },
        {
            id: '2',
            slug: 'goi-cuoc-4g-gia-re-cho-sinh-vien',
            title: 'Top gói cước 4G giá rẻ dành cho sinh viên',
            thumbnail: newsThumnails1.src,
            date: '2025-11-25T10:12:44.200Z',
            description: 'Tổng hợp các gói 4G Viettel giá rẻ, data lớn, phù hợp cho sinh viên dùng hàng ngày.',
        },
        {
            id: '3',
            slug: 'huong-dan-dang-ky-internet-viettel-tai-can-tho',
            title: 'Hướng dẫn đăng ký Internet Viettel tại Cần Thơ',
            thumbnail: newsThumnails1.src,
            date: '2025-11-28T08:30:10.900Z',
            description: 'Quy trình chi tiết giúp bạn đăng ký lắp đặt Internet Viettel nhanh chóng tại Cần Thơ.',
        },
        {
            id: '4',
            slug: 'loi-ich-cua-camera-ai-viettel',
            title: 'Lợi ích khi sử dụng Camera AI Viettel cho gia đình',
            thumbnail: newsThumnails1.src,
            date: '2025-11-29T14:20:30.555Z',
            description: 'Camera AI Viettel giúp tăng cường bảo mật, theo dõi thông minh và cảnh báo thời gian thực.',
        },
        {
            id: '5',
            slug: 'uu-dai-viettel-thang-12',
            title: 'Ưu đãi đặc biệt của Viettel trong tháng 12',
            thumbnail: newsThumnails1.src,
            date: '2025-12-02T19:55:10.888Z',
            description: 'Khám phá các chương trình khuyến mãi hấp dẫn từ Viettel dành cho khách hàng mới.',
        },
        {
            id: '6',
            slug: 'nhung-dich-vu-hot-nhat-cua-viettel-2025',
            title: 'Những dịch vụ nổi bật của Viettel năm 2025',
            thumbnail: newsThumnails1.src,
            date: '2025-12-05T11:05:05.222Z',
            description: 'Tổng hợp các dịch vụ nổi bật được nhiều người dùng lựa chọn trong năm 2025.',
        },
    ];

    return (
        <section className="">
            <h2 className="sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-4 text-black py-5">
                TIN TỨC - SỰ KIỆN
            </h2>
            <div className="flex justify-center">
                <FeaturedNewsCarousel items={newsData} />
            </div>
        </section>
    );
};

export default FeatureNews;
