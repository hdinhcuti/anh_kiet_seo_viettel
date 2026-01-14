import BlogPost from '@/components/ui/Blog/Blog';
import { NewsSummary } from '@/types/news';

interface ClientTinTucProps {
    titleService: string;
    newsData: NewsSummary[];
}
const ClientTinTuc = ({ titleService, newsData }: ClientTinTucProps) => {
    return (
        <>
            <BlogPost titleService={titleService} contentBlog={newsData} />
        </>
    );
};

export default ClientTinTuc;
