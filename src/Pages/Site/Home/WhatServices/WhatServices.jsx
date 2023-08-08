import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import SingleSupport from "../../../../components/SingleSupport/SingleSupport";
import SingleWorkService from "../../../../components/SingleWorkService/SingleWorkService";
import useWorkServiceSupport from "../../../../hooks/useWorkServiceSupport";


const WhatServices = () => {
    const [workServiceSupport] = useWorkServiceSupport();
    const service = workServiceSupport.filter(item => item.category === "services");
    const support = workServiceSupport.filter(item => item.category === "support");
    
    return (
        <div>
            <div className="w-11/12 mx-auto py-20">
                <SectionTitle Heading="What Services I Provide You" subHeading="Adjust your design through a wide range of theme options in the development and instantly."></SectionTitle>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        service.map(item => <SingleWorkService
                            key={item._id}
                            items={item}
                        ></SingleWorkService>)
                    }
                </div>
                <div className="grid md:grid-cols-3 gap-5 mt-10">
                    {
                        support.map(item => <SingleSupport
                            key={item._id}
                            items={item}
                        ></SingleSupport>)
                    }
                </div>
            </div>
        </div>
    );
};

export default WhatServices;