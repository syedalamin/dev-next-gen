import SingleProductBanner from "../../../../components/SingleProductBanner/SingleProductBanner";
import useProductShowcaseBanner from "../../../../hooks/useProductShowcaseBanner";


const ProductBanner = () => {
    const [productShowcaseBanner] = useProductShowcaseBanner();
    
    return (
        <div>
            <div className="w-11/12 mx-auto">
                {
                    productShowcaseBanner.map(showcasebanner => <SingleProductBanner
                        key={showcasebanner._id}
                        showcasebanner={showcasebanner}
                    ></SingleProductBanner> )
                }
            </div>
        </div>
    );
};

export default ProductBanner;