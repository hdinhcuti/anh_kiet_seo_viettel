'use client';
import Button from '@/components/ui/Button/Button';
import Tabs, { TabItem } from '@/components/ui/Tabs/Tabs';
import { PackageCategory, PackageData } from '@/types/package';
import { IconCircleChevronDown } from '@tabler/icons-react';
import { useState } from 'react';
import FeaturedPackagesCarousel from './FeaturedPackagesCarousel';

interface IProps {
    data: PackageData;
}
export default function FeaturedPackagesTabs({ data }: IProps) {
    const [selected, setSelected] = useState<PackageCategory>('internet');
    const itemsTab: TabItem<PackageCategory>[] = [
        { label: 'Internet', value: 'internet' },
        { label: 'Camera', value: 'camera' },
        { label: 'Truyền hình', value: 'tivi' },
    ];
    return (
        <div className="flex flex-col justify-center ">
            <div className="flex justify-center pb-5">
                <Tabs<PackageCategory> items={itemsTab} selected={selected} onChange={setSelected} />
            </div>
            <div className="flex flex-col justify-center items-center pb-5 gap-4">
                <div className="w-full max-w-[1300px] flex justify-center">
                    <FeaturedPackagesCarousel items={data[selected]} />
                </div>

                <Button to={`/${selected}`} active icon={<IconCircleChevronDown height={`1.5rem`} width={`1.5rem`} />}>
                    Xem tất cả
                </Button>
            </div>
        </div>
    );
}
