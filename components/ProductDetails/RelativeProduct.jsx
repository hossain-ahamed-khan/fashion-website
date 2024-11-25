import NewProductCard from '../../components/Shared/NewProductCard';
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const RelativeProduct = () => {
    return (
        <div className='bg-[#F4F8FF]'>
            <div className='w-11/12 mx-auto pt-16'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-black text-2xl font-bold pb-2'>Related Products</p>
                    </div>
                    <div className='space-x-2 mr-10'>
                        <button className='btn btn-outline text-3xl text-[#7E53D4] rounded-full'><GoArrowLeft /></button>
                        <button className='btn btn-outline text-3xl text-[#7E53D4] rounded-full'><GoArrowRight /></button>
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                    {
                        relativeProducts.map(newProduct => <NewProductCard key={newProduct.id} newProduct={newProduct}></NewProductCard>)
                    }
                </div>
            </div>
            <div className='w-11/12 mx-auto py-8'>
                <button className='w-full btn rounded-xl bg-[#7E53D4] text-white hover:bg-[#6329d6] border-none'>See more</button>
            </div>
        </div>
    );
};

export default RelativeProduct;


const relativeProducts = [
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