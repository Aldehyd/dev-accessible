import { useContext, useState, useEffect } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CarouselPicture from "../Components/carousel-picture.tsx";
import CarouselButton from "../Components/carousel-button.tsx";
interface CarouselPropsInterface {
    pictures: {id: number, element: any, frenchAlt: string, englishAlt: string}[]
}

export default function Carousel({pictures}: CarouselPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [picturesToShow,setPicturesToShow] = useState<{previous: number, current: number, next: number, amount: number}>({previous: -1, current: 0, next: 1, amount: pictures.length});
    const [currentPictureMovement,setCurrentPictureMovement] = useState<string>("");

    useEffect(()=> console.log(picturesToShow),[picturesToShow])

    return(
        <div className="carousel">
            <CarouselButton roleButton="previous" picturesToShow={picturesToShow} setPicturesToShow={setPicturesToShow} disabledStatus={picturesToShow.previous < 0 ? "true" : "false"} setCurrentPictureMovement={setCurrentPictureMovement} />
            <CarouselButton roleButton="next" picturesToShow={picturesToShow} setPicturesToShow={setPicturesToShow} disabledStatus={picturesToShow.next === picturesToShow.amount-1 ? "true" : "false"} setCurrentPictureMovement={setCurrentPictureMovement} />
            <div className="carousel_pictures-container">
                {
                    pictures.map(picture => {return (
                        <CarouselPicture key={picture.id} language={language} picture={picture} picturesToShow={picturesToShow} currentPictureMovement={currentPictureMovement} />
                    )})
                }
            </div>
        </div>
    )
}