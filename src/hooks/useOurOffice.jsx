import { useQuery } from "react-query";


const useOurOffice = () => {
    const {data: ourOffice = [], refetch} = useQuery(['ouroffice'], async()=>{
        const res = await fetch('http://localhost:5000/ouroffice');
        return res.json();
    });
    return [ourOffice, refetch]
};

export default useOurOffice;