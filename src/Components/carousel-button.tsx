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
                    {roleButton === "next" ? "next" : "previous"}
                </span>
            </button>
            <div className="basic-button-shadow"></div>
        </div>
    )
}