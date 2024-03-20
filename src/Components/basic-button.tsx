import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface BasicButtonPropsInterface {
    frenchText: string,
    englishText: string,
    disableAbility?: boolean,
    disabledStatus?: string,
    tabIndex?: string,
    onWhiteBackground?: boolean,
    onClickFunction?: ()=> void
}

export default function BasicButton({frenchText,englishText,disableAbility=false,disabledStatus="false",tabIndex="0",onWhiteBackground=false,onClickFunction}: BasicButtonPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    let basicButtonClassNames = `basic-button-container ${onWhiteBackground && "basic-button-container--on-white-background"} ${disabledStatus==="true" ? "disabled" : ""}`;

    return(
        <div className={basicButtonClassNames}>
            {
            disableAbility ? 
                <button className="basic-button" aria-disabled={disabledStatus}
                    onClick={onClickFunction} tabIndex={tabIndex}>
                    <span className="basic-button_text">{language === "french" ? frenchText : englishText}</span>
                </button>
                :
                <button className="basic-button" onClick={onClickFunction} tabIndex={tabIndex}>
                    <span className="basic-button_text">{language === "french" ? frenchText : englishText}</span>
                </button>
            }
            <div className="basic-button-shadow"></div>
        </div>
    )
}