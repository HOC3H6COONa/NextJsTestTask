import React, {Dispatch, useEffect, useRef, useState} from 'react';

export interface InputProps {
    label?: string;
    leftLogo?: React.ReactNode;
    rightLogo?: React.ReactNode;
    placeholder?: string;
    caption?: string;
    error?: string;
    setError?: Dispatch<string | undefined>;
    disabled?: boolean;
    value?: string;
    setValue?: Dispatch<string>;
    prefix?: string;
    id?: string;
    name?: string;
    tooltip?: string;
}


const InputMaster: React.FC<InputProps> = ({
                                               label,
                                               leftLogo,
                                               rightLogo,
                                               placeholder,
                                               caption,
                                               error,
                                               setError,
                                               disabled,
                                               value,
                                               setValue,
                                               prefix,
                                               id,
                                               name,
                                               tooltip,
                                           }) => {

    const [tooltipOpen, setTooltipOpen] = useState(false);


    return (
        <div className="flex flex-col gap-[6px] w-full" id={id} name={name}>
            {label && (
                <div className="flex items-center gap-1 relative">
                    <p className="text-[13px] leading-[18px] font-[500] font-[Raleway] text-[#717680]">{label}</p>
                    {tooltip && (
                        <div
                            className="relative cursor-pointer"
                            onClick={() => setTooltipOpen(!tooltipOpen)}
                            onBlur={() => setTooltipOpen(false)}
                            tabIndex={0}
                        >
                            <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.94346 5.99999C6.1002 5.55444 6.40956 5.17873 6.81677 4.93942C7.22397 4.7001 7.70273 4.61262 8.16825 4.69247C8.63377 4.77232 9.05601 5.01434 9.36018 5.37568C9.66436 5.73702 9.83083 6.19434 9.83013 6.66666C9.83013 7.99999 7.83013 8.66666 7.83013 8.66666M7.88346 11.3333H7.89013M14.5501 7.99999C14.5501 11.6819 11.5654 14.6667 7.88346 14.6667C4.20156 14.6667 1.2168 11.6819 1.2168 7.99999C1.2168 4.3181 4.20156 1.33333 7.88346 1.33333C11.5654 1.33333 14.5501 4.3181 14.5501 7.99999Z"
                                    stroke="#A4A7AE"
                                    strokeWidth="1.24444"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>

                            {tooltipOpen && (
                                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-2 py-1 rounded-md bg-black text-white text-[12px] z-50 whitespace-nowrap">
                                    {tooltip}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
            <div
                className={`relative w-full h-[44px] rounded-[12px] flex items-center gap-[8px] px-[14px]
                     ${disabled ? 'bg-[#EFEFEF]' : 'bg-[#F8F8F8]'}
                     ${error ? 'border border-[#F04438]' : 'border border-transparent'}
                     ${!disabled && 'focus-within:border-[#717680] border'}
                `}
            >

                {leftLogo && <div className="pointer-events-none">{leftLogo}</div>}


                {prefix && (
                    <span className="text-[#717680] text-[15px] leading-[22px] font-[500] font-[Raleway] ">{prefix}</span>
                )}


                <input
                    type="text"
                    disabled={disabled}
                    value={value}
                    placeholder={placeholder}
                    onChange={(e) => {
                        setValue?.(e.target.value);
                        setError?.(undefined);
                    }}
                    className="flex-1 bg-transparent outline-none border-none text-[15px] leading-[22px] font-[500] font-[Raleway] text-[#1B1822] placeholder:text-[#1B1822] disabled:text-[#717680] disabled:placeholder:text-[#717680]"
                />

                {rightLogo && <div className="pointer-events-none">{rightLogo}</div>}
            </div>

            {error ? (
                <p className="text-[11px] leading-[15px] font-[500] font-[Raleway] text-[#F04438]">{error}</p>
            ) : (
                <p className="text-[11px] leading-[15px] font-[500] font-[Raleway] text-[#A4A7AE]">{caption}</p>
            )}
        </div>
    );
};

export default InputMaster;
