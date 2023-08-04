import SingleUpdateBanner from "../../../components/SingleUpdateBanner/SingleUpdateBanner";
import useWelcomeBanner from "../../../hooks/useWelcomeBanner";

const DashboardBanner = () => {
    const [welcomeBanners] = useWelcomeBanner();
    return (
        <div>
            {
                welcomeBanners.map(banner => <SingleUpdateBanner
                    key={banner._id}
                    banner={banner}
                ></SingleUpdateBanner>)
            }
        </div>
    );
};

export default DashboardBanner;