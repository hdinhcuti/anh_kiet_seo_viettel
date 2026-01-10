// src/app/api/upload/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const imageFile = formData.get('image'); // 'image' là key mà frontend gửi lên

    if (!imageFile || typeof imageFile === 'string') {
      return NextResponse.json({ error: 'No image file provided' }, { status: 400 });
    }

    // Ở đây bạn sẽ xử lý file ảnh
    // Ví dụ: Lưu vào một dịch vụ lưu trữ (S3, Cloudinary) hoặc thư mục cục bộ
    // For demonstration, we'll just create a mock URL
    const imageUrl = `http://example.com/uploads/${imageFile.name}`;

    // Trả về URL của ảnh đã upload
    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
