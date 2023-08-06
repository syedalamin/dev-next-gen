import OurOfficeDelete from "../../../components/OurOfficeDelete/OurOfficeDelete";
import OurOfficePost from "../../../components/OurOfficePost/OurOfficePost";


const DashboardOurOffice = () => {
    return (
        <div className="py-10">
            <OurOfficePost></OurOfficePost>
            <OurOfficeDelete></OurOfficeDelete>
        </div>
    );
};

export default DashboardOurOffice;