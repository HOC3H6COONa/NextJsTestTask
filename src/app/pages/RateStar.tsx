import type { FC, SVGProps } from "react";
import React from "react";

interface Props extends SVGProps<SVGSVGElement> {
    isActive?: boolean;
}

const RateStar: FC<Props> = ({ width = 16, height = 16, isActive,...props }) => {

    const color = isActive ? "#F79009" : "#D5D7DA"

    return (
        <svg width={width} height={height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.31462 1.80564C7.62555 1.28899 8.37459 1.28899 8.68551 1.80564L10.2391 4.38724C10.3508 4.57285 10.533 4.70523 10.7441 4.75411L13.6794 5.43394C14.2669 5.56999 14.4984 6.28237 14.1031 6.73774L12.1279 9.01309C11.9859 9.17668 11.9163 9.39087 11.935 9.60668L12.1956 12.6084C12.2477 13.2092 11.6417 13.6495 11.0865 13.4142L8.31214 12.2389C8.11267 12.1544 7.88746 12.1544 7.68799 12.2389L4.91365 13.4142C4.35843 13.6495 3.75244 13.2092 3.80458 12.6084L4.06509 9.60668C4.08382 9.39087 4.01423 9.17668 3.87222 9.01309L1.89707 6.73774C1.50178 6.28237 1.73325 5.56999 2.3207 5.43394L5.25605 4.75411C5.46709 4.70523 5.64929 4.57285 5.76099 4.38724L7.31462 1.80564Z" fill={color} stroke={color} strokeWidth="1.25"/>
        </svg>

    );
};

export default RateStar;