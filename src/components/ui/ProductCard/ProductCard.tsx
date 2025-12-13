import { PackageItem } from '@/types/package';
import { IconBrandSpeedtest } from '@tabler/icons-react';
import Button from '../Button/Button';
interface IProps {
    item: PackageItem;
}
const ProductCard = ({ item }: IProps) => {
    return (
        <div className="product-card-wrapper bg-white rounded-2xl w-70 md:w-120 rounded-2xl shadow-sm hover:-translate-y-3 transition-transform duration-500 ease-in-out hover:shadow-lg/20 transition-shadow duration-300 ease-in-out cursor-pointer">
            <div className="header h-15 bg-gradient-to-r from-primary to-[#f90233] rounded-t-2xl p-8">
                <h4 className="title text-white text-2xl h-full flex justify-start items-center">
                    <strong className="line-clamp-1">{item.name}</strong>
                </h4>
            </div>
            <div className="content flex flex-col p-5">
                <div className="speed-container flex gap-2 pb-2">
                    <div className="icon p-1 w-10 rounded-xl bg-gray-200">
                        <IconBrandSpeedtest width={'2rem'} height={'2rem'} />
                    </div>
                    <div className="speed font-bold">{item.speed}</div>
                </div>
                <div className="description pb-2">
                    <p className="text-gray-700 text-sm leading-relaxed mt-2 max-w-[250px] line-clamp-2 font-semibold">
                        {item.description}
                    </p>
                </div>
                <div className="bottom font-semibold gap-5">
                    <div className="price pb-2">{item.price} / Tháng</div>
                    <div className="detail-btn">
                        <Button hover>Xem chi tiết</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
