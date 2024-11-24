import Image from 'next/image';
import navLogo from '../../public/images/nav-logo.png';
import facebookLogo from '../../public/images/Facebook.png';
import xLogo from '../../public/images/Twitter.png';
import linkedInLogo from '../../public/images/Linkedin.png';

const Footer = () => {
    return (
        <div>
            <div className='bg-[#1D1D1D] text-[#FFFFFF] p-10 md:p-20'>
                <div className='flex-none md:flex'>
                    <div className='w-full md:w-1/2'>
                        <div><Image
                            src={navLogo}
                            width={150}
                            height={70}
                            alt="Picture of the author"
                        /></div>
                        <p className='w-full md:w-2/3 mt-5 md:mt-10 mb-10 md:mb-20'>Saepe quo suscipit vitae quia. Repudiandae nobis quis. Laboriosam unde quae qui quasi mollitia tenetur. Dicta explicabo est consectetur maxime quos fugit velit assumenda est. </p>
                    </div>

                    <div className='pb-10 md:pb-24 w-full md:w-1/2'>
                        <h3 className='text-2xl font-bold'>Sign Up For Our Newsletter!</h3>
                        <p className='mt-2 mb-6'>Get notified about updates and be the first to get early access to new Podcast episodes.</p>
                        <div className='flex'>
                            <input className='bg-[#FFFFFF] w-96 rounded-l-md p-3 text-black' type="text" placeholder='Your email address' />
                            <button className='bg-[#7E53D4] px-10 rounded-r-md'>Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className='flex-none md:flex justify-between'>
                    <div className='flex-none md:flex w-full md:w-1/2 justify-between'>
                        <div>
                            <h3 className='font-bold mb-4'>Contact Us</h3>
                            <p>support@we5ive.com</p>
                        </div>
                        <div className='space-y-2 mr-36'>
                            <p>About Us</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                    <div className='flex-none md:flex w-full md:w-1/2 justify-around'>
                        <div className='space-y-2'>
                            <p>Privacy policy</p>
                            <p>Terms & Condition</p>
                        </div>
                        <div className='space-y-4'>
                            <p className='font-semibold'>Social Link</p>
                            <div className='flex space-x-5'>
                                <div><Image
                                    src={facebookLogo}
                                    width={25}
                                    height={25}
                                    alt="Picture of the author"
                                /></div>

                                <div><Image
                                    src={xLogo}
                                    width={25}
                                    height={25}
                                    alt="Picture of the author"
                                /></div>

                                <div><Image
                                    src={linkedInLogo}
                                    width={25}
                                    height={25}
                                    alt="Picture of the author"
                                /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-[#7E53D4] text-[#FFFFFF] text-center p-3'>
                &copy; 2024 | We5ive
            </div>
        </div>
    );
};

export default Footer;