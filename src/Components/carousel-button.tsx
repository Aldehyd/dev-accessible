import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface BasicButtonPropsInterface {
    disabledStatus?: string,
    roleButton: string,
    picturesToShow: {previous: boolean | number, current: number, next: boolean | number, amount: number},
    setPicturesToShow: (state : {previous: boolean | number, current: number, next: boolean | number, amount: number})=> void,
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
                if(typeof newPicturesToShow.previous === "boolean") {
                    newPicturesToShow.previous = 0;
                } else {
                    newPicturesToShow.previous = newPicturesToShow.previous + 1;
                };
                newPicturesToShow.current = newPicturesToShow.current + 1;
                if(typeof newPicturesToShow.next !== "boolean")
                    newPicturesToShow.next = newPicturesToShow.next + 1;

                setCurrentPictureMovement("next");
            } else {
                if(typeof newPicturesToShow.next === "boolean") {
                    newPicturesToShow.next = newPicturesToShow.amount - 1;
                } else {
                    newPicturesToShow.next = newPicturesToShow.next - 1;
                };
                newPicturesToShow.current = newPicturesToShow.current - 1;
                if(typeof newPicturesToShow.previous !== "boolean")
                    newPicturesToShow.previous = newPicturesToShow.previous - 1;

                setCurrentPictureMovement("previous");
            };
            setPicturesToShow({previous: newPicturesToShow.previous, current: newPicturesToShow.current, next: newPicturesToShow.next, amount: newPicturesToShow.amount});
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