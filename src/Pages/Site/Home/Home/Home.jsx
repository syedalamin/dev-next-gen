import JoinCompany from "../JoinCompany/JoinCompany";
import TeamVideo from "../TeamVideo/TeamVideo";
import WelcomeBanner from "../WelcomeBanner/WelcomeBanner";


const Home = () => {
    return (
        <div>
            <WelcomeBanner></WelcomeBanner>
            <JoinCompany></JoinCompany>
            <TeamVideo></TeamVideo>
        </div>
    );
};

export default Home;