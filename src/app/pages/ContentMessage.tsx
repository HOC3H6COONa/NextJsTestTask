"use client";
import React from 'react';

export type ContentMessageProps = {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    buttonLabel?: string;
    onClick: React.Dispatch<any>;
};

const ContentMessage: React.FC<ContentMessageProps> = ({
                                                           icon,
                                                           title,
                                                           subtitle,
                                                           buttonLabel,
                                                           onClick,
                                                       }) => {
    return (
        <div className="fixed left-0 right-0 z-50 flex top-1/2 transform -translate-y-1/2 items-center justify-center bg-white px-[16px] pb-[16px]">
            <div className="flex flex-col items-center gap-[16px] w-full max-w-[600px]">
                <div className="w-[58px] h-[58px] flex items-center justify-center rounded-[12px] bg-gradient-to-b from-[#FC3F1D] to-[#FC7A1D]">
                    {icon}
                </div>
                <div className="text-center flex flex-col gap-[12px] w-full">
                    <h2 className="text-[20px] leading-[28px] font-[700] font-[Raleway] text-[#414651] overflow-hidden text-ellipsis whitespace-nowrap">
                        {title}
                    </h2>
                    <p className="text-[15px] leading-[22px] font-[400] font-[Raleway] text-[#414651] overflow-hidden text-ellipsis whitespace-nowrap">
                        {subtitle}
                    </p>
                </div>
                {buttonLabel && (
                    <button
                        onClick={onClick}
                        className="w-full p-[12px] rounded-[14px] bg-[#FC3F1D] text-[15px] leading-[22px] font-[500] font-[Raleway] text-white"
                    >
                        {buttonLabel}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ContentMessage;
