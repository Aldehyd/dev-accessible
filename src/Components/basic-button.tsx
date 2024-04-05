import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface BasicButtonPropsInterface {
    frenchText: string,
    englishText: string,
    disableAbility?: boolean,
    disabledStatus?: string,
    tabIndex?: string,
    onWhiteBackground?: boolean,
    removeButton?: boolean,
    onClickFunction?: ()=> void
}

export default function BasicButton({frenchText,englishText,disableAbility=false,disabledStatus="false",tabIndex="0",onWhiteBackground=false,removeButton=false,onClickFunction}: BasicButtonPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    let basicButtonClassNames = `basic-button-container ${onWhiteBackground && "basic-button-container--on-white-background"} ${disabledStatus==="true" ? "disabled" : ""}`;

    return(
        <div className={basicButtonClassNames}>
            {
            disableAbility ? 
                <button className="basic-button" aria-disabled={disabledStatus}
                    onClick={onClickFunction} tabIndex={tabIndex}>
                    <span className="basic-button_text">{language === "french" ? frenchText : englishText}</span>
                    {
                        removeButton &&
                        <svg className="basic-button_remove-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 86.1 82.3">
                            <line class="st0" x1="15.6" y1="13" x2="72.1" y2="69.5"/>
                            <line class="st0" x1="72.1" y1="13" x2="15.6" y2="69.5"/>
                        </svg>
                    }   
                </button>
                :
                <button className="basic-button" onClick={onClickFunction} tabIndex={tabIndex}>
                    <span className="basic-button_text">{language === "french" ? frenchText : englishText}</span>
                    {
                        removeButton &&
                        <svg className="basic-button_remove-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 86.1 82.3">
                            <line class="st0" x1="15.6" y1="13" x2="72.1" y2="69.5"/>
                            <line class="st0" x1="72.1" y1="13" x2="15.6" y2="69.5"/>
                        </svg>
                    } 
                </button>
            }
            <div className="basic-button-shadow"></div>
        </div>
    )
}