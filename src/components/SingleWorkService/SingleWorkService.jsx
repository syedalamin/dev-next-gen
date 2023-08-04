const SingleWorkService = ({ items }) => {
    const { image, title, description } = items;
    return (
        <div className="">
                <div className=" card w-full shadow-xl bgGlash ">
                    <figure className="px-10 pt-10">
                        <img src={image} className="rounded-xl w-20 h-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
        </div>
    );
};

export default SingleWorkService;