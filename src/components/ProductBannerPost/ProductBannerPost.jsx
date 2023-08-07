import useProductShowcaseBanner from "../../hooks/useProductShowcaseBanner";
import ProductBannerUpdate from "../ProductBannerUpdate/ProductBannerUpdate";

const ProductBannerPost = () => {
    const [productShowcaseBanner] = useProductShowcaseBanner();
    return (
        <div>
            <div>
                {
                    productShowcaseBanner.map(productBanner => <ProductBannerUpdate
                        key={productBanner}
                        productBanner={productBanner}
                    ></ProductBannerUpdate>)
                }
            </div>
        </div>
    );
};

export default ProductBannerPost;