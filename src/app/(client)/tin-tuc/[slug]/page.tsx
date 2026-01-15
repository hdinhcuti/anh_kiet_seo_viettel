import { URL_CONFIG } from '@/configs/url-config';
import { Base64 } from 'js-base64';
import ClientChiTietTinTuc from './ClientTinTuc';

const ChiTietTinTuc = async ({ params }: { params: { slug: string } }) => {
    //1767794048353
    const { slug } = await params;

    const res = await fetch(`${URL_CONFIG.api}/posts/${slug}`, { cache: 'no-store' });

    const data = await res.json();

    const contentBlog = Base64.decode(data?.content);

    const titleService: string = 'Tin tức';

    return <ClientChiTietTinTuc titleService={titleService} contentBlog={contentBlog} />;
};

export default ChiTietTinTuc;
