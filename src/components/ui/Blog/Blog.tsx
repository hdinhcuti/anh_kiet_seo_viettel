import FeaturedPackagesCarousel from '@/components/sections/FeaturedPackages/FeaturedPackagesCarousel';
import { NewsSummary } from '@/types/news';
import { PackageItem } from '@/types/package';
import NewsCard from '../NewsCard/NewsCard';

interface BlogPostProps {
    titleService: string;
    description?: string;
    packagesData?: PackageItem[];
    titleBlog?: string;
    contentBlog: string | NewsSummary[];
}
function BlogPost({ titleService, description, packagesData, titleBlog, contentBlog }: BlogPostProps) {
    return (
        <div className="w-full mx-auto flex flex-col bg-white h-full">
            {packagesData && (
                <div className="bg-gray-100">
                    <div className="max-w-[1300px] w-full h-full p-5 mx-auto bg-gray-100">
                        <div className="flex md:flex-row flex-col justify-center items-center gap-5">
                            <div className="flex flex-col items-center justify-center gap-5 lg:w-100 w-70">
                                <div className="title text-4xl w-full font-bold flex items-center justify-center text-center">
                                    Sản phẩm nổi bật
                                </div>
                                <article className="antialiased">
                                    <p className="text-sm w-80 leading-relaxed text-gray-500 mx-auto h-full md:px-5 px-3 text-justify">
                                        {description}
                                    </p>
                                </article>
                            </div>

                            <div className="md:w-300 w-full h-full overflow-hidden">
                                <FeaturedPackagesCarousel items={packagesData} classNames="" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="md:my-2 my-5 w-[75%] h-full mx-auto md:p-5 ">
                <div className="flex items-center w-full ">
                    <div className="hidden md:block flex-grow h-px bg-primary/50"></div>

                    <span className="md:px-4 text-primary font-bold text-md md:text-3xl uppercase text-center mx-auto text-center">
                        <span className="text-primary font-bold text-md md:text-2xl ">{titleService}</span>
                    </span>

                    <div className="hidden md:block flex-grow h-px bg-primary/50"></div>
                </div>
            </div>
            <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 py-5 px-2 md:border-t md:border-transparent border-t border-red-200">
                <div className="lg:border-r border-gray/10 lg:pr-6 h-full ">
                    <div className="content w-full">
                        <h1 className="mb-5 font-bold md:text-2xl text-md md:text-start text-center">{titleBlog}</h1>
                        {typeof contentBlog === 'string' && (
                            <article className="blog-content" dangerouslySetInnerHTML={{ __html: contentBlog }} />
                        )}

                        {Array.isArray(contentBlog) && (
                            <div>
                                {contentBlog.map((value, index) => (
                                    <div key={index} className="mb-5">
                                        <NewsCard item={value} key={index} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <aside className="self-start sticky top-30 ">
                    <div className="lg:w-[320px] w-full border-2 border-red-500">
                        <div className="bg-primary text-white font-bold text-center py-3 uppercase">ĐỘI NGŨ TƯ VẤN</div>
                        <div className="divide-y divide-red-300">
                            {[
                                ['Hà Nội', '0987.654.321'],
                                ['TP.HCM', '0987.654.321'],
                                ['Đà Nẵng', '0987.654.321'],
                                ['Cần Thơ', '0987.654.321'],
                                ['Toàn Quốc', '0987.654.321'],
                            ].map(([city, phone], index) => (
                                <div key={index} className="flex">
                                    <div className="w-1/2 bg-red-50 text-gray-700 font-semibold py-3 text-center border-r border-red-300">
                                        {city}
                                    </div>
                                    <a
                                        href={`tel:${phone.replaceAll('.', '')}`}
                                        className="w-1/2 text-red-500 font-bold py-3 text-center hover:underline"
                                    >
                                        {phone}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

export default BlogPost;
