import type { FC, SVGProps } from "react";
import React from "react";

interface Props extends SVGProps<SVGSVGElement> {
    color?: string | "none";
}

const LikeIcon: FC<Props> = ({ width = 16, height = 16, color="currentColor", ...props }) => {
    return (
        <svg width={width} height={height}  viewBox="0 0 22 20" xmlns="http://www.w3.org/2000/svg" fill={color} >
            <path fillRule="evenodd" clipRule="evenodd" d="M10.9932 3.13581C8.9938 0.7984 5.65975 0.169643 3.15469 2.31001C0.649644 4.45038 0.296968 8.02898 2.2642 10.5604C3.43649 12.0689 6.96994 15.3566 9.16522 17.3541C9.79785 17.9298 10.1142 18.2176 10.4858 18.3297C10.8083 18.4269 11.167 18.4255 11.4887 18.3257C11.8594 18.2108 12.1749 17.9191 12.806 17.3358C15.0853 15.229 18.8112 11.7325 19.7221 10.5604C21.6893 8.02898 21.3797 4.42787 18.8316 2.31001C16.2835 0.192157 12.9925 0.7984 10.9932 3.13581Z" stroke={color === "none" ? "#A4A7AE" : color} strokeWidth="1.28571" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    );
};

export default LikeIcon;