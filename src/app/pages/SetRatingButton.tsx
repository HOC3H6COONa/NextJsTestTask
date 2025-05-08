import React, {Dispatch} from 'react';
import RateStar from "@/app/pages/RateStar";

export interface SetRatingButtonProps {
    rating: number;
    setRating: Dispatch<number>
}

const SetRatingButton: React.FC<SetRatingButtonProps> = ({rating, setRating}) => {
    return (
        <div className="flex flex-row gap-[16px]">
            {Array.from({length: 5},(_,index)=>(
                <span key={index} onClick={() => setRating(index + 1)}>
                    <RateStar
                        width={32}
                        height={32}
                        isActive={index + 1 <= rating}
                    />
                </span>
            ))}
        </div>
    );
};

export default SetRatingButton