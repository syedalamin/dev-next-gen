import WorkServiceDelete from "../../../components/WorkServiceDelete/WorkServiceDelete";
import WorkServicePost from "../../../components/WorkServicePost/WorkServicePost";


const DashboardWorkService = () => {
    return (
        <div>
            <WorkServicePost></WorkServicePost>
            <WorkServiceDelete></WorkServiceDelete>
        </div>
    );
};

export default DashboardWorkService;