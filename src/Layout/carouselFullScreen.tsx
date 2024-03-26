import { useContext, useState, useEffect, useRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CarouselContext from "../Contexts/caroussel-context.tsx";
import CarouselPicture from "../Components/carousel-picture.tsx";
import CarouselButton from "../Components/carousel-button.tsx";
import FullScreenModal from "./fullScreenModal.tsx";


export default function CarouselFullScreen(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const {pictures,currentPicture,setPictures,setCurrentPicture} = useContext(CarouselContext);

    const [picturesToShow,setPicturesToShow] = useState<{current: number, amount: number}>({current: currentPicture, amount: pictures.length});
    const [pictureMovement,setPictureMovement] = useState<string>("");

    const classList = `carousel_pictures-container carousel-full-screen_pictures-container ${pictureMovement}`;
    const picturesContainer = useRef(null);

    useEffect(()=> {
        picturesContainer.current?.classList.add("transition");
        setTimeout(()=> picturesContainer.current?.classList.remove("transition"),600);
    },[picturesToShow]);

    return(
        <FullScreenModal>
            <div className="carousel-full-screen" role="group" aria-roledescription="carousel" aria-labelledby="achievment-details-carousel-label">
                <CarouselButton roleButton="previous" picturesToShow={picturesToShow} setPicturesToShow={setPicturesToShow} disabledStatus={picturesToShow.current === 0 ? "true" : "false"} setCurrentPictureMovement={setPictureMovement} />
                <div className={classList} ref={picturesContainer} aria-atomic="false" aria-live="polite">
                    {
                        pictures.map(picture => {return (
                            <CarouselPicture key={picture.id} language={language} picture={picture} picturesToShow={picturesToShow} pictureMovement={pictureMovement} />
                        )})
                    }
                </div>
                <CarouselButton roleButton="next" picturesToShow={picturesToShow} setPicturesToShow={setPicturesToShow} disabledStatus={picturesToShow.current === picturesToShow.amount-1 ? "true" : "false"} setCurrentPictureMovement={setPictureMovement} />
            </div>
        </FullScreenModal>
    )
}