
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import SingleWorkService from "../../../../components/SingleWorkService/SingleWorkService";
import useWorkServiceSupport from "../../../../hooks/useWorkServiceSupport";

const Work = () => {
    const [workServiceSupport] = useWorkServiceSupport();
    const work = workServiceSupport.filter(item => item.category === "work");

    return (
        <div className="relative">
            <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 md:w-96 w-full  bg-gradient-to-l from-blue-600 to-sky-400  opacity-30 "></div>
            <div className="rounded-full filter blur-3xl absolute bottom-10 right-0 h-96 md:w-96 w-full  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30"></div>
            <div className="w-11/12 mx-auto">
                <SectionTitle Heading="How We Work" subHeading="Get your project done right the first time"></SectionTitle>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        work.map(item => <SingleWorkService
                            key={item._id}
                            items={item}
                        ></SingleWorkService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Work;