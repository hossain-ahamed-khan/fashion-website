import Image from 'next/image';
import React from 'react';

const NewProductCard = ({ newProduct }) => {
    const { name, image, price } = newProduct;
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
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                    </h2>
                    <p>{price}</p>
                </div>
            </div>
        </div>
    );
};

export default NewProductCard;