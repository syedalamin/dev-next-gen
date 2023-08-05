import { useQuery } from "react-query";


const useClientReview = () => {
    const { data: clientReview = [], refetch } = useQuery(['clientreview'], async () => {
        const res = await fetch('http://localhost:5000/clientreview')
        return res.json();
    })
    return [clientReview, refetch]
};

export default useClientReview;