import { useQuery } from "react-query";


const useOurTeams = () => {
    const {data: ourTeams = [], refetch} = useQuery(['ourteams'], async()=>{
        const res = await fetch('http://localhost:5000/ourteams')
        return res.json();
    })
    return [ourTeams, refetch]
};

export default useOurTeams;