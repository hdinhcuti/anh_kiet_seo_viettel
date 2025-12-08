'use client';
import Tabs, { TabItem } from '@/components/ui/Tabs/Tabs';
import { PackageCategory, PackageData } from '@/types/package';
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
        { label: 'Truyền hình', value: 'tv' },
    ];
    return (
        <div className="flex flex-col justify-center ">
            <div className="flex justify-center pb-5">
                <Tabs<PackageCategory> items={itemsTab} selected={selected} onChange={setSelected} />
            </div>
            <div className="flex justify-center bg-gray-100">
                <FeaturedPackagesCarousel items={data[selected]} />
            </div>
        </div>
    );
}
