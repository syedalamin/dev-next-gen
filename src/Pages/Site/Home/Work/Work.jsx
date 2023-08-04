
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import SingleWorkService from "../../../../components/SingleWorkService/SingleWorkService";
import useWorkServiceSupport from "../../../../hooks/useWorkServiceSupport";

const Work = () => {
    const [workServiceSupport] = useWorkServiceSupport();
    const work = workServiceSupport.filter(item => item.category === "work");

    return (
        <div>
            <div className="w-11/12 mx-auto">
                <SectionTitle Heading="How We Work" subHeading="Adjust your design through a wide range of theme options in the development and instantly."></SectionTitle>
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