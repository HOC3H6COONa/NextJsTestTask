'use client'
import CourtPreview from "@/app/CourtPreview";
import ContentMessage from "@/app/pages/ContentMessage";
import ContentList from "@/app/pages/ContentList";
import {useState} from "react";
import RateStar from "@/app/pages/RateStar";
import CustomersRating from "@/app/pages/CustomersRating";
import SummaryRatings from "@/app/pages/SummaryRatings";
import SetRatingButton from "@/app/pages/SetRatingButton";
import BannerTestimonialFeedback from "@/app/pages/BannerTestimonialFeedback";
import Testimonial from "@/app/pages/Testimonial";

export default function Home() {

    const [showList, setShowList] = useState(true)
    const [activeItem, setActiveItem] = useState("Популярные")
    const [rating, setRating]= useState(0)

    // console.log(activeItem)

    return (
        <div className="h-screen w-screen bg-gray-200 relative">
            {/*{!showList  && <button className={"w-full bg-blue-200"} onClick={()=>setShowList(true)}>ContentList</button>}*/}
            {/*<CourtPreview*/}
            {/*    name={"Теннисный клуб «Усадьба Тайны Рублёва»"}*/}
            {/*    rating={4.9}*/}
            {/*    votes={51}*/}
            {/*    price={2200}*/}
            {/*    address={"г. Одинцово, дер. Маслово, д. 62"}*/}
            {/*    timeSlots={9}*/}
            {/*/>*/}
            <ContentMessage
                icon={<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 2L14 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M14 2L2 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                }
                title={"Title"} subtitle={"Text"}
                onClick={()=> console.log("ContentMessage click")}
                buttonLabel={"Button"}
            />
            {/*{showList &&*/}
            {/*    <ContentList*/}
            {/*        itemsList={["Популярные", "Ближе", "Дальше", "Дешевле", "Дороже", "С высокими оценками", "С низкими оценками"]}*/}
            {/*        activeItem={activeItem}*/}
            {/*        setActiveItem={setActiveItem}*/}
            {/*        setShowComponent={setShowList}*/}
            {/*    />*/}
            {/*}*/}
            {/*<RateStar isActive/>*/}
            {/*<CustomersRating isLarge={true} rating={4.49} />*/}
            {/*<SummaryRatings isFull={true} rating={3.4}/>*/}
            {/*<SummaryRatings isFull={false} rating={4.9}/>*/}
            {/*<SetRatingButton rating={rating} setRating={setRating}/>*/}
            {/*<BannerTestimonialFeedback placeName={"Теннисный клуб <<Усадьба Тайны Рублева>>"} ImgUrl={"/image.webp"} rating={rating} setRating={setRating}/>*/}
            {/*<Testimonial*/}
            {/*    name={"Александра Александровна Александровская"}*/}
            {/*    profileImgUrl={"/image.webp"}*/}
            {/*    rating={4}*/}
            {/*    mapUrl={"mapUrl"}*/}
            {/*    commentDate={new Date('2025-03-14')}*/}
            {/*    pros={["Територия отдыха, кондиционирование помещения"]}*/}
            {/*    cons={["Не обнаружены"]}*/}
            {/*    comment={"Сергей Юрьевич - незаурядный тренер, работа с которым увлечет Вас," +*/}
            {/*        " нарастит технические и тактические навыки, улучшит ментальность и откроет множество теннисных секретов." +*/}
            {/*        " Тренировки нескучные, при этом, все элементы терпеливо и тщательно отрабатываются, доводятся до совершенства." +*/}
            {/*        " Купцов развивает Ваши игровые навыки на основе ваших же индивидуальных преимуществ, использует различные приспособления и подводящие упражнения для освоения технических приемов." +*/}
            {/*        " Родителям маленьких теннисистов особенно рекомендую Купцова, как прекрасного современного детского тренера."}*/}
            {/*    imgUrls={["/image.webp", "/image.webp", "/image.webp", "/image.webp", "/image.webp"]}*/}
            {/*/>*/}
        </div>
    );
}
