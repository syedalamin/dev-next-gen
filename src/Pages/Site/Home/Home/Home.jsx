import FavTitle from "../../../../components/FavTitle/FavTitle";
import PageChangeTop from "../../../../components/PageChangeTop/PageChangeTop";
import Awards from "../Awards/Awards";
import ClientReview from "../ClientReview/ClientReview";
import JoinCompany from "../JoinCompany/JoinCompany";
import SomeProjects from "../SomeProjects/SomeProjects";
import TeamVideo from "../TeamVideo/TeamVideo";
import WelcomeBanner from "../WelcomeBanner/WelcomeBanner";
import WhatServices from "../WhatServices/WhatServices";
import Work from "../Work/Work";


const Home = () => {
    return (
        <div>
            <FavTitle FavTitle="Home"></FavTitle>
            <PageChangeTop></PageChangeTop>
            <WelcomeBanner></WelcomeBanner>
            <JoinCompany></JoinCompany>
            <TeamVideo></TeamVideo>
            <Work></Work>
            <WhatServices></WhatServices>
            <ClientReview></ClientReview>
            <Awards></Awards>
            <SomeProjects></SomeProjects>
        </div>
    );
};

export default Home;