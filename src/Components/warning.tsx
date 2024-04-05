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
                !!
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