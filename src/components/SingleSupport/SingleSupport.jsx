

const SingleSupport = ({ items }) => {
    const { image, title, description } = items;
    return (
        <div className="">
            <div className=" card w-full shadow-xl bgGlash ">
                <div className="card-body py-4 items-center text-center">
                    <img src={image} className="rounded-xl w-10 h-10" />
                    <h2 className="card-title">{title}</h2>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleSupport;