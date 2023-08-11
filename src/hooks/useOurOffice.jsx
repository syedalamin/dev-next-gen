import { useQuery } from "react-query";


const useOurOffice = () => {
    const {data: ourOffice = [], refetch} = useQuery(['ouroffice'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/ouroffice');
        return res.json();
    });
    return [ourOffice, refetch]
};

export default useOurOffice;