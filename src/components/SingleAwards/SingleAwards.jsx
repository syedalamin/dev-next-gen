

const SingleAwards = ({ award }) => {
    const { heading, image, title, description } = award;

    return (
        <div>
            <div>
                <div className=" card w-full rounded-md shadow-xl bgGlash ">
                    <div className="p-5">
                        <div className="flex items-center gap-4">
                            <img src={image} className="rounded-xl w-10 h-10" />
                            <h2 className="text-3xl font-semibold ">{heading}+</h2>
                        </div>
                        <div>
                            <h2 className="card-title">{title}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleAwards;