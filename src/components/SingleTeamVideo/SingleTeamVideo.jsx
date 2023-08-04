
import { FaPlay, FaTimes } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
const SingleTeamVideo = ({ teamVideo }) => {
    const { image,  } = teamVideo;
    return (
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
                <div className="relative">
                    <img src={`${image}`} className="rounded-2xl w-full h-full " alt="pic" />
                    <button onClick={() => window.my_modal_5.showModal()} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bgGlash p-5 rounded-full ">
                        <FaPlay className=' text-2xl text-teal-300'></FaPlay>
                    </button>
                    <dialog id="my_modal_5" className="modal  modal-middle">
                        <form method="dialog" className="relative">
                            {/*//TODO youtube video */}
                            {/* <iframe className='w-screen h-screen ' src={`${video}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                            <div className="modal-action  absolute  left-1/2 bottom-12  ">
                                <button className="btn bgGlash"><FaTimes></FaTimes></button>
                            </div>
                        </form>
                    </dialog>
                </div>
            </Tilt>
        </div>
    );
};

export default SingleTeamVideo;