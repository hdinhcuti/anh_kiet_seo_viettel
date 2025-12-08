import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
            <h1 className="text-7xl font-bold text-primary pb-5">404</h1>

            <h2 className="text-2xl font-semibold mt-4 text-gray-800">Không tìm thấy trang</h2>

            <p className="text-gray-500 mt-2 pb-5">Trang bạn đang tìm không tồn tại hoặc đã bị xoá.</p>

            <Link
                href="/"
                className="mt-6 inline-block px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-700 transition "
            >
                Về trang chủ
            </Link>
        </div>
    );
};

export default NotFound;
