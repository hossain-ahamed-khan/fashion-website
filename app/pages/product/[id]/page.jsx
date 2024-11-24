import { IoBagOutline } from "react-icons/io5";

const page = () => {
    return (
        <div className='bg-[#FFFFFF] text-[#1D1D1D]'>
            <div className='w-11/12 mx-auto'>
                <h3>Feature Product / <span className='text-[#7E53D4]'>New Arrival</span></h3>
                <div className='flex-none md:flex'>
                    <div className='w-full md:w-1/2'>image</div>
                    <div className='w-full md:w-1/2'>
                        <button>New Arrival</button>
                        <h1>White Hoodie</h1>
                        <div className='flex'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                            </div>
                            <p>(4.0)</p>
                            <p>121 reviews</p>
                        </div>

                        <div className="flex justify-between">
                            <p>BDT 2500</p>
                            <div className='w-25 h-25 bg-[#7E53D4] rounded-xl'>
                                <IoBagOutline />
                                <p>Your bag</p>
                                <p>0</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <div>
                                <p>Available Size</p>
                            </div>
                            <div>
                                <p>Available Color</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <p>Quantity</p>
                        </div>
                        <div>
                            <button>Buy Now</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default page;