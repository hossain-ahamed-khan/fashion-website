import { GoArrowUpRight } from "react-icons/go";
import carImg from '../../public/images/truck-delivery.png';
import exchangeImg from '../../public/images/exchange-01.png';
import cardImg from '../../public/images/payment-02.png';
import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div
                className="hero h-[580px]"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/vVNmDMR/hero-image.png)",
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="w-11/12">
                        <h1 className="mb-5 text-5xl font-bold text-[#FFFFFF]">Elevate Your Everyday Style</h1>
                        <p className="mb-5">
                            Discover the Latest Trends in Sustainable Fashion
                        </p>
                        <div className="flex justify-center">
                            <button className="btn bg-[#8F71E1] text-[#FFFFFF] rounded-full py-4 px-8 hover:bg-[#6a47c9]">Shop Now</button>
                            <div className="bg-[#8F71E1] px-3 rounded-full flex justify-center items-center"><GoArrowUpRight className="text-2xl text-[#FFFFFF] " /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#6441C2E6]">
                <div className="flex-none md:flex w-full lg:w-5/6 mx-auto gap-10 justify-between text-[#FFFFFF] px-4 py-8">
                    <div className="flex gap-3 mb-4 md:mb-0">
                        <div><Image
                            src={carImg}
                            width={40}
                            height={40}
                            alt="Picture of the car" /></div>
                        <div>
                            <h1 className="text-xl font-semibold mb-1">FREE SHIPPING</h1>
                            <p className="text-sm font-normal">BUY BDT 3000+ & GET FREE DELIVERY</p>
                        </div>
                    </div>

                    <div className="flex gap-3 mb-4 md:mb-0">
                        <div><Image
                            src={exchangeImg}
                            width={40}
                            height={40}
                            alt="Picture of the exchange" /></div>
                        <div>
                            <h1 className="text-xl font-semibold mb-1">7 DAYS EXCHANGE</h1>
                            <p className="text-sm font-normal">EXCHANGE WITHIN 7 DAYS WITH SIMILAR TYPE OF PRODUCTS</p>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div><Image
                            src={cardImg}
                            width={40}
                            height={40}
                            alt="Picture of the card" /></div>
                        <div>
                            <h1 className="text-xl font-semibold mb-1">100% PAYMENT SECURE</h1>
                            <p className="text-sm font-normal">CASH ON DELIVERY AND SECURED ONLINE PAYMENT</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;