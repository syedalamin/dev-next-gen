import { useQuery } from "react-query";


const useJoinCompany = () => {
    const {data: companys = [],  refetch} = useQuery(['company'], async()=>{
        const res = await fetch('http://localhost:5000/company');
        return res.json();
    })
    return [ companys,  refetch]
};

export default useJoinCompany;