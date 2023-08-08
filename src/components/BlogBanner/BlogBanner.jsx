import useBlogBanner from "../../hooks/useBlogBanner";
import SingleBlogBanner from "../SingleBlogBanner/SingleBlogBanner";


const BlogBanner = () => {
    const [blogBanner] = useBlogBanner();
    
    return (
        <div>
            <div className="w-11/12 mx-auto">
                {
                    blogBanner.map(blog => <SingleBlogBanner
                        key={blog._id}
                        blog={blog}
                    ></SingleBlogBanner> )
                }
            </div>
        </div>
    );
};

export default BlogBanner;