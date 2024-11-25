import { IoBagOutline } from "react-icons/io5";
import ProductBanner from "../../../../components/ProductDetails/ProductBanner";
import ProductReview from "../../../../components/ProductDetails/ProductReview";

const page = () => {
    return (
        <div className='bg-[#FFFFFF] text-[#1D1D1D]'>
            <ProductBanner />
            <ProductReview />
        </div>
    );
};

export default page;