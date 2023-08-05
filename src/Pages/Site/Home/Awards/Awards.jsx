import SingleAwards from "../../../../components/SingleAwards/SingleAwards";
import TitleSubTitle from "../../../../components/TitleSubTitle/TitleSubTitle";
import useAwards from "../../../../hooks/useAwards";
import Tilt from 'react-parallax-tilt';

const Awards = () => {
    const [Awards] = useAwards();
    return (
        <div>
            <div className="w-11/12 mx-auto">
                <TitleSubTitle Title="Awards"></TitleSubTitle>
                <div className="grid md:grid-cols-2 gap-5 items-center">
                    <div>
                        <Tilt
                            tiltAngleXInitial={50}
                            className="parallax-effect-img"
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            perspective={1000}
                            transitionSpeed={1500}
                            gyroscope={true}
                        >
                            <div>
                                <img src="https://i.ibb.co/tHCyB27/the-winners.jpg" className="w-8/12 md:w-9/12 rounded-lg mx-auto" alt="" />
                            </div>
                        </Tilt>
                    </div>
                    <div>
                        <div className="grid md:grid-cols-2 gap-4">
                            {
                                Awards.map(award => <SingleAwards
                                    key={award._id}
                                    award={award}
                                ></SingleAwards> )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;