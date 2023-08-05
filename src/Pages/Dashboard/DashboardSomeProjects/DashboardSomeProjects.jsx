import SomeProjectsDelete from "../../../components/SomeProjectsDelete/SomeProjectsDelete";
import SomeProjectsPost from "../../../components/SomeProjectsPost/SomeProjectsPost";


const DashboardSomeProjects = () => {
    return (
        <div>
            <SomeProjectsPost></SomeProjectsPost>
            <SomeProjectsDelete></SomeProjectsDelete>
        </div>
    );
};

export default DashboardSomeProjects;