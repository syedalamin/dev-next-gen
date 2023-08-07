import { Link } from "react-router-dom";


const SingleProduct = ({product}) => {
    const { image, title, subtitle, liveLink } = product;
    return (
        <div>
            <div className="card w-full h-96 shadow-xl">
                <figure className="relative opacity-40">
                    <img src={image} alt="Shoes" className="rounded-xl h-96 w-full" />
                </figure>
                <div className="w-full h-full text-center top-1/2 left-1/2 p-5 -translate-x-1/2 -translate-y-1/2 rounded-2xl  absolute ">
                    <div className="border w-full h-full rounded-xl ">
                        <div className=" flex items-center justify-center h-full ">
                            <div className="space-y-3  ">
                                <h2 className="card-title justify-center text-4xl font-bold">{title}</h2>
                                <p className="text-xl">{subtitle}</p>
                                <Link target="_blank" to={liveLink} className="btn bgGlash btn-sm rounded-full">Live Site</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;