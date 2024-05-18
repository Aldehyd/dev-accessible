import { useContext, useState } from "react"
import LanguageContext from "../Contexts/language-context.tsx";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";

interface AccessibilityAnalysisIndicatorPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function AccessibilityAnalysisIndicator({setDisplay}: AccessibilityAnalysisIndicatorPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const {accessibilityAnalysis,changeAccessibilityAnalysis} = useContext(AccessibilityAnalysisContext);

    const handleClick = ()=> {
        if(accessibilityAnalysis) {
            changeAccessibilityAnalysis(false);
        };
    };

    const classList = `accessibility-analysis-indicator ${accessibilityAnalysis ? 'on' : 'off'}`;

    return(
        <div className={classList}>
            <button type="button" className="accessibility-analysis-toggle-button" 
                aria-disabled={accessibilityAnalysis ? "false" : "true"} onClick={()=>handleClick()}>
                {
                    accessibilityAnalysis ?
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
                className="accessibility-analysis-help-button" onClick={()=> setDisplay(true)}>
                <span>?</span>
            </button>
        </div>
    )
}