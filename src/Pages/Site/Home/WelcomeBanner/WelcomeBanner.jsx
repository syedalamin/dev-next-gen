import SingleWelcomeBanner from "../../../../components/SingleWelcomeBanner/SingleWelcomeBanner";
import useWelcomeBanner from "../../../../hooks/useWelcomeBanner";


const WelcomeBanner = () => {
    const [welcomeBanners] = useWelcomeBanner();
    return (
        <div>
             <div className='relative '>
            <div className=" rounded-full filter blur-3xl absolute opacity-50 top-0 left-0 h-96 md:w-96 w-full   bgGradient"></div>
            <div className=" rounded-full filter blur-3xl absolute opacity-50 bottom-0 right-10 h-96 md:w-96 w-full   bgGradient"></div>
            <div className="w-11/12 mx-auto pt-10 md:pt-0  relative">
                {
                   welcomeBanners.map(banner => <SingleWelcomeBanner
                        key={banner._id}
                        banner={banner}
                   ></SingleWelcomeBanner>)
                } 
            </div>
        </div>
        </div>
    );
};

export default WelcomeBanner;