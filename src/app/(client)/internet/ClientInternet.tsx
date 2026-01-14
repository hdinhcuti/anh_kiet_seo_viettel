import BlogPost from '@/components/ui/Blog/Blog';
import { PackageItem } from '@/types/package';

interface IProps {
    titleBlog: string;
    titleService: string;
    description: string;
    packagesData: PackageItem[];
    contentBlog: string;
}
const ClientInternet = ({ titleBlog, titleService, description, packagesData, contentBlog }: IProps) => {
    return (
        <BlogPost
            titleBlog={titleBlog}
            titleService={titleService}
            description={description}
            packagesData={packagesData}
            contentBlog={contentBlog}
        />
    );
};

export default ClientInternet;
