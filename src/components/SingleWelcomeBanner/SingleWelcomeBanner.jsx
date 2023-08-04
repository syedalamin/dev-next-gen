import { Link } from "react-router-dom";


const SingleWelcomeBanner = ({banner}) => {
    const {heading, title, subtitle, image} = banner; 
    return (
        <div>
            <div className="sm:grid sm:grid-cols-2 items-center justify-between flex flex-col-reverse">
                <div className="space-y-6">
                    <h3 className="text-xl font-bold  text-gradient-heading">{heading}</h3>
                    <h2 className="font-bold md:text-6xl text-4xl">{title}</h2>
                    <p className="font-semibold ">{subtitle}</p>
                    <Link to='/contact' className="btn rounded-full px-10 py-4 gradient-bg">Get Start</Link>
                </div>
                <div>
                    <img src={image} className="mx-auto w-full" />
                </div>
            </div>
        </div>
    );
};

export default SingleWelcomeBanner;