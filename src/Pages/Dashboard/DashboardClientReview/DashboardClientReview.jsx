import ClientReviewDelete from "../../../components/ClientReviewDelete/ClientReviewDelete";
import ClientReviewPost from "../../../components/ClientReviewPost/ClientReviewPost";


const DashboardClientReview = () => {
    return (
        <div className="py-10">
            <ClientReviewPost></ClientReviewPost>
            <ClientReviewDelete></ClientReviewDelete>
        </div>
    );
};

export default DashboardClientReview;