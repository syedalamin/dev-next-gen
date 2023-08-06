import OurTeamDelete from "../../../components/OurTeamDelete/OurTeamDelete";
import OurTeamPost from "../../../components/OurTeamPost/OurTeamPost";


const DashboardOurTeam = () => {
    return (
        <div className="py-10">
            <OurTeamPost></OurTeamPost>
            <OurTeamDelete></OurTeamDelete>
        </div>
    );
};

export default DashboardOurTeam;