import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import AllProductCard from "../Shared/AllProductCard";

const AllProducts = () => {
    return (
        <div className='bg-[#F4F8FF]'>
            <div className='w-11/12 mx-auto pt-10'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-[#7E53D4] text-xl font-normal pb-2'>SUMMER</p>
                        <h1 className='text-black text-3xl font-bold pb-6'>Big Deal</h1>
                    </div>
                    <div className='space-x-2 mr-10'>
                        <button className='btn btn-outline text-3xl text-[#7E53D4] rounded-full'><GoArrowLeft /></button>
                        <button className='btn btn-outline text-3xl text-[#7E53D4] rounded-full'><GoArrowRight /></button>
                    </div>
                </div>

                <div className='grid grid-cols-4 gap-8'>
                    {
                        allProducts.map(Product => <AllProductCard key={Product.id} Product={Product}></AllProductCard>)
                    }
                </div>
            </div>
            <div className='w-11/12 mx-auto py-8'>
                <button className='w-full btn rounded-xl bg-[#7E53D4] text-white hover:bg-[#6329d6] border-none'>See more</button>
            </div>
        </div>
    );
};

export default AllProducts;


// Here is the products data. Which will come from the database. 

const allProducts = [
    {
        id: 1,
        name: "Indian Dress",
        image: "https://i.ibb.co.com/XjdpCLg/frock.png",
        price: 2300,
        rating: 3,
        numberOfRating: 50,
    },
    {
        id: 2,
        name: "Half Sleeve Shirt",
        image: "https://i.ibb.co.com/9ZNzYzf/top.png",
        price: 2300,
        rating: 3,
        numberOfRating: 50,
    },
    {
        id: 3,
        name: "Woman wearing sari",
        image: "https://i.ibb.co.com/99QBMvT/saree.png",
        price: 2300,
        rating: 3,
        numberOfRating: 50,
    },
    {
        id: 4,
        name: "Checkered shirt",
        image: "https://i.ibb.co.com/vzc5c3t/shirt.png",
        price: 2300,
        rating: 3,
        numberOfRating: 50,
    },
    {
        id: 5,
        name: "Indian Dress",
        image: "https://i.ibb.co.com/XjdpCLg/frock.png",
        price: 2300,
        rating: 3,
        numberOfRating: 50,
    },
    {
        id: 6,
        name: "Half Sleeve Shirt",
        image: "https://i.ibb.co.com/9ZNzYzf/top.png",
        price: 2300,
        rating: 3,
        numberOfRating: 50,
    },
    {
        id: 7,
        name: "Woman wearing sari",
        image: "https://i.ibb.co.com/99QBMvT/saree.png",
        price: 2300,
        rating: 3,
        numberOfRating: 50,
    },
    {
        id: 8,
        name: "Checkered shirt",
        image: "https://i.ibb.co.com/vzc5c3t/shirt.png",
        price: 2300,
        rating: 3,
        numberOfRating: 50,
    },
]