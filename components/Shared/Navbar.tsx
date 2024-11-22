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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#F5F3FF]">
                            {navLinks}
                        </ul>
                    </div>
                    <div className='ml-1 lg:ml-10'>
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

                    <div className='bg-[#FFFFFF] py-2 pl-2 rounded-l-3xl invisible lg:visible'>
                        <CiSearch className='text-xl' />
                    </div>
                    <div className='invisible lg:visible'>
                        <input type="text" className='w-52 right-2 text-[#1D1D1D] bg-[#FFFFFF] p-2 rounded-r-3xl focus:outline-none' placeholder='Search' />
                    </div>

                    <div className='visible lg:invisible'>
                        <CiSearch className='text-2xl' />
                    </div>

                    <div className='relative'>
                        <LiaShoppingBagSolid className='mx-6 text-2xl' />
                        <span className="absolute right-5 top-0 text-xs text-[#FFFFFF] px-1 bg-[#1E1E1E] rounded-full">0</span>
                    </div>
                    <div>
                        <FaRegUser className='mr-10 text-2xl' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;