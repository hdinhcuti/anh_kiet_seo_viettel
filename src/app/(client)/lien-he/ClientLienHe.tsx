'use client';
import Button from '@/components/ui/Button/Button';
import phoneCall from '@public/logo/phone-call.svg';
import zaloLogo from '@public/logo/zalo-logo.svg';
import { IconSend } from '@tabler/icons-react';
import Image from 'next/image';
import { useState } from 'react';
const ClientContact = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading((prev) => true);
        setTimeout(() => {
            setLoading((prev) => false);
            // onChange(false);
        }, 2000);
    };

    return (
        <div className="contact max-w-5xl md:mx-auto my-10 mx-5 bg-white rounded-2xl shadow-2xl ">
            <div className="bg-gradient-to-r from-primary to-[#f90233] text-white py-5 px-6 rounded-t-2xl">
                <h1 className="text-3xl md:text-5xl font-bold text-center uppercase tracking-wide">
                    Thông Tin Liên Hệ
                </h1>
                <p className="text-center mt-3 text-white/90 text-sm md:text-base">
                    Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
                <div className="infomation-contact flex-1 space-y-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Liên hệ với chúng tôi</h2>

                    {/* Zalo */}
                    <div className="flex items-center gap-4 md:p-4 p-2 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                        <div className="icon shadow-lg w-14 h-14 rounded-full flex justify-center items-center bg-white">
                            <Image src={zaloLogo} alt="Zalo Logo" className="w-9 h-9 object-contain" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Zalo</p>
                            <p className="text-lg font-semibold text-gray-800">Tăng Kiệt</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 md:p-4 p-2  rounded-xl hover:bg-gray-50 transition-colors duration-300">
                        <div className="icon shadow-lg w-14 h-14 rounded-full flex justify-center items-center bg-primary">
                            <Image src={phoneCall} alt="Phone call Logo" className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Hotline</p>
                            <p className="text-lg font-semibold text-gray-800">0987.654.321</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 md:p-4 p-2  rounded-xl hover:bg-gray-50 transition-colors duration-300">
                        <div className="icon shadow-lg w-14 h-14 rounded-full flex justify-center items-center bg-blue-500">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Email</p>
                            <p className="text-lg font-semibold text-gray-800">support@company.com</p>
                        </div>
                    </div>

                    {/* Address (optional) */}
                    <div className="flex items-start gap-4 md:p-4 p-2  rounded-xl hover:bg-gray-50 transition-colors duration-300">
                        <div className="icon shadow-lg w-14 h-14 rounded-full flex justify-center items-center bg-green-500">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">Địa chỉ</p>
                            <p className="text-base font-semibold text-gray-800">
                                123 Đường ABC, Quận XYZ
                                <br />
                                TP. HCM
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right: Form - flex-[2] */}
                <div className="form-contact flex-1 md:flex-[2]">
                    <div className="space-y-5">
                        {/* Name Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Họ và tên <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Nguyễn Văn A"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300"
                            />
                        </div>

                        {/* Phone Input */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Số điện thoại <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="0987 654 321"
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Địa chỉ <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                placeholder="Nhập địa chỉ cần lắp đặt"
                                rows={5}
                                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all duration-300 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        {/* <button
                            type="button"
                            className="w-full bg-gradient-to-r from-primary to-[#f90233] hover:from-primary/90 hover:to-[#f90233]/90 text-white font-semibold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <span>Gửi thông tin</span>
                            <IconSend />
                        </button> */}

                        <Button
                            leftIcon={<IconSend width={25} height={25} />}
                            primary
                            active
                            className="w-full !h-15 !text-2xl"
                            onClick={() => handleSubmit()}
                            loading={loading}
                        >
                            Gửi thông tin
                        </Button>

                        <p className="text-center text-sm text-gray-500 mt-4">
                            Chúng tôi sẽ phản hồi trong vòng <span className="font-semibold text-primary">24 giờ</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientContact;
