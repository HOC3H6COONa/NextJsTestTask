'use client'
import CourtPreview from "@/app/CourtPreview";
import ContentMessage from "@/app/pages/ContentMessage";
import ContentList from "@/app/pages/ContentList";
import sportsData from "../../public/sports.json";
import {useState} from "react";
import RateStar from "@/app/pages/RateStar";
import CustomersRating from "@/app/pages/CustomersRating";
import SummaryRatings from "@/app/pages/SummaryRatings";
import SetRatingButton from "@/app/pages/SetRatingButton";
import BannerTestimonialFeedback from "@/app/pages/BannerTestimonialFeedback";
import Testimonial from "@/app/pages/Testimonial";
import Image from "next/image";

export interface Sport {
    sportName: string;
    imgUrl: string;
}


export default function Home() {

    const [showList, setShowList] = useState(true)
    const [activeItem, setActiveItem] = useState("Популярные")

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

            {!showList  && <button className={"w-full bg-blue-200"} onClick={()=>setShowList(true)}>ContentList</button>}
            {showList &&
                <ContentList
                    itemsList={itemList}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                    setShowComponent={setShowList}
                />
            }
        </div>
    );
}
