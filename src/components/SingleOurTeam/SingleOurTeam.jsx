
const SingleOurTeam = ({team}) => {
    const {name, image, position} = team;

    return (
        <div>
             <div className="card h-96 border-4 w-full bgGlash shadow-xl ">
                <figure className=" relative ">
                    <img src={image} className="rounded-2xl w-full h-full" />
                </figure>
                <div className="card-body p-4 pt-32 rounded-2xl  absolute bottom-0 w-full  bg-gradient-to-t from-[#000]  to-[#ffffff00]">
                    <h2 className="card-title ">{name}</h2>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleOurTeam;