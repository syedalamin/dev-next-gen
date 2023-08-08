import BlogBanner from "../../../../components/BlogBanner/BlogBanner";
import FavTitle from "../../../../components/FavTitle/FavTitle";
import PageChangeTop from "../../../../components/PageChangeTop/PageChangeTop";
import ShowBlog from "../ShowBlog/ShowBlog";

const Blog = () => {
    return (
        <div>
            <FavTitle FavTitle="Blog"></FavTitle>
            <PageChangeTop></PageChangeTop>
            <BlogBanner></BlogBanner>
            <ShowBlog></ShowBlog>
        </div>
    );
};

export default Blog;