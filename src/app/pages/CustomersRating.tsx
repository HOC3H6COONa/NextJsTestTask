import React from 'react';
import RateStar from "@/app/pages/RateStar";


export interface CustomersRatingProps {
    isLarge: boolean,
    rating: number,
}

const CustomersRating: React.FC<CustomersRatingProps> = ({isLarge,rating}) => {

    const roundedRating = Math.round(rating);

    return (
        <div className={"flex flex-row gap-[4px]"}>
            {Array.from({length: 5},(_, index) => (
                <RateStar width={isLarge? 24 : 14} height={isLarge? 24 : 14} key={index} isActive={index + 1 <= roundedRating}> </RateStar>
            ))}
        </div>
    );
};

export default CustomersRating;