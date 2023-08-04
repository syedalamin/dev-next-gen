
const MainLoading = () => {
    return (
        <div>
            <div className="relative">
                <div className=" filter blur-3xl absolute opacity-20 top-0 left-0 h-full w-full   bgGradient "></div>
                <div className="h-screen w-full flex items-center justify-center flex-col space-y-5">
                    <div className="avatar">
                        <div className="rounded-xl w-24 h-24">
                            <img className="" src="https://i.ibb.co/C129r7x/Fav-Dev-NEXTGen.png" alt="" />
                        </div>
                    </div>
                    <div className="">
                        <span className="loading loading-ring loading-xs"></span>
                        <span className="loading loading-ring loading-sm"></span>
                        <span className="loading loading-ring loading-md"></span>
                        <span className="loading loading-ring loading-lg"></span>
                        <span className="loading loading-ring loading-lg"></span>
                        <span className="loading loading-ring loading-md"></span>
                        <span className="loading loading-ring loading-sm"></span>
                        <span className="loading loading-ring loading-xs"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLoading;