import { useQuery } from "react-query";


const useTeamVideo = () => {
    const {data: teamVideos = []} = useQuery(['teamvideo'], async()=>{
        const res = await fetch('https://dev-next-gen-server.vercel.app/teamvideo')
        return res.json();
    });
    return[teamVideos];
};

export default useTeamVideo;