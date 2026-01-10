import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
export interface ServiceCardProps {
    thumbnail: string;
    title: string;
    description: string;
    slug: string;
}

interface IProps {
    item: ServiceCardProps;
}
const ServiceCard = ({ item }: IProps) => {
    return (
        <Link
            className="service-card-wrapper bg-white w-70 h-full md:w-120 rounded-2xl shadow-sm hover:-translate-y-3 transition-transform duration-500 ease-in-out hover:shadow-lg/20 transition-shadow duration-300 ease-in-out cursor-pointer "
            href={item.slug}
        >
            <div className="image rounded-t-2xl overflow-hidden h-40 md:h-60">
                <Image
                    src={item.thumbnail}
                    alt={'Service Card Image'}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover hover:scale-120 transition-transform duration-700 ease-in-out"
                />
            </div>
            <div className="content flex flex-col justify-between items-center p-5">
                <div className="title text-center md:pb-5">
                    <strong className="text-black text-xl md:text-2xl hover:text-primary">{item.title}</strong>
                </div>
                <div className="caption w-full text-[1rem] md:text-[1rem] text-center text-gray opacity-90 pb-5 ">
                    <p className="text-sm line-clamp-2">{item.description}</p>
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
