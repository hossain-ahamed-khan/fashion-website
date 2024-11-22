import Image from 'next/image';
import logo from '../../public/images/logo.png';
import { CiSearch } from 'react-icons/ci';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { FaRegUser } from 'react-icons/fa';

const navLinks = <>
    <li><a className='hover:text-[#581FC1]'>Home</a></li>
    <li><a className='hover:text-[#581FC1]'>Shop</a></li>
    <li><a className='hover:text-[#581FC1]'>Deals</a></li>
    <li><a className='hover:text-[#581FC1]'>What's New</a></li>
</>

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#F5F3FF]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#646464]">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='ml-10'>
                        <Image
                            src={logo}
                            width={100}
                            height={50}
                            alt="Picture of the author"
                        />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#646464] font-semibold">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end text-[#1D1D1D] text-sm font-normal">

                    <div className='flex w-52 bg-[#FFFFFF] items-center p-2 rounded-3xl'>
                        <input type="text" />
                        <CiSearch className='text-xl mx-2' />
                        Search
                    </div>

                    <div>
                        <LiaShoppingBagSolid className='mx-6 text-xl' />
                    </div>
                    <div>
                        <FaRegUser className='mr-10 text-xl' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;