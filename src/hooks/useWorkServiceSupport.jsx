import { useQuery } from "react-query";

const useWorkServiceSupport = () => {
    const {data: workServiceSupport = [], refetch } = useQuery(['work'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/workservicesupport');
        return res.json()
    });
    return [workServiceSupport, refetch];
};

export default useWorkServiceSupport;