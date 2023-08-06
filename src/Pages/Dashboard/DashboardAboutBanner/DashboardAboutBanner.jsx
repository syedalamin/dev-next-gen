import AboutBannerUpdate from "../../../components/AboutBannerUpdate/AboutBannerUpdate";
import useAboutBanner from "../../../hooks/useAboutBanner";


const DashboardAboutBanner = () => {
    const [aboutBanner] = useAboutBanner();
    return (
        <div>
            <div>
                {
                    aboutBanner.map(about => <AboutBannerUpdate
                        key={about._id}
                        about={about}
                    ></AboutBannerUpdate>)
                }
            </div>
        </div>
    );
};

export default DashboardAboutBanner;