const SectionTitle = ({subHeading, Heading}) => {

    return (
        <div>
            <div className="flex flex-col items-center justify-center  ">
                <h2 className="text-4xl font-bold pb-4 text-gradient  " >{Heading}</h2>
                <p className=" opacity-50 md:w-96 text-center ">{subHeading}</p>
            </div>
        </div>
    );
};

export default SectionTitle;