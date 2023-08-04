import { useState } from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavigation = () => {
        setIsOpen(!isOpen)
    }
    const navOption = <>
        <li><NavLink activeClassName="active-link" to='/'>Home</NavLink></li>
        <li><NavLink activeClassName="active-link" to='/about'>About</NavLink></li>
        <li><NavLink activeClassName="active-link" to='/product'>Product Showcase</NavLink></li>
        <li><NavLink activeClassName="active-link" to='/blog'>Blog</NavLink></li>
    </>
    return (
        <div className="bg-[#0b1120] text-white">
            <div className="w-11/12 mx-auto">
                <div className="navbar py-0 ">
                    <div className="navbar-start p-0">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <button onClick={toggleNavigation}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></button>
                            </label>
                            {
                                isOpen &&
                                <ul tabIndex={0} className="menu menu-one menu-sm dropdown-content mt-3 p-2 shadow bg-[#0b1120] text-white rounded-box w-52">
                                    {navOption}
                                </ul>
                            }
                        </div>
                        <div><img src="https://i.ibb.co/kKRpHhp/Dev-NEXTGen.png" className="w-52" alt="" /></div>
                    </div>
                    <div className="navbar-center hidden p-0 lg:flex">
                        <ul className="menu menu-horizontal  flex items-center justify-around">
                            {navOption}
                        </ul>
                    </div>
                    <div className="navbar-end p-0">
                        <Link to='/contact' className="btn  btn-sm rounded-full gradient-bg">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;