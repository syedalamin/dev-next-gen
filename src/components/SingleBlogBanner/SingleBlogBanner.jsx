import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";


const SingleBlogBanner = ({blog}) => {
    const {title, subTitle} = blog;
    return (
        <div>
            <div>
                <TitleSubTitle Title={title} subTitle={subTitle}></TitleSubTitle>
            </div>
        </div>
    );
};


export default SingleBlogBanner;