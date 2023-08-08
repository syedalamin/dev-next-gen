
import SingleProduct from "../SingleProduct/SingleProduct";


const CurrentProductProject = ({ currentPosts }) => {
    return (
        <div>
            <div className="grid md:grid-cols-2 py-10  gap-10">
                {
                    currentPosts.map(product => <SingleProduct
                        key={product._id}
                        product={product}
                    ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default CurrentProductProject;