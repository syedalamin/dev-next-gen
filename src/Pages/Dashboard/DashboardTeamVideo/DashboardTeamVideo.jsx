import SingleUpdateTeamVideo from "../../../components/SingleUpdateTeamVideo/SingleUpdateTeamVideo";
import useTeamVideo from "../../../hooks/useTeamVideo";


const DashboardTeamVideo = () => {
    const [teamVideos] = useTeamVideo();
    return (
        <div>
             {
                teamVideos.map(teamVideo => <SingleUpdateTeamVideo
                    key={teamVideo._id}
                    teamVideo={teamVideo}
                ></SingleUpdateTeamVideo>)
            }
        </div>
    );
};

export default DashboardTeamVideo;