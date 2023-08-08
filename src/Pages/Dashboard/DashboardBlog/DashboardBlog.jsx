import BlogBannerPost from "../../../components/BlogBannerPost/BlogBannerPost";
import BlogDelete from "../../../components/BlogDelete/BlogDelete";
import BlogPost from "../../../components/BlogPost/BlogPost";



const DashboardBlog = () => {
    return (
        <div>
            <BlogBannerPost></BlogBannerPost>
            <BlogPost></BlogPost>
            <BlogDelete></BlogDelete>
        </div>
    );
};

export default DashboardBlog;