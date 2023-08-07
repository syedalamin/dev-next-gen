import { NavLink, Outlet } from "react-router-dom";
import DashboardNav from "../Pages/Shared/DashboardNav/DashboardNav";



const Dashboard = () => {
    
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content relative h-full w-full">
                <div className=" filter blur-3xl absolute opacity-20 top-0 left-0 h-full w-full   bgGradient "></div>
                <div className="sticky top-0 z-50">
                    <DashboardNav></DashboardNav>
                </div>
                {/* Page content here */}
                <div className="mt-10 mx-auto w-10/12">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden relative">Open drawer</label>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#0b1120] space-y-4  text-white">
                    <div className=" space-y-4">
                        <div className="bg-[#0b1120] pb-10  "><img src="https://i.ibb.co/kKRpHhp/Dev-NEXTGen.png" className="w-52" alt="" /></div>
                        <li><NavLink to='banner'>Banner</NavLink></li>
                        <li><NavLink to='company'>Company</NavLink></li>
                        <li><NavLink to='teamvideo'>Team Video</NavLink></li>
                        <li><NavLink to='workservice'>Work Service</NavLink></li>
                        <li><NavLink to='clientreview'>Client Review</NavLink></li>
                        <li><NavLink to='awards'>Awards</NavLink></li>
                        <li><NavLink to='someproject'>Some Project</NavLink></li>
                        <li><NavLink to='aboutbanner'>About Banner</NavLink></li>
                        <li><NavLink to='ourteam'>Our Team</NavLink></li>
                        <li><NavLink to='ouroffice'>Our Office</NavLink></li>
                        <li><NavLink to='productshowcase'>Product Showcase</NavLink></li>


                     
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;