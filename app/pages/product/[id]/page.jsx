import ProductBanner from "../../../../components/ProductDetails/ProductBanner";
import ProductReview from "../../../../components/ProductDetails/ProductReview";
import RelativeProduct from "../../../../components/ProductDetails/RelativeProduct";

const page = () => {
    return (
        <div className='bg-[#FFFFFF] text-[#1D1D1D]'>
            <ProductBanner />
            <ProductReview />
            <RelativeProduct />
        </div>
    );
};

export default page;