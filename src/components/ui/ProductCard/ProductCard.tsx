import { PackageItem } from '@/types/package';

import { IconBrandSpeedtest } from '@tabler/icons-react';
import Image from 'next/image';
import Button from '../Button/Button';
interface IProps {
    item: PackageItem;
}
const ProductCard = ({ item }: IProps) => {
    return (
        <div className="product-card-wrapper bg-white w-70 md:w-120 rounded-2xl overflow-hidden shadow-sm hover:-translate-y-3 transition-transform duration-500 ease-in-out hover:shadow-lg/20 transition-shadow duration-300 ease-in-out cursor-pointer">
            <div className="header h-15 bg-gradient-to-r from-primary to-[#f90233] rounded-t-2xl p-8">
                <h4 className="title text-white text-2xl h-full flex justify-start items-center">
                    <strong className="line-clamp-1">{item.name}</strong>
                </h4>
            </div>
            <div className="content flex flex-col ">
                {item?.thumbnail && (
                    <div className="overflow-hidden">
                        <Image
                            src={item.thumbnail}
                            alt=""
                            width={300}
                            height={200}
                            className="w-full sobject-contain hover:scale-120 transition-transform duration-700 ease-in-out"
                        />
                    </div>
                )}
                <div className="md:p-5 p-3">
                    {item.speed && (
                        <div className="speed-container flex gap-2 pb-2 items-center">
                            <div className="icon p-1 w-10 h-10 rounded-xl bg-gray-200">
                                <IconBrandSpeedtest width={'2rem'} height={'2rem'} />
                            </div>
                            <div className="speed font-bold">{item.speed}</div>
                        </div>
                    )}
                    <div className="description pb-2">
                        <p className="text-gray-700 text-sm leading-relaxed mt-2 max-w-[250px] line-clamp-2 font-semibold">
                            {item.description}
                        </p>
                    </div>
                    <div className="bottom font-semibold gap-5">
                        <div className="price pb-2">{item.price}</div>
                        <div className="detail-btn">
                            <Button hover>Xem chi tiết</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
