import { useContext, useState, useEffect } from "react"
import LanguageContext from "../Contexts/language-context.tsx";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";

interface AccessibilityAnalysisIndicatorPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function AccessibilityAnalysisIndicator({setDisplay}: AccessibilityAnalysisIndicatorPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const {accessibilityAnalysis,changeAccessibilityAnalysis} = useContext(AccessibilityAnalysisContext);

    const [displayTip,setDisplayTip] = useState<boolean>(false);

    const handleClick = ()=> {
        if(accessibilityAnalysis) {
            changeAccessibilityAnalysis(false);
        };
    };

    const handleMouseOver = ()=> {
        if(accessibilityAnalysis) {
            setDisplayTip(true);
        };
    };

    const handleMouseLeave = ()=> {
        if(accessibilityAnalysis) {
            setDisplayTip(false);
        };
    };

    const classList = `accessibility-analysis-indicator ${accessibilityAnalysis ? 'on' : 'off'}`;

    useEffect(()=> {
        if(!accessibilityAnalysis) {
            setDisplayTip(false);
        }
    },[accessibilityAnalysis]);

    return(
        <div className={classList}>
            <button type="button" className="accessibility-analysis-toggle-button" 
                aria-disabled={accessibilityAnalysis ? "false" : "true"} onClick={()=>handleClick()}
                onMouseOver={()=> handleMouseOver()} onMouseLeave={()=> handleMouseLeave()}>
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
                {
                    displayTip && 
                        <p className="accessibility-analysis-toggle-button_tip">
                            {
                                language === "french" ? 
                                    "Cliquez pour sortir du mode analyse de l'accessibilité"
                                    :
                                    "Click to leave accessibility analysis mode"
                            }
                        </p>
                }
            </button>
            <button type="button" aria-label={language === "french" ? "Aide" : "Help"} 
                className="accessibility-analysis-help-button" onClick={()=> setDisplay(true)}>
                <span>?</span>
            </button>
        </div>
    )
}