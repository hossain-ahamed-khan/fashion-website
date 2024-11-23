import Image from "next/image";

const AllProductCard = ({ Product }) => {
    const { name, image, price, rating, numberOfRating } = Product;
    return (
        <div>
            <div className="card bg-[#FFFFFF]">
                <figure>
                    <Image
                        className='p-3'
                        src={image}
                        width={300}
                        height={400}
                        style={{ width: '100%', height: 'auto' }}
                        alt='new arrival product image' />
                </figure>
                <div className="text-black flex p-6 justify-between">
                    <h2 className='text-lg font-normal'>{name}</h2>
                    <p className='text-xl font-semibold'>BDT {price}</p>
                </div>
                <div className='px-3 pb-3'>
                    <button className='btn btn-outline w-full text-[#7E53D4] text-lg font-semibold border-2'>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default AllProductCard;