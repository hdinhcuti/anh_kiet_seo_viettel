'use client';
import { useRelativeTime } from '@/hooks/useRelativeTime';
import { NewsSummary } from '@/types/news';
import { formatVNDate } from '@/utils/formatTime';
import { IconChevronRight } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../Button/Button';
interface IProps {
    item: NewsSummary;
}

const NewsCard = ({ item }: IProps) => {
    const time = useRelativeTime(item.date);
    return (
        <Link
            href={item.slug}
            className="news-wrapper flex lg:flex-col flex-row md:w-full  w-full bg-white rounded-2xl shadow-sm hover:-translate-y-3 transition-transform duration-500 ease-in-out hover:hover:shadow-lg/20 transition-shadow duration-300 ease-in-out cursor-pointer"
        >
            <div className="thumbnail lg:w-full w-50 rounded-2xl shadow-sm">
                <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover rounded-2xl "
                />
            </div>
            <div className="lg:p-3 p-2 w-full">
                <div className="time flex justify-between text-gray/60 text-sm pb-3">
                    <div className="time-ago">{time}</div>
                    <div className="date-original">{formatVNDate(item.date)}</div>
                </div>
                <h5 className="title text-primary lg:text-xl sm:text-lg text-sm line-clamp-1">
                    <strong>{item.title}</strong>
                </h5>
                <div className="description pb-5 pt-1">
                    <p className="text-gray-700 text-sm leading-6 line-clamp-1">{item.description}</p>
                </div>
                <div className="detail hidden lg:flex justify-center ">
                    <Button leftIcon={<IconChevronRight width={20} />} hover>
                        Xem chi tiết
                    </Button>
                </div>
            </div>
        </Link>
    );
};

export default NewsCard;
