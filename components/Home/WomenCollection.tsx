import Image from 'next/image';
import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';

const WomenCollection = () => {
    return (
        <div className='bg-[#F4F8FF] h-[580px] visible md:invisible'>
            <div className="w-11/12 mx-auto h-[490px] flex-none md:flex justify-center items-center">
                <div className="relative w-full md:w-1/2 mx-auto flex justify-center">
                    <div className="absolute bottom-0 w-full h-[400px] bg-[#EEECFB]"></div>
                    <Image
                        className="relative"
                        src="https://i.ibb.co.com/LN35ttF/women.png"
                        width={300}
                        height={400}
                        alt="Pictur of models"
                    />
                </div>

                <div className="w-full md:w-1/2 mx-auto px-2 md:px-10 space-y-1 md:space-y-5">
                    <h1 className="text-3xl md:text-5xl font-semibold text-[#1D1D1D]">MEN COLLECTION</h1>
                    <div className='flex'>
                        <button className="btn bg-[#8F71E1] text-[#FFFFFF] rounded-full py-4 px-8 hover:bg-[#6a47c9] border-none">Shop Now</button>
                        <div className="bg-[#8F71E1] px-3 rounded-full flex justify-center items-center"><GoArrowUpRight className="text-2xl text-[#FFFFFF] " /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WomenCollection;