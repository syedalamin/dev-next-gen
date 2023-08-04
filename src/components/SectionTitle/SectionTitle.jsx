const SectionTitle = ({subHeading, Heading}) => {

    return (
        <div>
            <div className='md:w-6/12  mx-auto text-center py-10'>
                <h2 className="text-4xl font-bold pb-4 text-gradient  " >{Heading}</h2>
                <p className=" opacity-50 text-center ">{subHeading}</p>
            </div>
        </div>
    );
};

export default SectionTitle;