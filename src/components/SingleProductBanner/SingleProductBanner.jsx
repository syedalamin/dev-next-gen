import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";


const SingleProductBanner = ({showcasebanner}) => {
    const {title, subTitle} = showcasebanner;
    return (
        <div>
            <div>
                <TitleSubTitle Title={title} subTitle={subTitle}></TitleSubTitle>
            </div>
        </div>
    );
};

export default SingleProductBanner;