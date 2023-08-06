import TitleSubTitle from "../TitleSubTitle/TitleSubTitle";
import Tilt from 'react-parallax-tilt';

const SingleAboutBanner = ({about}) => {
    const {heading, subHeading, image} = about;
    return (
        <div>
            <TitleSubTitle Title={heading} subTitle={subHeading} ></TitleSubTitle>
            <div className='w-10/12 mx-auto py-10 '>
                <Tilt
                    tiltAngleXInitial={50}
                    className="parallax-effect-img"
                    tiltMaxAngleX={10}
                    tiltMaxAngleY={10}
                    perspective={1000}
                    transitionSpeed={1500}
                    gyroscope={true}
                >
                    <div >
                        <img src={`${image}`} className="rounded-2xl w-full h-full " alt="pic" />
                    </div>
                </Tilt>
            </div>
        </div>
    );
};

export default SingleAboutBanner;