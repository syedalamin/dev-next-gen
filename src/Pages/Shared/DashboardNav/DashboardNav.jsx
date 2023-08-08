
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";



const DashboardNav = () => {
    const { user, logOut } = useContext(AuthContext);

    const [isOpen, setIsOpen] = useState(false);
    const toggleNavigation = () => {
        setIsOpen(!isOpen)
    }


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div>
            <div className="navbar bg-[#0b1120]  ">
                <div className="w-11/12 mx-auto">
                    <div className="flex-1">
                        <div className="md:hidden"><img src="https://i.ibb.co/kKRpHhp/Dev-NEXTGen.png" className="w-52" alt="" /></div>
                    </div>
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    {user && <img onClick={toggleNavigation} src={user?.photoURL} />}
                                </div>
                            </label>
                            { <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] space-y-3 p-2 shadow bg-[#0b1120]  rounded-box w-52">
                                <li><NavLink activeClassName="active-link" to='/'>Home</NavLink></li>
                                <li><NavLink activeClassName="active-link" to='/about'>About</NavLink></li>
                                <li><NavLink activeClassName="active-link" to='/product'>Product Showcase</NavLink></li>
                                <li><NavLink activeClassName="active-link" to='/blog'>Blog</NavLink></li>
                                <li><NavLink to='register'>Add User</NavLink></li>
                                <li><NavLink to='/dashboard'>Dev Next Gen</NavLink></li>
                                <li>{user && <a className=" " onClick={handleLogOut}>LogOut</a>}</li>

                            </ul>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardNav;