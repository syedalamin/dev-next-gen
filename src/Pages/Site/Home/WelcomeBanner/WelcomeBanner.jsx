import SingleWelcomeBanner from "../../../../components/SingleWelcomeBanner/SingleWelcomeBanner";
import useWelcomeBanner from "../../../../hooks/useWelcomeBanner";


const WelcomeBanner = () => {
    const [welcomeBanners] = useWelcomeBanner();
    return (
        <div>
            <div className='relative '>
                <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 md:w-96 w-full  bg-gradient-to-l from-blue-600 to-sky-400  opacity-30 "></div>
                <div className="rounded-full filter blur-3xl absolute top-10 right-0 h-96 md:w-96 w-full  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30"></div>
                <div className="w-11/12 mx-auto relative">
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