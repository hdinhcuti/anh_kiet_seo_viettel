'use client';

import {
    Camera,
    ChevronDown,
    FileText,
    LayoutDashboard,
    Menu,
    MessageSquare,
    Newspaper,
    Package,
    Smartphone,
    Tv,
    Wifi,
} from 'lucide-react';
import { useState } from 'react';

interface MenuItem {
    title: string;
    href: string;
    icon: React.ReactNode;
    children?: MenuItem[];
}

const menuItems: MenuItem[] = [
    {
        title: 'Dashboard',
        href: '/admin/dashboard',
        icon: <LayoutDashboard size={20} />,
    },
    {
        title: 'Quản lý gói cước',
        href: '/admin/quan-ly-goi-cuoc',
        icon: <Package size={20} />,
        children: [
            { title: 'Loại gói cước', href: '/admin/quan-ly-goi-cuoc/loai-goi-cuoc', icon: <Package size={16} /> },
            { title: 'Gói Internet', href: '/admin/quan-ly-goi-cuoc/internet', icon: <Wifi size={16} /> },
            { title: 'Gói Camera', href: '/admin/quan-ly-goi-cuoc/camera', icon: <Camera size={16} /> },
            { title: 'Gói Truyền hình', href: '/admin/quan-ly-goi-cuoc/truyen-hinh', icon: <Tv size={16} /> },
        ],
    },
    {
        title: 'Quản lý tin tức',
        href: '/admin/quan-ly-tin-tuc',
        icon: <Newspaper size={20} />,
    },
    {
        title: 'Quản lý bài viết',
        href: '/admin/quan-ly-bai-viet',
        icon: <FileText size={20} />,
        children: [
            { title: 'Bài viết Internet', href: '/admin/quan-ly-bai-viet/internet', icon: <Wifi size={16} /> },
            { title: 'Bài viết Truyền hình', href: '/admin/quan-ly-bai-viet/truyen-hinh', icon: <Tv size={16} /> },
            { title: 'Bài viết Di động', href: '/admin/quan-ly-bai-viet/di-dong', icon: <Smartphone size={16} /> },
        ],
    },
    {
        title: 'Quản lý liên hệ',
        href: '/admin/quan-ly-lien-he',
        icon: <MessageSquare size={20} />,
    },
];

export default function AdminLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [openMenus, setOpenMenus] = useState<string[]>(['/admin/quan-ly-goi-cuoc']);
    const [activePage, setActivePage] = useState('/admin/quan-ly-goi-cuoc/loai-goi-cuoc');
    const [showUserMenu, setShowUserMenu] = useState(false);

    const toggleMenu = (href: string) => {
        setOpenMenus((prev) => (prev.includes(href) ? prev.filter((h) => h !== href) : [...prev, href]));
    };

    const isActive = (href: string) => activePage === href;
    const isParentActive = (href: string) => activePage.startsWith(href);

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Overlay mobile */}
            {sidebarOpen && (
                <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
            )}

            {/* Sidebar */}
            <aside
                className={`
                    fixed md:static inset-y-0 left-0 z-50
                    bg-white border-r border-gray-200
                    transition-all duration-300 ease-in-out
                    flex flex-col
                    ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:translate-x-0
                    ${sidebarOpen ? 'w-72' : 'md:w-20 w-72'}
                `}
            >
                {/* Logo */}
                <div className="flex items-center justify-between px-5 h-20 border-b border-gray-200">
                    <div className="flex items-center space-x-3 overflow-hidden">
                        <div
                            className={`transition-all duration-300 overflow-hidden ${
                                sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                            }`}
                        >
                            <h1 className="text-lg font-bold text-gray-900 whitespace-nowrap">AdminHub</h1>
                            <p className="text-xs text-gray-500 whitespace-nowrap">Quản trị hệ thống</p>
                        </div>
                    </div>
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                    >
                        <Menu size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    {menuItems.map((item) => (
                        <div key={item.href}>
                            <div
                                onClick={() => (item.children ? toggleMenu(item.href) : setActivePage(item.href))}
                                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                                    isParentActive(item.href)
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'text-gray-700 hover:bg-gray-50'
                                }`}
                            >
                                <div className="flex items-center space-x-3">
                                    {item.icon}
                                    <span
                                        className={`text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                                            sidebarOpen ? 'opacity-100 w-auto' : 'opacity-0 w-0'
                                        } overflow-hidden`}
                                    >
                                        {item.title}
                                    </span>
                                </div>
                                {item.children && sidebarOpen && (
                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${
                                            openMenus.includes(item.href) ? 'rotate-180' : ''
                                        }`}
                                    />
                                )}
                            </div>

                            {item.children && openMenus.includes(item.href) && sidebarOpen && (
                                <div className="ml-3 mt-1 space-y-1 border-l-2 border-gray-200 pl-3">
                                    {item.children.map((child) => (
                                        <div
                                            key={child.href}
                                            onClick={() => setActivePage(child.href)}
                                            className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer text-sm ${
                                                isActive(child.href)
                                                    ? 'bg-blue-50 text-blue-700'
                                                    : 'text-gray-600 hover:bg-gray-50'
                                            }`}
                                        >
                                            {child.icon}
                                            <span>{child.title}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </aside>

            {/* Main */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="bg-white border-b border-gray-200 h-20 flex items-center px-6">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 md:hidden"
                    >
                        <Menu size={20} />
                    </button>
                    <h2 className="ml-4 text-lg font-bold text-gray-900">Admin</h2>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-8">
                    <div className="bg-white rounded-xl border p-12 text-center text-gray-500">Nội dung trang</div>
                </main>
            </div>
        </div>
    );
}
