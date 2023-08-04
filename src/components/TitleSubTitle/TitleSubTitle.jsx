
const TitleSubTitle = ({ Title, subTitle }) => {
    return (
        <div className="pt-10">
            <div className='md:w-6/12  mx-auto text-center'>
                <div>
                    <h2 className="text-5xl font-bold py-4 text-gradient-title">{Title}</h2>
                    <p className="  font-semibold py-4  text-gray-300 opacity-80">{subTitle}</p>
                </div>
            </div>
        </div>
    );
};

export default TitleSubTitle;
