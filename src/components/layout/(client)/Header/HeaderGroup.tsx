'use client';

import Header from '@/components/layout/(client)/Header/Header';
import Navbar from '@/components/layout/(client)/Navbar/Navbar';
import { forwardRef, useEffect, useState } from 'react';

const HeaderGroup = forwardRef<HTMLDivElement, { onOpenSidebar: () => void }>(({ onOpenSidebar }, ref) => {
    const [hidden, setHidden] = useState(false);
    const [autoShown, setAutoShown] = useState(false); // đã auto-show chưa?

    useEffect(() => {
        const handleScroll = () => {
            // Nếu user kéo lên đầu trang → reset hiệu ứng
            if (window.scrollY === 0) {
                setHidden(false);
                setAutoShown(false); // cho phép hiệu ứng chạy lại
                return;
            }

            // Nếu đã auto show rồi → không chạy lại
            if (autoShown) return;

            // Khi user kéo xuống bất kỳ lúc nào (lan đầu tiên)
            setHidden(true);

            // Sau 1.5s → header chạy xuống lại
            setTimeout(() => {
                setHidden(false);
                setAutoShown(true); // không cho chạy lại cho đến khi scrollY = 0
            }, 1500);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [autoShown]);

    return (
        <div
            ref={ref}
            className={`
                fixed top-0 left-0 w-full z-[9997] bg-white/90
                transition-transform duration-500
                ${hidden ? '-translate-y-full' : 'translate-y-0'}
            `}
        >
            <header className="h-[70px]">
                <Header onOpenSidebar={onOpenSidebar} />
            </header>

            <nav className="">
                <Navbar />
            </nav>
        </div>
    );
});

HeaderGroup.displayName = 'HeaderGroup';

export default HeaderGroup;
