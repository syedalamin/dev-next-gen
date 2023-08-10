import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import SingleSupport from "../../../../components/SingleSupport/SingleSupport";
import SingleWorkService from "../../../../components/SingleWorkService/SingleWorkService";
import useWorkServiceSupport from "../../../../hooks/useWorkServiceSupport";


const WhatServices = () => {
    const [workServiceSupport] = useWorkServiceSupport();
    const service = workServiceSupport.filter(item => item.category === "services");
    const support = workServiceSupport.filter(item => item.category === "support");
    
    return (
        <div className="relative">
            <div className="rounded-full filter blur-3xl absolute top-0 left-0 h-96 md:w-96 w-full  bg-gradient-to-l from-blue-600 to-sky-400  opacity-30 "></div>
            <div className="rounded-full filter blur-3xl absolute bottom-0 right-0 h-96 md:w-96 w-full  bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30"></div>
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