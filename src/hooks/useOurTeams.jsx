import { useQuery } from "react-query";


const useOurTeams = () => {
    const {data: ourTeams = [], refetch} = useQuery(['ourteams'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/ourteams')
        return res.json();
    })
    return [ourTeams, refetch]
};

export default useOurTeams;