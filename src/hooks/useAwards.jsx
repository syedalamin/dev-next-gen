import { useQuery } from "react-query";


const useAwards = () => {
    const {data: Awards = [], refetch} = useQuery(['awards'], async()=>{
        const res = await fetch('http://localhost:5000/awards')
        return res.json();
    });
    return [Awards, refetch];
};

export default useAwards;