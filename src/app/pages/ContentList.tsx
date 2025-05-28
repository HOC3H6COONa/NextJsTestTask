"use client"

import React from "react";

interface ContentItem {
    label: string;
    item?: React.ReactNode;
}

export interface ContentListProps {
    itemsList: (string | ContentItem)[];
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
    setShowComponent: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContentList: React.FC<ContentListProps> = ({
                                                     itemsList,
                                                     activeItem,
                                                     setActiveItem,
                                                     setShowComponent,
                                                 }) => {
    const handleItemClick = (item: string) => {
        setActiveItem(item);
        setShowComponent(false);
    };

    const isContentItem = (item: ContentItem | string): item is ContentItem => {
        return typeof item === "object" && "label" in item;
    };

    return (
        <div className="absolute w-full z-50 flex items-center justify-center bottom-0" style={{ borderWidth: '0.33px', borderColor: '#00000014' }}>
            <div className="bg-[#ffffff] w-full overflow-y-auto max-h-[100vh]">
                <ul className="divide-y divide-gray-200 pl-[16px]">
                    {itemsList.map((item, idx) => {
                        const label = isContentItem(item) ? item.label : item;
                        const icon = isContentItem(item) ? item.item : null;

                        return (
                            <li
                                key={idx}
                                className="cursor-pointer py-[16px] pr-[16px] text-[17px] leading-[23px] font-[400] font-[Raleway] text-[#1B1822] flex flex-row items-center justify-between"
                                onClick={() => handleItemClick(label)}
                            >
                                <div className="flex items-center gap-[8px]">
                                    {icon && <span>{icon}</span>}
                                    <span>{label}</span>
                                </div>
                                {activeItem === label && (
                                    <svg
                                        width="13"
                                        height="10"
                                        viewBox="0 0 13 10"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M1.19922 5.23844L4.55922 8.59844L11.7592 1.39844"
                                            stroke="#FC3F1D"
                                            strokeWidth="1.4"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ContentList;