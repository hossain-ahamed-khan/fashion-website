import whiteDot from '../../public/images/white-dot.png';
import BlackDot from '../../public/images/black-dot.png';
import Image from "next/image";
import { IoBagOutline } from 'react-icons/io5';

const ProductBanner = () => {
    return (
        <div>
            <div className='w-11/12 mx-auto py-5'>
                <h3>Feature Product / <span className='text-[#7E53D4]'>New Arrival</span></h3>

                <div className='flex-none md:flex'>
                    <div className='w-full md:w-1/2'>
                        <div className="p-5">
                            <Image
                                src="https://i.ibb.co.com/8MdK6jH/main-img.png"
                                width={300}
                                height={400}
                                style={{ width: '100%', height: 'auto' }}
                                alt='details main image' />
                        </div>

                    </div>
                    <div className='w-full md:w-1/2'>
                        <button className="btn bg-[#452685] px-10 text-white border-none hover:bg-[#5d33b1]">New Arrival</button>
                        <h1 className="my-4 text-3xl font-semibold">White Hoodie</h1>
                        <div className='flex space-x-3'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                            </div>
                            <p>(4.0)</p>
                            <p className="text-[#7E53D4]">121 reviews</p>
                        </div>

                        <div className="flex justify-between">
                            <p className="text-2xl font-bold mt-4">BDT 2500</p>
                            <div className='w-25 h-25 bg-[#6f3bd6] rounded-xl text-white text-center p-1.5 px-3 flex flex-col justify-center items-center'>
                                <IoBagOutline className="text-2xl" />
                                <p className="text-xs">Your bag</p>
                                <p className="text-xs">0</p>
                            </div>
                        </div>
                        <hr />
                        <div className="flex my-4">
                            <div className="w-1/2">
                                <p className="text-xl font-semibold">Available Size</p>
                                <div className="space-x-2 my-3">
                                    <button className="btn w-12 btn-outline border-2 border-purple-600">S</button>
                                    <button className="btn w-12 btn-outline">M</button>
                                    <button className="btn w-12 btn-outline">L</button>
                                    <button className="btn w-12 btn-outline">XL</button>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <p className="text-xl font-semibold">Available Color</p>
                                <div className="flex space-x-3 my-3">
                                    <div className="flex space-x-2 items-center">
                                        <Image
                                            src={whiteDot}
                                            width={26}
                                            height={0}
                                            alt='white dot'
                                        />
                                        <p>Off White</p>
                                    </div>
                                    <div className="flex space-x-2 items-center">
                                        <Image
                                            src={BlackDot}
                                            width={35}
                                            height={30}
                                            alt='black dot'
                                        />
                                        <p>Black</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="my-2">
                            <p className="font-bold text-xl mb-2">Quantity</p>
                            <div className="w-28 bg-[#ECE9FE] rounded-2xl flex justify-around p-1">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                        <div className="my-4 space-x-1">
                            <button className="btn bg-[#7E53D4] w-72 text-white border-none">Buy Now</button>
                            <button className="btn w-72 border-2 border-[#7E53D4] btn-outline text-[#7E53D4]">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;