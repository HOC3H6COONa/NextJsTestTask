import CourtPreview from "@/app/CourtPreview";

export default function Home() {
    return (
        <div>
            <CourtPreview
                name={"Теннисный клуб «Усадьба Тайны Рублёва»"}
                rating={4.9}
                votes={51}
                price={2200}
                address={"г. Одинцово, дер. Маслово, д. 62"}
                timeSlots={9}
            />
        </div>
    );
}
