import CompanyDelete from "../../../components/CompanyDelete/CompanyDelete";
import CompanyPost from "../../../components/CompanyPost/CompanyPost";


const DashboardCompany = () => {
    return (
        <div>
            <CompanyPost></CompanyPost>
            <CompanyDelete></CompanyDelete>
        </div>
    );
};

export default DashboardCompany;