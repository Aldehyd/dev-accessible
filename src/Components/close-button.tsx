import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface CloseButtonPropsInterface {
    onWhiteBackground?: boolean,
    onClickFunction?: ()=> void
}

export default function CloseButton({onWhiteBackground=false,onClickFunction}: CloseButtonPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    let closeButtonClassNames = `basic-button-container basic-button-container--close-button ${onWhiteBackground && "basic-button-container--on-white-background"}`;

    return(
        <div className={closeButtonClassNames}>

                <button className="basic-button basic-button--close" onClick={onClickFunction} 
                    aria-label={language === "french" ? "Fermer" : "Close"}>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 86.1 82.3">
                        <line className="st0" x1="15.6" y1="13" x2="72.1" y2="69.5"/>
                        <line className="st0" x1="72.1" y1="13" x2="15.6" y2="69.5"/>
                    </svg>
                </button>
 
            <div className="basic-button-shadow"></div>
        </div>
    )
}