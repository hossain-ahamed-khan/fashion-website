import React from 'react';
import NewProductCard from '../Shared/NewProductCard';
const NewArrival = () => {
    return (
        <div className='bg-[#F4F8FF]'>
            <div className='w-11/12 mx-auto'>
                <div className='flex justify-between'>
                    <div>
                        <p>FEATURED PRODUCT</p>
                        <h1>New Arrivals</h1>
                    </div>
                    <div>
                        arrows
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-8'>
                    {
                        newProducts.map(newProduct => <NewProductCard key={newProduct.id} newProduct={newProduct}></NewProductCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NewArrival;


const newProducts = [
    {
        id: 1,
        name: "Indian Sharee",
        image: "https://i.ibb.co.com/84LNQDg/design-saree.png",
        price: 2300
    },
    {
        id: 2,
        name: "Hoodi",
        image: "https://i.ibb.co.com/wQLVpBn/hoodie.png",
        price: 2300
    },
    {
        id: 3,
        name: "Plazu",
        image: "https://i.ibb.co.com/1XtcHs3/pant.png",
        price: 2300
    },
    {
        id: 4,
        name: "Jacket",
        image: "https://i.ibb.co.com/hVZ6v4b/jaket.png",
        price: 2300
    },
]