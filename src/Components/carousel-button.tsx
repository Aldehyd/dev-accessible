import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface BasicButtonPropsInterface {
    disabledStatus?: string,
    roleButton: string,
    picturesToShow: {current: number, amount: number},
    setPicturesToShow: (state : {current: number, amount: number})=> void,
    setCurrentPictureMovement: (state: string)=>void
}

export default function CarouselButton({disabledStatus="false",roleButton,picturesToShow,setPicturesToShow,setCurrentPictureMovement}: BasicButtonPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    let containerClassList = `basic-button-container carousel_button ${disabledStatus==="true" ? "disabled" : ""} ${roleButton === "next" ? "carousel_button--next" : "carousel_button--previous"}`;

    const onClickFunction = (picturesToShow)=> {
        if(disabledStatus === "false") {
            setCurrentPictureMovement("");
            
            let newPicturesToShow = picturesToShow;
            
            if(roleButton === "next") {
                newPicturesToShow.current = newPicturesToShow.current + 1;
                setCurrentPictureMovement("next");
            } else {
                newPicturesToShow.current = newPicturesToShow.current - 1;
                setCurrentPictureMovement("previous");
            };
            setPicturesToShow({current: newPicturesToShow.current, amount: newPicturesToShow.amount});
        };
    };

    return(
        <div className={containerClassList}>
            <button className="basic-button" aria-disabled={disabledStatus} onClick={()=> onClickFunction(picturesToShow)}
                aria-label={roleButton === "next" ? (language === "french" ? "Image suivante" : "Next picture") : (language === "french" ? "Image précédente" : "Previous picture")}>
                <span className="basic-button_text">
                    {
                        <svg className="carousel_button_svg" carousel-button-svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 96.3 104.1">
                            <line class="st0" x1="-73.2" y1="-187.9" x2="-16.8" y2="-131.4"/>
                            <line class="st0" x1="-16.8" y1="-187.9" x2="-73.2" y2="-131.4"/>
                            <line class="st0" x1="197.4" y1="-76.4" x2="160.4" y2="-39.3"/>
                            <line class="st0" x1="198.1" y1="-75.7" x2="235.2" y2="-38.6"/>
                            <path d="M83,42.8L29.6,12C20.4,6.7,8.9,13.3,8.9,24v61.6c0,10.7,11.5,17.3,20.8,12L83,66.8C92.2,61.5,92.2,48.1,83,42.8z"/>
                        </svg>
                    }
                </span>
            </button>
            <div className="basic-button-shadow"></div>
        </div>
    )
}