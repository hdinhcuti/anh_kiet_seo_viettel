import cameraCard from '@public/images/camera-card.webp';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
const ServiceCard = () => {
    return (
        <Link
            className="service-card-wrapper w-70 h-100 md:h-full md:w-120 rounded-2xl shadow-sm hover:-translate-y-3 transition-transform duration-500 ease-in-out hover:shadow-lg/20 transition-shadow duration-300 ease-in-out cursor-pointer "
            href={''}
        >
            <div className="image rounded-t-2xl overflow-hidden h-40 md:h-60">
                <Image
                    src={cameraCard}
                    alt={'Service Card Image'}
                    className="w-full h-full object-cover hover:scale-120 transition-transform duration-700 ease-in-out"
                />
            </div>
            <div className="content flex flex-col justify-between items-center p-5">
                <div className="title text-center md:pb-5">
                    <strong className="text-black text-xl md:text-2xl hover:text-primary">HOME CAMERA VIETTEL</strong>
                </div>
                <div className="caption w-full text-[1rem] md:text-[1rem] text-center text-gray opacity-90 pb-5 ">
                    <p className="text-sm line-clamp-3">
                        Home Camera là giải pháp camera thông minh bằng AI của Viettel dành cho đối tượng
                    </p>
                </div>

                <div className="detail flex items-center">
                    <Button primary hover>
                        Xem chi tiết
                    </Button>
                </div>
            </div>
        </Link>
    );
};

export default ServiceCard;
