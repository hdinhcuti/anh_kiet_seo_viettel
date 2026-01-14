'use client';
import { PATH_CONFIG } from '@/configs/path-config';
import { PackageItem } from '@/types/package';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
interface ClientChiTietSanPhamProps {
    packageData: PackageItem;
}
const ClientChiTietSanPham = ({ packageData }: ClientChiTietSanPhamProps) => {
    return (
        <>
            <Head>
                <title>{packageData.name} - Chi tiết gói cước</title>
                <meta name="description" content={packageData.description} />
            </Head>

            <div className="min-h-screen bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                            {packageData.speed && (
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-600 to-pink-600"></div>
                                    <div className="absolute inset-0 backdrop-blur-3xl bg-black/20"></div>
                                    <div className="relative h-full flex flex-col items-center justify-center p-8 text-white text-center">
                                        <div className="space-y-6">
                                            <div>
                                                <div className="text-6xl sm:text-7xl font-bold mb-2">
                                                    {packageData.speed}
                                                </div>
                                            </div>
                                            <div className="h-px bg-white/30 w-32 mx-auto"></div>
                                            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
                                                {packageData.name}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {!packageData.speed && packageData.thumbnail && (
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl bg-white">
                                    <Image
                                        src={packageData.thumbnail}
                                        alt={packageData.name}
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            )}

                            {!packageData.speed && !packageData.thumbnail && (
                                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                                    <div className="text-center text-gray-500 p-8">
                                        <svg
                                            className="w-32 h-32 mx-auto mb-6 opacity-50"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={1.5}
                                                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                            />
                                        </svg>
                                        <p className="text-xl font-medium text-gray-600">Gói cước</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Right Column - Package Info */}
                        <div className="space-y-6">
                            {/* Title */}
                            <div>
                                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                                    {packageData.name}
                                </h1>
                                {packageData.speed && (
                                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M13 10V3L4 14h7v7l9-11h-7z"
                                            />
                                        </svg>
                                        Tốc độ: {packageData.speed}
                                    </div>
                                )}
                            </div>

                            {/* Price */}
                            <div className="bg-gradient-to-r from-primary/10 to-indigo-50 border-2 border-primary/10 rounded-xl p-6">
                                <div className="text-sm text-gray-600 mb-1">Giá cước</div>
                                <div className="md:text-4xl text-2xl font-bold text-primary">{packageData.price}</div>
                            </div>

                            {/* Description */}
                            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                    <svg
                                        className="w-5 h-5 text-primary"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Mô tả gói cước
                                </h3>
                                <p className="text-gray-700 leading-relaxed">{packageData.description}</p>
                            </div>

                            {/* Action Buttons */}
                            <Link href={PATH_CONFIG.lineHe} className="space-y-3">
                                <button className="w-full bg-primary hover:bg-primary text-white font-semibold py-4 px-6 rounded-xl transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                    Đăng ký ngay
                                </button>

                                <button className="w-full bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-6 rounded-xl transition border-2 border-gray-300 flex items-center justify-center gap-2 shadow-sm">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    Tư vấn thêm
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ClientChiTietSanPham;
