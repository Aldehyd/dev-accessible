import { useContext, useState, useEffect } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CarouselPicture from "../Components/carousel-picture.tsx";
import CarouselButton from "../Components/carousel-button.tsx";
interface CarouselPropsInterface {
    pictures: {id: number, element: any, frenchAlt: string, englishAlt: string}[]
}

export default function Carousel({pictures}: CarouselPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [picturesToShow,setPicturesToShow] = useState<{current: number, amount: number}>({current: 0, amount: pictures.length});
    const [pictureMovement,setPictureMovement] = useState<string>("");

    useEffect(()=> console.log(picturesToShow),[picturesToShow])

    return(
        <div className="carousel">
            <CarouselButton roleButton="previous" picturesToShow={picturesToShow} setPicturesToShow={setPicturesToShow} disabledStatus={picturesToShow.current === 0 ? "true" : "false"} setCurrentPictureMovement={setPictureMovement} />
            <CarouselButton roleButton="next" picturesToShow={picturesToShow} setPicturesToShow={setPicturesToShow} disabledStatus={picturesToShow.current === picturesToShow.amount-1 ? "true" : "false"} setCurrentPictureMovement={setPictureMovement} />
            <div className="carousel_pictures-container">
                {
                    pictures.map(picture => {return (
                        <CarouselPicture key={picture.id} language={language} picture={picture} picturesToShow={picturesToShow} pictureMovement={pictureMovement} />
                    )})
                }
            </div>
        </div>
    )
}