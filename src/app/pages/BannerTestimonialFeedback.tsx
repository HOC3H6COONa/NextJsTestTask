import React, {Dispatch} from 'react';
import Image from "next/image"
import RateStar from "@/app/pages/RateStar";

export interface BannerTestimonialFeedbackProps {
    placeName: string
    ImgUrl: string
    rating: number
    setRating: Dispatch<number>
}

const BannerTestimonialFeedback: React.FC<BannerTestimonialFeedbackProps> = ({
    placeName,
    ImgUrl,
    rating,
    setRating
                                                                             }) => {

    const handleRatingClick = async (index: number) => {
        try {
            const response = await fetch('url', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    rating: index + 1,
                    id: 1,
                }),
            });

            console.log('Успешно отправлено:');
        } catch (error) {
            console.error('Ошибка запроса:', error);
        }
        setRating(index + 1)
    }

    return (
        <div className="bg-[#F8F8F8] w-full rounded-[16px] flex flex-row">
            <div className="flex flex-col gap-[16px] p-[16px]">
                <h2 className="text-[17px] leading-[23px] font-[700] font-[Raleway] text-[#414651]">
                    Вам понравилась площадка?
                </h2>
                <div className="flex flex-row gap-[12px]">
                    <Image
                        src={ImgUrl}
                        alt="Court image"
                        width={72}
                        height={72}
                        className="w-[72px] h-[72px] object-cover rounded-[12px]"
                    ></Image>
                    <div className="flex flex-col gap-[8px]">
                        <p className="text-[13px] leading-[18px] font-[600] font-[Raleway] text-[#181D27]">
                            {placeName}
                        </p>
                        <div className="flex flex-row gap-[4px]">
                            {Array.from({length: 5}, (_, index) => (
                                <span key={index} onClick={() => handleRatingClick(index)}>
                                 <RateStar
                                     width={24}
                                     height={24}
                                     isActive={index + 1 <= rating}
                                 />
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
`            <div className="p-[12px]" onClick={()=>{}}>
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM13.947 6.053C13.6541 5.7601 13.1792 5.7601 12.8863 6.053L10 8.93916L7.11366 6.053L7.03685 5.98588C6.74288 5.76214 6.32148 5.78451 6.053 6.053L5.98588 6.1298C5.76214 6.42377 5.78451 6.84517 6.053 7.11366L8.93916 10L6.053 12.8863C5.7601 13.1792 5.7601 13.6541 6.053 13.947C6.34589 14.2399 6.82077 14.2399 7.11366 13.947L10 11.0608L12.8863 13.947L12.9631 14.0141C13.2571 14.2379 13.6785 14.2155 13.947 13.947L14.0141 13.8702C14.2379 13.5762 14.2155 13.1548 13.947 12.8863L11.0608 10L13.947 7.11366C14.2399 6.82077 14.2399 6.34589 13.947 6.053Z" fill="#D5D7DA"/>
            </svg>
        </div>
        </div>
    );
};

export default BannerTestimonialFeedback;