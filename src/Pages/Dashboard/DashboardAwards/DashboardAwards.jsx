import AwardsDelete from "../../../components/AwardsDelete/AwardsDelete";
import AwardsPost from "../../../components/AwardsPost/AwardsPost";


const DashboardAwards = () => {
    return (
        <div className="py-10">
            <AwardsPost></AwardsPost>
            <AwardsDelete></AwardsDelete>
        </div>
    );
};

export default DashboardAwards;