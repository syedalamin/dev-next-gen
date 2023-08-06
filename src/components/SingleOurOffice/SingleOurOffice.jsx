

const SingleOurOffice = ({office}) => {
    const {image} = office;
    return (
        <div>
            <div className="card h-72 w-full overflow-hidden bgGlash shadow-xl ">
                <figure className=" ">
                    <img src={image} className="rounded-xl w-full h-72 duration-300 hover:scale-110" />
                </figure>
            </div>
        </div>
    );
};
export default SingleOurOffice;