import { NextResponse } from 'next/server';

export async function GET() {
  const sampleContent = [
    {
      type: 'h1',
      children: [{ text: 'Nội dung từ API' }],
    },
    {
      type: 'p',
      children: [
        { text: 'Đây là nội dung được tải động từ một API endpoint. ' },
        { text: 'Dữ liệu này có định dạng giống hệt như giá trị của editor.', bold: true },
      ],
    },
    {
        type: 'blockquote',
        children: [{ text: 'Bạn có thể thay thế endpoint này bằng API thật của mình để lấy dữ liệu từ database hoặc headless CMS.' }],
    },
    {
        type: 'p',
        children: [{ text: 'Mọi thứ đều được render dưới dạng chỉ đọc (read-only).' }],
    }
  ];

  return NextResponse.json({ content: sampleContent });
}
