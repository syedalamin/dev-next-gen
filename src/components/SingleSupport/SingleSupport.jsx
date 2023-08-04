

const SingleSupport = ({items}) => {
    const { image, title, description } = items;
    return (
        <div className="">
                <div className=" card w-full shadow-xl bgGlash ">
                    <figure className="px-5 pt-10">
                        <img src={image} className="rounded-xl w-10 h-10" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{description}</p>
                    </div>
                </div>
        </div>
    );
};

export default SingleSupport;