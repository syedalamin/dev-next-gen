import { useQuery } from "react-query";


const useJoinCompany = () => {
    const {data: companys = [],  refetch} = useQuery(['company'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/company');
        return res.json();
    })
    return [ companys,  refetch]
};

export default useJoinCompany;