import { useQuery } from "react-query";


const useAwards = () => {
    const {data: Awards = [], refetch} = useQuery(['awards'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/awards')
        return res.json();
    });
    return [Awards, refetch];
};

export default useAwards;