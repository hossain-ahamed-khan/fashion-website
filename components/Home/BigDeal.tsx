import Image from 'next/image';
import { GoArrowUpRight } from 'react-icons/go';

const BigDeal = () => {
    return (
        <div className='bg-[#F4F8FF]'>
            <div className='w-11/12 mx-auto bg-[#EEECFB] flex-none md:flex justify-between px-20 pt-5 space-y-5 md:space-y-0'>
                <div className='w-full md:w-2/3 mx-auto flex flex-col justify-center space-y-3 text-center md:text-left'>
                    <p className='text-[#6F42C1] text-2xl font-semibold'>Big Deal</p>
                    <h1 className='text-3xl md:text-5xl font-semibold text-[#1D1D1D] pb-5'><span className='text-[#6F42C1]'>30% </span> Off for New Customers</h1>
                    <div className='flex justify-center md:justify-start'>
                        <button className="btn bg-[#8F71E1] text-[#FFFFFF] rounded-full py-4 px-8 hover:bg-[#6a47c9] border-none">Shop Now</button>
                        <div className="bg-[#8F71E1] px-3 rounded-full flex justify-center items-center"><GoArrowUpRight className="text-2xl text-[#FFFFFF] " /></div>
                    </div>
                </div>
                <div className='w-full md:w-1/3 mx-auto'>
                    <Image
                        src="https://i.ibb.co.com/PNqfbdS/models.png"
                        width={400}
                        height={500}
                        alt="Picture of the car"
                    />
                </div>
            </div>
        </div>
    );
};

export default BigDeal;