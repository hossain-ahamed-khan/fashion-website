import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NewProductCard = ({ newProduct }) => {
    const { name, image, price } = newProduct;
    return (
        <div>
            <Link href={`/pages/product/1`}>
                <div className="card bg-[#FFFFFF] transform transition duration-500 hover:scale-105">
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
            </Link>
        </div>
    );
};

export default NewProductCard;