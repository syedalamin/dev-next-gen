import { useQuery } from "react-query";


const useTeamVideo = () => {
    const {data: teamVideos = []} = useQuery(['teamvideo'], async()=>{
        const res = await fetch('http://localhost:5000/teamvideo')
        return res.json();
    });
    return[teamVideos];
};

export default useTeamVideo;