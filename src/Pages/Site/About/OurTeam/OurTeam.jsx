import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import SingleOurTeam from "../../../../components/SingleOurTeam/SingleOurTeam";
import useOurTeams from "../../../../hooks/useOurTeams";

const OurTeam = () => {
    const [ourTeams] = useOurTeams();
    return (
        <div className="relative">
             <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 md:w-96 w-full  bg-gradient-to-l from-blue-600 to-sky-400  opacity-30 "></div>
            <div className="rounded-full filter blur-3xl absolute top-0 right-0 h-96 md:w-96 w-full  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30"></div>
            <div className="rounded-full filter blur-3xl absolute bottom-0 left-0 h-96 md:w-96 w-full  bg-gradient-to-l from-blue-600 to-sky-400  opacity-30 "></div>
            <div className="rounded-full filter blur-3xl absolute bottom-0 right-0 h-96 md:w-96 w-full  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30"></div>
            <div className="w-11/12 mx-auto ">
                <SectionTitle Heading="Our Team" subHeading="Our member help companies in all phases! 👋"></SectionTitle>
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