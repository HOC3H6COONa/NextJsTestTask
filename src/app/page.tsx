'use client'
import CourtPreview from "@/app/CourtPreview";
import ContentMessage from "@/app/pages/ContentMessage";
import ContentList from "@/app/pages/ContentList";
import sportsData from "../../public/sports.json";
import {useEffect, useState} from "react";
import RateStar from "@/app/pages/RateStar";
import CustomersRating from "@/app/pages/CustomersRating";
import SummaryRatings from "@/app/pages/SummaryRatings";
import SetRatingButton from "@/app/pages/SetRatingButton";
import BannerTestimonialFeedback from "@/app/pages/BannerTestimonialFeedback";
import Testimonial from "@/app/pages/Testimonial";
import Image from "next/image";
import InputMaster from "@/app/pages/inputMaster";

export interface Sport {
    sportName: string;
    imgUrl: string;
}


export default function Home() {

    const [showList, setShowList] = useState(true)
    const [activeItem, setActiveItem] = useState("Популярные")
    const [inputValue, setInputValue] = useState("")

    useEffect(()=>{
        console.log(inputValue)
    },[inputValue])

    const sports: Sport[] = sportsData

    const itemList = sports.map((sport)=>{

        return(
            {
                label: sport.sportName,
                item: <Image height={24} width={24} src={sport.imgUrl} alt={sport.sportName}/>
            }
        )

    })

    return (
        <div className="h-screen w-screen bg-gray-200 relative">

            {/*{!showList  && <button className={"w-full bg-blue-200"} onClick={()=>setShowList(true)}>ContentList</button>}*/}
            {/*{showList &&*/}
            {/*    <ContentList*/}
            {/*        itemsList={itemList}*/}
            {/*        activeItem={activeItem}*/}
            {/*        setActiveItem={setActiveItem}*/}
            {/*        setShowComponent={setShowList}*/}
            {/*    />*/}
            {/*}*/}
            <InputMaster
                caption={"Caption"}
                label={"Label"}
                leftLogo={<RateStar width={24} height={24}/>}
                rightLogo={<RateStar width={24} height={24}/>}
                id={"id"}
                name={"name"}
                prefix={"Prefix"}
                placeholder={"Placeholder"}
                tooltip={"Tooltip"}
                disabled
            />
            <InputMaster
                caption={"Caption"}
                label={"Label"}
                leftLogo={<RateStar width={24} height={24}/>}
                rightLogo={<RateStar width={24} height={24}/>}
                id={"id"}
                name={"name"}
                prefix={"Prefix"}
                placeholder={"Placeholder"}
                tooltip={"Tooltip"}
                value={inputValue}
                setValue={setInputValue}
            />
            <InputMaster
                caption={"Caption"}
                label={"Label"}
                leftLogo={<RateStar width={24} height={24}/>}
                rightLogo={<RateStar width={24} height={24}/>}
                id={"id"}
                name={"name"}
                prefix={"Prefix"}
                placeholder={"Placeholder"}
                tooltip={"Tooltip"}
                error={"Ошибка в заполнении формы"}
            />
            <InputMaster
                rightLogo={<RateStar width={24} height={24}/>}
                id={"id"}
                name={"name"}
                prefix={"Prefix"}
                placeholder={"Placeholder"}
            />
            <InputMaster
                leftLogo={<RateStar width={24} height={24}/>}
                id={"id"}
                name={"name"}
                prefix={"Prefix"}
                placeholder={"Placeholder"}
            />
            <InputMaster
                leftLogo={<RateStar width={24} height={24}/>}
                rightLogo={<RateStar width={24} height={24}/>}
                id={"id"}
                name={"name"}
            />
        </div>
    );
}
