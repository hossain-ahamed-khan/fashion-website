import React from 'react';
import NewProductCard from '../Shared/NewProductCard';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const NewArrival = () => {

    return (
        <div className='bg-[#F4F8FF]'>
            <div className='w-11/12 mx-auto pt-16'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-[#7E53D4] text-xl font-normal pb-2'>FEATURED PRODUCT</p>
                        <h1 className='text-black text-3xl font-bold pb-6'>New Arrivals</h1>
                    </div>
                    <div className='space-x-2 mr-10'>
                        <button className='btn btn-outline text-3xl text-[#7E53D4] rounded-full'><GoArrowLeft /></button>
                        <button className='btn btn-outline text-3xl text-[#7E53D4] rounded-full'><GoArrowRight /></button>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-8'>
                    {
                        newProducts.map(newProduct => <NewProductCard key={newProduct.id} newProduct={newProduct}></NewProductCard>)
                    }
                </div>
            </div>
            <div className='w-11/12 mx-auto py-8'>
                <button className='w-full btn rounded-xl bg-[#7E53D4] text-white hover:bg-[#6329d6]'>See more</button>
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