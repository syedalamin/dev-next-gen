import FavTitle from "../../../../components/FavTitle/FavTitle";
import PageChangeTop from "../../../../components/PageChangeTop/PageChangeTop";
import AboutBanner from "../AboutBanner/AboutBanner";
import OurOffice from "../OurOffice/OurOffice";
import OurTeam from "../OurTeam/OurTeam";


const About = () => {
    return (
        <div>
            <FavTitle FavTitle="About"></FavTitle>
            <PageChangeTop></PageChangeTop>
            <AboutBanner></AboutBanner>
            <OurTeam></OurTeam>
            <OurOffice></OurOffice>
        </div>
    );
};

export default About;