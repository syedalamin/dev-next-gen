import ProductBannerPost from "../../../components/ProductBannerPost/ProductBannerPost";
import ProductShowcaseDelete from "../../../components/ProductShowcaseDelete/ProductShowcaseDelete";
import ProductShowcasePost from "../../../components/ProductShowcasePost/ProductShowcasePost";


const DashboardProductShowcase = () => {
    return (
        <div>
            <ProductBannerPost></ProductBannerPost>
            <ProductShowcasePost></ProductShowcasePost>
            <ProductShowcaseDelete></ProductShowcaseDelete>
        </div>
    );
};

export default DashboardProductShowcase;