import JoinCompany from "../JoinCompany/JoinCompany";
import TeamVideo from "../TeamVideo/TeamVideo";
import WelcomeBanner from "../WelcomeBanner/WelcomeBanner";
import WhatServices from "../WhatServices/WhatServices";
import Work from "../Work/Work";


const Home = () => {
    return (
        <div>
            <WelcomeBanner></WelcomeBanner>
            <JoinCompany></JoinCompany>
            <TeamVideo></TeamVideo>
            <Work></Work>
            <WhatServices></WhatServices>
        </div>
    );
};

export default Home;