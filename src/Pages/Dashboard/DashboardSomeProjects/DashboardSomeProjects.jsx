import SomeProjectsDelete from "../../../components/SomeProjectsDelete/SomeProjectsDelete";
import SomeProjectsPost from "../../../components/SomeProjectsPost/SomeProjectsPost";


const DashboardSomeProjects = () => {
    return (
        <div className="py-10">
            <SomeProjectsPost></SomeProjectsPost>
            <SomeProjectsDelete></SomeProjectsDelete>
        </div>
    );
};

export default DashboardSomeProjects;