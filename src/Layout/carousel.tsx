import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CarouselPicture from "../Components/carousel-picture.tsx";

interface CarouselPropsInterface {
    pictures: {id: number, element: any, frenchAlt: string, englishAlt: string}[]
}

export default function Carousel({pictures}: CarouselPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <div className="carousel">
            <div className="basic-button-container carousel_button carousel_button--previous">
                <div className="basic-button_shadow"></div>
                <button className="basic-button ">previous</button>
            </div>
            <div className="basic-button-container carousel_button carousel_button--next">
                <div className="basic-button_shadow"></div>
                <button className="basic-button">next</button>
            </div>
            <div className="carousel_pictures-container">
                {
                    pictures.map(picture => {return (
                        <CarouselPicture key={picture.id} language={language} picture={picture} />
                    )})
                }
            </div>
        </div>
    )
}