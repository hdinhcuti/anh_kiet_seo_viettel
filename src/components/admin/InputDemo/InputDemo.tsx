import Input from '@/components/ui/Input/Input';
import { useState } from 'react';

export default function InputDemo() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        phone: '',
        age: '',
        username: '',
    });

    const [validStatus, setValidStatus] = useState({
        email: false,
        password: false,
        phone: false,
        age: false,
        username: false,
    });

    const handleSubmit = () => {
        const allValid = Object.values(validStatus).every((v) => v);
        if (allValid) {
            alert('Form hợp lệ! Dữ liệu:\n' + JSON.stringify(formData, null, 2));
        } else {
            alert('Vui lòng điền đầy đủ thông tin hợp lệ!');
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Input Component Demo</h1>
                <p className="text-gray-600 mb-8">Component Input với validation đầy đủ cho Next.js + TypeScript</p>

                <div className="space-y-6">
                    <Input
                        label="Email"
                        type="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        onValueChange={(val, isValid) => setValidStatus({ ...validStatus, email: isValid })}
                        validation={{
                            required: true,
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Email không hợp lệ',
                            },
                        }}
                        helperText="Nhập địa chỉ email của bạn"
                        leftIcon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                />
                            </svg>
                        }
                    />

                    <Input
                        label="Mật khẩu"
                        type="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        onValueChange={(val, isValid) => setValidStatus({ ...validStatus, password: isValid })}
                        validation={{
                            required: 'Vui lòng nhập mật khẩu',
                            minLength: {
                                value: 8,
                                message: 'Mật khẩu phải có ít nhất 8 ký tự',
                            },
                            custom: {
                                validate: (val) => /[A-Z]/.test(val) && /[0-9]/.test(val),
                                message: 'Mật khẩu phải chứa ít nhất 1 chữ hoa và 1 số',
                            },
                        }}
                        variant="outlined"
                        inputSize="md"
                        leftIcon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </svg>
                        }
                    />

                    <Input
                        label="Số điện thoại"
                        type="tel"
                        placeholder="0123456789"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        onValueChange={(val, isValid) => setValidStatus({ ...validStatus, phone: isValid })}
                        validation={{
                            required: true,
                            pattern: {
                                value: /^[0-9]{10}$/,
                                message: 'Số điện thoại phải có 10 chữ số',
                            },
                        }}
                        variant="filled"
                        leftIcon={
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                        }
                    />

                    <Input
                        label="Tuổi"
                        type="number"
                        placeholder="18"
                        value={formData.age}
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        onValueChange={(val, isValid) => setValidStatus({ ...validStatus, age: isValid })}
                        validation={{
                            required: true,
                            min: {
                                value: 18,
                                message: 'Tuổi phải từ 18 trở lên',
                            },
                            max: {
                                value: 100,
                                message: 'Tuổi không được vượt quá 100',
                            },
                        }}
                        variant="standard"
                        inputSize="lg"
                    />

                    <Input
                        label="Tên người dùng"
                        type="text"
                        placeholder="username123"
                        value={formData.username}
                        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                        onValueChange={(val, isValid) => setValidStatus({ ...validStatus, username: isValid })}
                        validation={{
                            required: true,
                            minLength: {
                                value: 3,
                                message: 'Tên người dùng phải có ít nhất 3 ký tự',
                            },
                            maxLength: {
                                value: 20,
                                message: 'Tên người dùng không được vượt quá 20 ký tự',
                            },
                            pattern: {
                                value: /^[a-zA-Z0-9_]+$/,
                                message: 'Chỉ được sử dụng chữ cái, số và dấu gạch dưới',
                            },
                        }}
                        inputSize="sm"
                        helperText="3-20 ký tự, chỉ chữ cái, số và _"
                    />

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                        Gửi Form
                    </button>
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <h3 className="font-semibold text-gray-700 mb-2">Trạng thái validation:</h3>
                    <pre className="text-sm text-gray-600 overflow-x-auto">{JSON.stringify(validStatus, null, 2)}</pre>
                </div>
            </div>
        </div>
    );
}
