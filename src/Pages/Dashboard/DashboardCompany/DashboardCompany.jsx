import CompanyDelete from "../../../components/CompanyDelete/CompanyDelete";
import CompanyPost from "../../../components/CompanyPost/CompanyPost";


const DashboardCompany = () => {
    return (
        <div className="py-10">
            <CompanyPost></CompanyPost>
            <CompanyDelete></CompanyDelete>
        </div>
    );
};

export default DashboardCompany;