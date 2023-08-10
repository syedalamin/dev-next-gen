
import SingleAboutBanner from "../../../../components/SingleAboutBanner/SingleAboutBanner";
import useAboutBanner from "../../../../hooks/useAboutBanner";

const AboutBanner = () => {
    const [aboutBanner] = useAboutBanner()
    return (
        <div className="relative">
            <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 md:w-96 w-full  bg-gradient-to-l from-blue-600 to-sky-400  opacity-30 "></div>
            <div className="rounded-full filter blur-3xl absolute top-10 right-0 h-96 md:w-96 w-full  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30"></div>
            <div className="w-11/12 mx-auto">
                <div>
                    {
                        aboutBanner.map(about => <SingleAboutBanner
                            key={about._id}
                            about={about}
                        ></SingleAboutBanner>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;