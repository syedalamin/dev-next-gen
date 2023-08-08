import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import SingleOurOffice from "../../../../components/SingleOurOffice/SingleOurOffice";
import useOurOffice from "../../../../hooks/useOurOffice";

const OurOffice = () => {
    const [ourOffice] = useOurOffice();

    return (
        <div>
            <div className="w-11/12 mx-auto pt-20">
                <SectionTitle Heading="Life at Dev Next Gen"></SectionTitle>
                <div className="grid md:grid-cols-3 gap-5">
                    {
                        ourOffice.map(office => <SingleOurOffice
                            key={office._id}
                            office={office}
                        ></SingleOurOffice>)
                    }
                </div>
            </div>
        </div>
    );
};

export default OurOffice;