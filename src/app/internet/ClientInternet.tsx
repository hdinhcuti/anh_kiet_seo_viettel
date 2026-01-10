import BlogPost from '@/components/ui/Blog/Blog';
import { PackageItem } from '@/types/package';

interface IProps {
    titleService: string;
    description: string;
    packagesData: PackageItem[];
    contentBlog: string;
}
const ClientInternet = ({ titleService, description, packagesData, contentBlog }: IProps) => {
    return (
        <BlogPost
            title={titleService}
            description={description}
            packagesData={packagesData}
            contentBlog={contentBlog}
        />
    );
};

export default ClientInternet;
