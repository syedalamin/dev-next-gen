import AwardsDelete from "../../../components/AwardsDelete/AwardsDelete";
import AwardsPost from "../../../components/AwardsPost/AwardsPost";


const DashboardAwards = () => {
    return (
        <div>
            <AwardsPost></AwardsPost>
            <AwardsDelete></AwardsDelete>
        </div>
    );
};

export default DashboardAwards;