import { useQuery } from "react-query";

const useWorkServiceSupport = () => {
    const {data: workServiceSupport = [], refetch } = useQuery(['work'], async()=>{
        const res = await fetch('http://localhost:5000/workservicesupport');
        return res.json()
    });
    return [workServiceSupport, refetch];
};

export default useWorkServiceSupport;