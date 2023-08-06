import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import SingleOurTeam from "../../../../components/SingleOurTeam/SingleOurTeam";
import useOurTeams from "../../../../hooks/useOurTeams";

const OurTeam = () => {
    const [ourTeams] = useOurTeams();
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <SectionTitle Heading="Meet the minds behind the stories"></SectionTitle>
                <div className="w-10/12 mx-auto ">
                    <div className="grid md:grid-cols-3 gap-5">
                        {
                            ourTeams.map(team => <SingleOurTeam
                                key={team._id}
                                team={team}
                            ></SingleOurTeam>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;