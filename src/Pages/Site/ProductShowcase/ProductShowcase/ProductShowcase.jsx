import FavTitle from "../../../../components/FavTitle/FavTitle";
import PageChangeTop from "../../../../components/PageChangeTop/PageChangeTop";
import ProductBanner from "../ProductBanner/ProductBanner";
import ProductProject from "../ProductProject/ProductProject";

const ProductShowcase = () => {
    return (
        <div>
            <FavTitle FavTitle="Product Showcase"></FavTitle>
            <PageChangeTop></PageChangeTop>
            <ProductBanner></ProductBanner>
            <ProductProject></ProductProject>
        </div>
    );
};

export default ProductShowcase;