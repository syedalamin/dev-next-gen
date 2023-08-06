

import SingleAboutBanner from "../../../../components/SingleAboutBanner/SingleAboutBanner";
import useAboutBanner from "../../../../hooks/useAboutBanner";

const AboutBanner = () => {
    const [aboutBanner] = useAboutBanner()
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <div>
                    {
                        aboutBanner.map(about => <SingleAboutBanner
                            key={about._id}
                            about={about}
                        ></SingleAboutBanner> )
                    }
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;