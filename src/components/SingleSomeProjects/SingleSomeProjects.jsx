import { Link } from "react-router-dom";

const SingleSomeProjects = ({ project }) => {
    console.log(project)
    const { category, image, liveLink, title } = project;

    return (
        <div>
            <div>
                <div className="card w-full rounded-lg  bgGlash shadow-xl">
                    <div>
                        <img src={image} className="w-full h-60 rounded-tr-lg rounded-tl-lg" alt="" />
                    </div>
                    <div className="p-3">
                        <div className="flex items-center justify-between px-2">
                            <div>
                                <h2 className="card-title">{title}</h2>
                                <p>{category}</p>
                            </div>
                            <Link to={liveLink} target="_blank" className="btn  btn-sm rounded-full gradient-bg">Live Site</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleSomeProjects;