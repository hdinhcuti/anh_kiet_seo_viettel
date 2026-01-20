import DeleteModal from '@/components/ui/Modal/components/DeteleModal/DeleteModal';
import Modal from '@/components/ui/Modal/Modal';
import { URL_CONFIG } from '@/configs/url-config';
import { ChevronDown, ChevronUp, ChevronsUpDown, Edit, Plus, RefreshCw, Search, Trash2 } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import SaveCategory from './SaveCategory';

// Type Definitions
export interface Category {
    id: number;
    tenDanhMuc: string;
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
    const fetchData = async (): Promise<Category[]> => {
        try {
            const res = await fetch(`${URL_CONFIG.api}/danh-muc-chinh`);

            if (!res.ok) {
                throw new Error('Request failed');
            }

            const responseData = await res.json();
            return responseData.data ?? [];
        } catch (error) {
            console.error(error);
            return [];
        }
    };

    const [data, setData] = useState<Category[]>([]);

    const [sortConfig, setSortConfig] = useState<SortConfig>({ key: null, direction: null });
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(5);
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    const [openCreate, setOpenCreate] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [loading, setLoading] = useState(false);

    const [selected, setSelected] = useState<Category | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetchData();
            setData(result);
        };
        loadData();
    }, [openCreate, openEdit, openDelete]);

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
                    item.tenDanhMuc.toLowerCase().includes(searchTerm.toLowerCase()) ||
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

    const handleDelete = async () => {
        setLoading(true);
        try {
            const url = `${URL_CONFIG.api}/danh-muc-chinh/${selected?.id}`;
            const res = await fetch(url, {
                method: 'DELETE',
                // headers: {
                //     'Content-Type': 'application/json',
                // },
                // body: JSON.stringify({
                //     tenDanhMuc: formData.nameCategory,
                // }),
            });

            if (res.status == 201 || res.status == 200) {
                // const result = await res.json();
                toast.success(`Xóa danh mục thành công!`);
                return;
            }

            if (res.status == 409) {
                toast.error(`Danh mục đã tồn tại`);
                return;
            }
        } catch (error) {
            toast.error(`xóa danh mục thất bại! [Lỗi] => ${error}`);
        } finally {
            setLoading(false);
            setOpenDelete(false);
        }
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
                            <button
                                onClick={() => {
                                    setOpenCreate((prev) => !prev);
                                }}
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-200 bg-white hover:bg-gray-100 hover:text-gray-900 h-10 px-4 py-2"
                            >
                                <Plus className="mr-2 h-4 w-4" />
                                Thêm
                            </button>
                            <Modal
                                onChange={(value) => setOpenCreate(value)}
                                open={openCreate}
                                title="Thêm danh mục"
                                classNames="md:w-130 w-80 h-60"
                            >
                                <SaveCategory type="create" onClose={(value) => setOpenCreate(value)} />
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
                                    onClick={() => handleSort('tenDanhMuc')}
                                >
                                    <div className="flex items-center">
                                        Tên danh mục
                                        <SortIcon columnKey="tenDanhMuc" />
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
                                        <td className="p-4 align-middle font-semibold text-gray-900">
                                            {item.tenDanhMuc}
                                        </td>
                                        <td className="p-4 align-middle text-gray-500">
                                            <code className="bg-gray-100 px-2.5 py-1 rounded text-xs font-mono">
                                                {item.slug}
                                            </code>
                                        </td>
                                        <td className="p-4 align-middle text-right">
                                            <div className="flex justify-end gap-2">
                                                <div
                                                    onClick={() => {
                                                        setSelected(item);
                                                        setOpenEdit(true);
                                                    }}
                                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-blue-50 h-8 w-8 p-0"
                                                >
                                                    <Edit className="h-4 w-4 text-blue-600" />
                                                </div>

                                                <div
                                                    onClick={() => {
                                                        setSelected(item);
                                                        setOpenDelete(true);
                                                    }}
                                                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-red-50 h-8 w-8 p-0"
                                                >
                                                    <Trash2 className="h-4 w-4 text-red-600" />
                                                </div>
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
            <Modal
                onChange={(value) => setOpenEdit(value)}
                open={openEdit}
                title="Sửa danh mục"
                classNames="md:w-130 w-80 h-60"
            >
                <SaveCategory type="update" data={selected} onClose={(value) => setOpenEdit(value)} />
            </Modal>

            <DeleteModal
                loading={loading}
                title={'Xác nhận xóa danh mục'}
                classNames="md:w-130 w-80 h-45"
                onChange={(value) => setOpenDelete(value)}
                open={openDelete}
                onSubmit={() => handleDelete()}
            />
        </div>
    );
};

export default ManageCategory;
