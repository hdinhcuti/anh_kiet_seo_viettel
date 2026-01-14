import BlogPost from '@/components/ui/Blog/Blog';
interface ClientTinTucProps {
    titleService: string;
    contentBlog: string;
}
const ClientChiTietTinTuc = ({ titleService, contentBlog }: ClientTinTucProps) => {
    return <BlogPost titleService={titleService} contentBlog={contentBlog} />;
};

export default ClientChiTietTinTuc;
