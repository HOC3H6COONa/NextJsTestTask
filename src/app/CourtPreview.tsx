"use client"
import Image from "next/image"
import {useState} from "react";
import LikeIcon from "@/app/LikeIcon";
import StarIcon from "@/app/StarIcon";

interface Props {
    name: string,
    rating: number,
    votes: number,
    price: number,
    address: string,
    timeSlots: number
}

const CourtPreview = ({
    name,
    rating,
    votes,
    price,
    timeSlots,
    address,
}:Props) => {

    const [like, setLike] = useState<boolean>(false)

    return (
        <div className="fixed bottom-0 left-0 w-full flex flex-col gap-[24px] p-[16px]">
            <div className="flex flex-row gap-[12px]">
                <Image
                    src="/image.webp"
                    alt="Court image"
                    width={88}
                    height={88}
                    className="w-[88px] h-[88px] object-cover rounded-[12px]"
                ></Image>
                <div className="flex flex-col gap-[4px]" style={{ maxWidth: "calc(100% - 88px - 44px)" }}>
                    <p className="text-[15px] leading-[22px] font-[600] text-[#181D27] whitespace-nowrap overflow-hidden text-ellipsis flex-grow">
                        {name}
                    </p>
                    <div className="flex flex-row gap-[8px] items-center">
                        <div className="flex flex-row gap-[4px] text-[13px] leading-[18px] font-[Raleway] items-center justify-center">
                            <StarIcon
                                width={16}
                                height={16}
                                alt="Star"
                            />
                            <p className="text-[#181d27] font-[600]">{rating}</p>
                            <p className="text-gray-500 font-[400]">({votes})</p>
                        </div>
                        <p className="text-[15px] leading-[22px] font-[700] text-[#414651]">от {price}</p>
                    </div>
                    <p className="font-[Manrope] text-[13px] leading-[18px] text-[#414651]">{address}</p>
                </div>
                <div className="min-w-fit"
                >
                    <div onClick={() => setLike(prev => !prev)}>
                        <LikeIcon
                            alt="Heart"
                            width={20}
                            height={18}
                            color={like ? "red" : "none"}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-[8px] overflow-auto">
                {Array.from({ length: Math.min(timeSlots, 12) }).map((_, i) => {
                    const hour = 12 + i;
                    const time = `${hour.toString()}:00`;
                    return (
                        <div
                            key={hour}
                            className="min-w-[68px] min-h-[40px] rounded-[12px] border border-[#d5d7da] flex items-center justify-center font-medium text-[#181d27] text-[15px] leading-[22px] font-[Raleway]"
                        >
                            {time}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CourtPreview