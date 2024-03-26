import { useContext, useState, useEffect, useRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CarouselContext from "../Contexts/caroussel-context.tsx";
import CarouselPicture from "../Components/carousel-picture.tsx";
import CarouselButton from "../Components/carousel-button.tsx";
interface CarouselPropsInterface {
    pictures: {id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[],
    setCurrentPicture: (picture: number)=>void,
    labelId: string
}

export default function Carousel({pictures,setCurrentPicture}: CarouselPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const {changeDisplayCarousel,changePicturesFullScreen,changeCurrentPictureFullScreen} = useContext(CarouselContext);

    const [picturesToShow,setPicturesToShow] = useState<{current: number, amount: number}>({current: 0, amount: pictures.length});
    const [pictureMovement,setPictureMovement] = useState<string>("");

    const classList = `carousel_pictures-container ${pictureMovement}`;
    const picturesContainer = useRef(null);

    useEffect(()=> {
        picturesContainer.current?.classList.add("transition");
        setTimeout(()=> picturesContainer.current?.classList.remove("transition"),600);
    },[picturesToShow]);

    const handleClickOnPicture = ()=> {
        changeDisplayCarousel(true);
        changePicturesFullScreen(pictures);
        changeCurrentPictureFullScreen(picturesToShow.current);
    };

    return(
        <div className="carousel" role="group" aria-roledescription="carousel" aria-labelledby="achievment-details-carousel-label">
            <CarouselButton roleButton="previous" picturesToShow={picturesToShow} setPicturesToShow={setPicturesToShow} disabledStatus={picturesToShow.current === 0 ? "true" : "false"} setCurrentPictureMovement={setPictureMovement} />
            <div className={classList} ref={picturesContainer} aria-atomic="false" aria-live="polite" onClick={()=> setCurrentPicture(picturesToShow.current)}>
                {
                    pictures.map(picture => {return (
                        <CarouselPicture key={picture.id} language={language} picture={picture} 
                            picturesToShow={picturesToShow} pictureMovement={pictureMovement}
                            onClickFunction={()=> handleClickOnPicture()} />
                    )})
                }
            </div>
            <CarouselButton roleButton="next" picturesToShow={picturesToShow} setPicturesToShow={setPicturesToShow} disabledStatus={picturesToShow.current === picturesToShow.amount-1 ? "true" : "false"} setCurrentPictureMovement={setPictureMovement} />
        </div>
    )
}