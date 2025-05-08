import React from 'react';
import RateStar from "@/app/pages/RateStar";

export interface SummaryRatingsProps {
    isFull: boolean,
    rating: number,
}

const SummaryRatings: React.FC<SummaryRatingsProps> = ({isFull, rating}) => {

    const roundedRating = Math.round(rating);

    return (
        <div>
            {isFull ?
                <div className={"flex flex-row gap-[4px]"}>
                    {Array.from({length: 5},(_, index) => (
                        <RateStar key={index} isActive={index + 1 <= roundedRating}> </RateStar>
                    ))}
                </div>
                :
                <div className={"flex flex-row gap-[4px] items-center"}>
                    <RateStar isActive/>
                    <p className={"text-[13px] leading-[18px] font-[600] font-[Raleway] text-[#181D27]"}>{rating}</p>
                </div>
            }
        </div>
    );
};

export default SummaryRatings;