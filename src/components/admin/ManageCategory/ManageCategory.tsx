import Modal from '@/components/ui/Modal/Modal';
import { ChevronDown, ChevronUp, ChevronsUpDown, Edit, Plus, RefreshCw, Search, Trash2 } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import SaveCategory from './SaveCategory';

// Type Definitions
interface Category {
    id: number;
    name: string;
    slug: string;
}

type SortDirection = 'asc' | 'desc' | null;

interface SortConfig {
    key: keyof Category | null;
    direction: SortDirection;
}

// Component Props
interface SortIconProps {
    columnKey: keyof Category;
}

const ManageCategory: React.FC = () => {
    const [data] = useState<Category[]>([
        { id: 1, name: 'Điện thoại', slug: 'dien-thoai' },
        { id: 2, name: 'Laptop', slug: 'laptop' },
        { id: 3, name: 'Tablet', slug: 'tablet' },
        { id: 4, name: 'Phụ kiện', slug: 'phu-kien' },
        { id: 5, name: 'Tai nghe', slug: 'tai-nghe' },
        { id: 6, name: 'Đồng hồ thông minh', slug: 'dong-ho-thong-minh' },
        { id: 7, name: 'Camera', slug: 'camera' },
        { id: 8, name: 'PC Gaming', slug: 'pc-gaming' },
    ]);

    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(5);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const [modalChange, setModalChange] = useState(false);

    const [nameCategory, setNameCategory] = useState<string>('');

    const handleSort = (key: keyof Category): void => {
        let direction: SortDirection = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const filteredAndSortedData = useMemo<Category[]>(() => {
        let filtered = [...data];

        // Search filter
        if (searchTerm) {
            filtered = filtered.filter(
                (item) =>
                    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.slug.toLowerCase().includes(searchTerm.toLowerCase()),
            );
        }

        // Sorting
        if (sortConfig.key) {
            filtered.sort((a, b) => {
                const aValue = a[sortConfig.key!];
                const bValue = b[sortConfig.key!];

                if (aValue < bValue) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }

        return filtered;
    }, [data, searchTerm, sortConfig]);

    const paginatedData = useMemo<Category[]>(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return filteredAndSortedData.slice(startIndex, startIndex + itemsPerPage);
    }, [filteredAndSortedData, currentPage, itemsPerPage]);

    const totalPages = Math.ceil(filteredAndSortedData.length / itemsPerPage);

    const toggleRowSelection = (id: number): void => {
        setSelectedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]));
    };

    const toggleSelectAll = (): void => {
        if (selectedRows.length === paginatedData.length) {
            setSelectedRows([]);
        } else {
            setSelectedRows(paginatedData.map((item) => item.id));
        }
    };

    const SortIcon: React.FC<SortIconProps> = ({ columnKey }) => {
        if (sortConfig.key !== columnKey) {
            return <ChevronsUpDown className="ml-2 h-4 w-4 text-gray-400" />;
        }
        return sortConfig.direction === 'asc' ? (
            <ChevronUp className="ml-2 h-4 w-4" />
        ) : (
            <ChevronDown className="ml-2 h-4 w-4" />
        );
    };

    return (
        <div className="w-full mx-auto">
            <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="p-6 space-y-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                        <div className="min-w-[250px] relative border border-gray/10 rounded-xl">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm theo tên hoặc slug..."
                                value={searchTerm}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                                className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 pl-9 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500"
                            />
                        </div>

                        <div className="flex gap-2">
                            <Modal
                                onChange={(value) => setModalChange(value)}
                                open={modalChange}
                                title="Thêm danh mục"
                                trigger={
                                    <div className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-10 px-4 py-2">
                                        <Plus className="mr-2 h-4 w-4" />
                                        Thêm
                                    </div>
                                }
                                classNames="md:w-130 w-80 h-60"
                            >
                                <SaveCategory type="create" onClose={(value) => setModalChange(value)} />
                            </Modal>
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-gray-50 hover:bg-gray-900/90 h-10 px-4 py-2">
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Làm mới
                            </button>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="relative w-full overflow-auto">
                    <table className="w-full caption-bottom text-sm">
                        <thead className="border-b">
                            <tr className="border-b transition-colors hover:bg-gray-50/50">
                                <th className="h-12 px-4 text-left align-middle font-medium text-gray-500 w-[50px]">
                                    <input
                                        type="checkbox"
                                        checked={
                                            selectedRows.length === paginatedData.length && paginatedData.length > 0
                                        }
                                        onChange={toggleSelectAll}
                                        className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
                                    />
                                </th>
                                <th
                                    className="h-12 px-4 text-left align-middle font-medium text-gray-500 cursor-pointer hover:bg-gray-50"
                                    onClick={() => handleSort('id')}
                                >
                                    <div className="flex items-center">
                                        ID
                                        <SortIcon columnKey="id" />
                                    </div>
                                </th>
                                <th
                                    className="h-12 px-4 text-left align-middle font-medium text-gray-500 cursor-pointer hover:bg-gray-50"
                                    onClick={() => handleSort('name')}
                                >
                                    <div className="flex items-center">
                                        Tên danh mục
                                        <SortIcon columnKey="name" />
                                    </div>
                                </th>
                                <th
                                    className="h-12 px-4 text-left align-middle font-medium text-gray-500 cursor-pointer hover:bg-gray-50"
                                    onClick={() => handleSort('slug')}
                                >
                                    <div className="flex items-center">
                                        Slug
                                        <SortIcon columnKey="slug" />
                                    </div>
                                </th>
                                <th className="h-12 px-4 text-right align-middle font-medium text-gray-500">
                                    Thao tác
                                </th>
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {paginatedData.length === 0 ? (
                                <tr className="border-b transition-colors hover:bg-gray-50/50">
                                    <td colSpan={5} className="p-4 align-middle h-24 text-center">
                                        Không tìm thấy kết quả.
                                    </td>
                                </tr>
                            ) : (
                                paginatedData.map((item: Category) => (
                                    <tr
                                        key={item.id}
                                        className={`border-b transition-colors hover:bg-gray-50/50 ${
                                            selectedRows.includes(item.id) ? 'bg-gray-50' : ''
                                        }`}
                                    >
                                        <td className="p-4 align-middle">
                                            <input
                                                type="checkbox"
                                                checked={selectedRows.includes(item.id)}
                                                onChange={() => toggleRowSelection(item.id)}
                                                className="h-4 w-4 rounded border-gray-300 text-gray-900 focus:ring-2 focus:ring-gray-950 focus:ring-offset-2"
                                            />
                                        </td>
                                        <td className="p-4 align-middle font-medium text-gray-600">#{item.id}</td>
                                        <td className="p-4 align-middle font-semibold text-gray-900">{item.name}</td>
                                        <td className="p-4 align-middle text-gray-500">
                                            <code className="bg-gray-100 px-2.5 py-1 rounded text-xs font-mono">
                                                {item.slug}
                                            </code>
                                        </td>
                                        <td className="p-4 align-middle text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-blue-50 h-8 w-8 p-0">
                                                    <Edit className="h-4 w-4 text-blue-600" />
                                                </button>
                                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-red-50 h-8 w-8 p-0">
                                                    <Trash2 className="h-4 w-4 text-red-600" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                        Hiển thị{' '}
                        <span className="font-medium text-gray-900">{(currentPage - 1) * itemsPerPage + 1}</span> đến{' '}
                        <span className="font-medium text-gray-900">
                            {Math.min(currentPage * itemsPerPage, filteredAndSortedData.length)}
                        </span>{' '}
                        trong tổng số <span className="font-medium text-gray-900">{filteredAndSortedData.length}</span>{' '}
                        kết quả
                        {selectedRows.length > 0 && (
                            <span className="ml-4 font-medium text-gray-900">
                                ({selectedRows.length} dòng được chọn)
                            </span>
                        )}
                    </div>

                    <div className="flex gap-2">
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                            disabled={currentPage === 1}
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-9 px-4 py-2"
                        >
                            Trước
                        </button>

                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i + 1}
                                onClick={() => setCurrentPage(i + 1)}
                                className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 ${
                                    currentPage === i + 1
                                        ? 'bg-gray-900 text-gray-50 hover:bg-gray-900/90'
                                        : 'border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900'
                                }`}
                            >
                                {i + 1}
                            </button>
                        ))}

                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                            disabled={currentPage === totalPages}
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-9 px-4 py-2"
                        >
                            Sau
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageCategory;
