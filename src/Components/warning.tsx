import { useContext, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface WarningPropsInterface {
    frenchText: string,
    englishText: string
}

export default function Warning({frenchText,englishText}: WarningPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [messageDisplayed,setMessageDisplayed] = useState<boolean>(false);

    const handleKeyDown = (e)=> {
        switch(e.key) {
            case "Escape":
                setMessageDisplayed(false);
                break;
            default:
                break;
        };
    };

    return (
        <div className="warning" >
            <span onMouseOver={()=> setMessageDisplayed(true)} 
            onFocus={()=> setMessageDisplayed(true)} onMouseLeave={()=> setMessageDisplayed(false)}
            onBlur={()=> setMessageDisplayed(false)} onKeyDown={(e)=> handleKeyDown(e)}
            tabIndex={0} aria-describedby="filter-alert">
                <svg className="warning-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 137.47 120.39">
                    <polygon class="cls-2" points="68.73 5 5 115.39 132.47 115.39 68.73 5"/>
                    <line class="cls-3" x1="68.73" y1="43.41" x2="68.73" y2="76.98"/>
                    <circle class="cls-1" cx="68.73" cy="93.84" r="6.12"/>
                </svg>
            </span>
            {
                messageDisplayed &&
                <p className="warning_message" role="tooltip" id="filter-alert"
                    onMouseOver={()=> setMessageDisplayed(true)}
                    onMouseLeave={()=> setMessageDisplayed(false)} >
                    {language === "french" ? frenchText : englishText}
                </p>
            }
        </div>
    )
}