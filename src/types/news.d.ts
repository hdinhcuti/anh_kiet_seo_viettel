//Nội dung cho list news ở cuối các trang, không đầy đủ
export interface NewsSummary {
    id: string;
    title: string;
    thumbnail: string;
    date: string;
    description: string;
    slug: string;
}

export interface NewsDetail {
    id: string;
    slug: string;
    title: string;
    content: string;
    thumbnail: string;
    date: string;
}
