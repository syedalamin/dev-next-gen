import { Link } from "react-router-dom";


const SingleBlog = ({ blog }) => {

    const { image, date, title, subtitle, url } = blog;
    const HeadTitle = title.slice(0, 60)
    const subTitle = subtitle.slice(0, 200);

    return (
        <div>
            <div>
                <div className="card w-full bgGlash shadow-xl ">
                    <div className="card-body  ">
                    <figure className="">
                        <Link to={`/blog/${url}`}><img src={image} alt="Shoes" className="rounded-xl w-full h-56" /></Link>
                    </figure>
                        <p>{date}</p>
                        <Link to={`/blog/${url}`}><h2 className="card-title  link-hover hover:text-gray-300">{HeadTitle}...</h2></Link>
                        <p>{subTitle}...</p>
                        <Link to={`/blog/${url}`} className="btn gradient-bg btn-sm rounded-full w-20 mt-10">More</Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SingleBlog;