import useBlogBanner from "../../hooks/useBlogBanner";
import BlogBannerUpdate from "../BlogBannerUpdate/BlogBannerUpdate";

const BlogBannerPost = () => {
    const [blogBanner] = useBlogBanner();
    return (
        <div>
            <div>
                {
                    blogBanner.map(blog => <BlogBannerUpdate
                        key={blog._id}
                        blog={blog}
                    ></BlogBannerUpdate>)
                }
            </div>
        </div>
    );
};

export default BlogBannerPost;