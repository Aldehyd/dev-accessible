import { useContext, useState } from "react"
import LanguageContext from "../Contexts/language-context.tsx";

export default function AccessibilityAnalysisIndicator(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [status,setStatus] = useState<boolean>(true);

    const handleClick = ()=> {
        if(status) {
            setStatus(false);
        };
    };

    const classList = `accessibility-analysis-indicator ${status ? 'on' : 'off'}`;

    return(
        <div className={classList}>
            <button type="button" className="accessibility-analysis-toggle-button" 
                aria-disabled={status ? "false" : "true"} onClick={()=>handleClick()}>
                {
                    status ?
                        <span className="accessibility-analysis-toggle-button_on">
                            {language === "french" ? "Analyse accessibilité " : "Accessibility analysis "}
                            {language === "french" ? <span lang='en'>ON</span> : "ON"}
                        </span>
                    :
                        <span className="accessibility-analysis-toggle-button_off">
                            {language === "french" ? "Analyse accessibilité " : "Accessibility analysis "}
                            {language === "french" ? <span lang='en'>OFF</span> : "OFF"}
                        </span>
                }
            </button>
            <button type="button" aria-label={language === "french" ? "Aide" : "Help"} 
                className="accessibility-analysis-help-button">
                <span>?</span>
            </button>
        </div>
    )
}