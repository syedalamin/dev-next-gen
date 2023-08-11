import { useQuery } from "react-query";


const useClientReview = () => {
    const { data: clientReview = [], refetch } = useQuery(['clientreview'], async () => {
        const res = await fetch('https://dev-next-gen-server.vercel.app/clientreview')
        return res.json();
    })
    return [clientReview, refetch]
};

export default useClientReview;