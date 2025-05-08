import React, { useState } from 'react';
import CustomersRating from './CustomersRating';
import Image from 'next/image';

export interface TestimonialProps {
    name: string;
    profileImgUrl: string;
    rating: number;
    mapUrl: string;
    pros: string[];
    cons: string[];
    commentDate : Date
    comment?: string;
    imgUrls?: string[];
}

const Testimonial: React.FC<TestimonialProps> = ({
                                                     name,
                                                     profileImgUrl,
                                                     rating,
                                                     mapUrl,
                                                     pros,
                                                     cons,
                                                     comment,
                                                     imgUrls = [],
                                                     commentDate,
                                                 }) => {
    const [showFullComment, setShowFullComment] = useState(false);

    return (
        <div className="bg-[#FFFFFF] p-[16px] rounded-[16px] flex flex-col gap-[12px] w-full">
            <div className="flex flex-row gap-[8px]">
                <Image
                    src={profileImgUrl}
                    alt={`${name} avatar`}
                    width={32}
                    height={32}
                    className="w-[32px] h-[32px] rounded-[64px]"
                />
                <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                    <p className="text-[11px] leading-[15px] font-[600] font-[Raleway] text-[#181D27] truncate">{name}</p>
                    <div className="flex flex-row gap-[8px] items-center">
                        <CustomersRating isLarge={false} rating={rating} />
                        <p className="text-[11px] leading-[15px] font-[600] font-[Raleway] text-[#717680]">{commentDate.toLocaleDateString('ru-RU')}</p>
                    </div>
                    <a
                        href={mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] leading-[15px] font-[600] font-[Raleway] text-[#FC3F1D] flex flex-row items-center"
                    >
                        Яндекс.Карты
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.3334 9.68627V4.66666M15.3334 4.66666H10.3138M15.3334 4.66666L9.05886 10.9412" stroke="#FC3F1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M14.7059 12.1961V12.1961C14.7059 12.3235 14.7059 12.3872 14.704 12.4411C14.6475 14.0134 13.386 15.2749 11.8137 15.3314C11.7598 15.3333 11.6961 15.3333 11.5687 15.3333H9.68633C7.79852 15.3333 6.85461 15.3333 6.1534 14.9237C5.70772 14.6633 5.33675 14.2923 5.07638 13.8466C4.66672 13.1454 4.66672 12.2015 4.66672 10.3137V8.43137C4.66672 8.30393 4.66672 8.24021 4.66865 8.18634C4.72517 6.61408 5.98669 5.35257 7.55894 5.29605C7.61281 5.29411 7.67653 5.29411 7.80397 5.29411V5.29411" stroke="#FC3F1D" strokeWidth="1.2" strokeLinecap="round"/>
                        </svg>

                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-[6px]">
                <div>
                    <p className="text-[11px] leading-[15px] font-[600] font-[Raleway] text-[#181D27]">Плюсы</p>
                    <div className="flex flex-col">
                        {pros.map((pro, i) => (
                            <p key={i}
                               className="text-[11px] leading-[15px] font-[400] font-[Raleway] text-[#414651]">{pro}</p>
                        ))}
                    </div>
                </div>
                <div>
                    <p className="text-[11px] leading-[15px] font-[600] font-[Raleway] text-[#181D27]">Минусы</p>
                    <div className="flex flex-col">
                        {cons.map((con, i) => (
                            <p key={i}
                               className="text-[11px] leading-[15px] font-[400] font-[Raleway] text-[#414651]">{con}</p>
                        ))}
                    </div>
                </div>
                {comment && (
                    <div className="relative ">
                        <p className="text-[11px] leading-[15px] font-[600] font-[Raleway] text-[#181D27]">Комментарий</p>
                        <p
                            className={`transition-all ${
                                showFullComment ? '' : 'line-clamp-2'
                            } text-[11px] leading-[15px] font-[400] font-[Raleway] text-[#414651]`}
                        >
                            {comment}
                        </p>
                        {!showFullComment && (
                            <button
                                className="text-[11px] leading-[15px] font-[600] font-[Raleway] text-[#FC3F1D]"
                                onClick={() => setShowFullComment(true)}
                            >
                                Весь отзыв
                            </button>
                        )}
                    </div>
                )}
            </div>

            {imgUrls?.length > 0 && (
                <div className="flex gap-[8px] overflow-x-auto -mr-[16px]"
                     style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {imgUrls?.map((url, i) => (
                        <Image
                            key={`img-${i}`}
                            src={url}
                            alt={`Фото ${i + 1}`}
                            width={72}
                            height={72}
                            className="w-[72px] h-[72px] rounded-[12px]"
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Testimonial;