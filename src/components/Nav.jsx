import {  NavLink } from "react-router-dom";

const Nav = () => {


    const links = <>
        <li><NavLink to="/" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-[#23BE0A] ' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to="/listed" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-[#23BE0A] ' : 'font-bold'}>Listed Books</NavLink></li>
        <li><NavLink to="/pages" className={({ isActive }) => isActive ? 'text-[#23BE0A] font-bold border border-[#23BE0A] ' : 'font-bold'}>Pages to Read</NavLink></li>
        {/* <li><NavLink to="/applied">Applied Jobs</NavLink></li>
        <li><NavLink to="/blogs">Blog</NavLink></li> */}

    </>


    return (

        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                        {/* dynamic link */}
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* dynamic link */}
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-1">
                <a className="btn bg-[#23BE0A] px-7 py-4 text-white">Sign In</a>
                <a className="btn bg-[#59C6D2] px-7 py-4 text-white">Sign Up</a>
            </div>
        </div>


        // <div className="navbar bg-base-100">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //             </div>
        //             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        //                 <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
        //                 <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Listed Books</NavLink>
        //                 <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
        //                 <li><a>Item 1</a></li>
        //                 <li><a>Parent</a> </li>
        //                 <li><a>Item 3</a></li>
        //             </ul>
        //         </div>
        //         <a className="btn btn-ghost text-xl">Book Vibe</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //             <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
        //             <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Listed Books</NavLink>
        //             <NavLink to='/' className={({ isActive }) => isActive ? 'text-primary font-bold' : 'font-bold'}>Home</NavLink>
        //             <li><a>Item 1</a></li>
        //             <li><a>Parent</a></li>
        //             <li><a>Item 3</a></li>
        //         </ul>
        //     </div>
        //     <div className="navbar-end gap-2">
        //         <a className="btn">Sign In</a>
        //         <a className="btn">Sign Up</a>
        //     </div>
        // </div>
    );
};

export default Nav;

