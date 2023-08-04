import SingleTeamVideo from "../../../../components/SingleTeamVideo/SingleTeamVideo";
import useTeamVideo from "../../../../hooks/useTeamVideo";


const TeamVideo = () => {
    const [teamVideos] = useTeamVideo();
    return (
        <div className="py-20">
            <div className="w-9/12 mx-auto">
                <div>
                    {
                        teamVideos.map(teamVideo => <SingleTeamVideo
                            key={teamVideo._id}
                            teamVideo={teamVideo}
                        ></SingleTeamVideo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamVideo;