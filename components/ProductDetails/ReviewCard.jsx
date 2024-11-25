import Image from "next/image";
import userImg from "../../public/images/user-pic.png";
import { AiOutlineLike } from "react-icons/ai";

const ReviewCard = () => {
    return (
        <div className="p-5">
            <div className="flex gap-3">
                <div>
                    <Image
                        src={userImg}
                        width={40}
                        height={40}
                        alt='user profile image' />
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <h1 className="font-semibold">Cameron Williamson</h1>
                        <p className="text-xs font-normal text-[#656565]">3 days</p>
                    </div>
                    <div className="mt-2 mb-4">
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FFC700]" />
                        </div>
                    </div>
                </div>
            </div>
            <p className="font-bold mb-4">very Nice!!</p>
            <div className="flex items-center gap-1">
                <AiOutlineLike />
                <span>10</span>
            </div>
        </div>
    );
};

export default ReviewCard;