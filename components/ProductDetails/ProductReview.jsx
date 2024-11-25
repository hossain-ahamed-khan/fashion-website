import { IoIosArrowDown } from "react-icons/io";
import ReviewCard from "./ReviewCard";

const ProductReview = () => {
    return (
        <div className="w-11/12 mx-auto">
            <div role="tablist" className="tabs tabs-bordered w-full md:w-1/2">
                <a role="tab" className="tab">Details</a>
                <a role="tab" className="tab tab-active">Review & Rating</a>
                <a role="tab" className="tab">Discussion</a>
            </div>

            <div className="flex-none md:flex-row-reverse">
                <div className="w-full md:w-2/5 mt-10 p-10 space-y-5">
                    <div className="flex gap-2">
                        <p className="font-semibold">Product Review</p>
                        <p className="text-[#7E53D4] font-semibold">121 reviews</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                        </div>
                        <p className="mr-10">(4.0)</p>
                    </div>
                    <hr />
                    <div className="flex items-center gap-2">
                        <div className="flex flex-col gap-2">
                            <p>5</p>
                            <p>4</p>
                            <p>3</p>
                            <p>2</p>
                            <p>1</p>
                        </div>
                        <div className="grid grid-cols-1 gap-6">
                            <progress className="progress progress-warning w-80" value="50" max="100"></progress>
                            <progress className="progress progress-warning w-80" value="10" max="100"></progress>
                            <progress className="progress progress-warning w-80" value="30" max="100"></progress>
                            <progress className="progress progress-warning w-80" value="40" max="100"></progress>
                            <progress className="progress progress-warning w-80" value="5" max="100"></progress>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p>50</p>
                            <p>10</p>
                            <p>30</p>
                            <p>40</p>
                            <p>5</p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-3/5">
                    <div className="dropdown relative ml-4 mt-10">
                        <div tabIndex={0} role="button" className="btn m-1 btn-outline text-black border-2 border-purple-600 px-5">Newest
                            <IoIosArrowDown className="relative" />
                        </div>

                    </div>
                    <div>
                        <ReviewCard />
                        <hr />
                        <ReviewCard />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductReview;