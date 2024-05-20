import { useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import EnvironnementContext from "../Contexts/environnement-context.tsx";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";
import AccessibotCommentContext from "../Contexts/accessibot-comment-context.tsx";
import AccessibilityAnalysisWarningContext from "../Contexts/accessibility-analysis-warning-context.tsx";

interface EnvironnementToggleButtonPropsInterface {
    setDisplay: (display: boolean)=> void,
    comment?: {
        hover: boolean,
        compliant: boolean,
        frenchContent: string,
        englishContent: string
    }
}

export default function EnvironnementToggleButton({setDisplay,comment={hover: true,compliant: true,frenchContent: "Le bouton à bascule change de nom accessible en changeant d'état",englishContent: "The accessible name of the toggle button changes on state change"}}:EnvironnementToggleButtonPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const {environnement} = useContext(EnvironnementContext);
    const {accessibilityAnalysis} = useContext(AccessibilityAnalysisContext);
    const {changeAccessibotComment} = useContext(AccessibotCommentContext);
    const {changeAccessibilityAnalysisWarning} = useContext(AccessibilityAnalysisWarningContext);

    const [compliantClass,setCompliantClass] = useState<string>("");

    const onAccessibilityAnalysisOver = ()=> {
        if(accessibilityAnalysis) {
            changeAccessibotComment(comment);
            comment.compliant ? setCompliantClass("compliant") : setCompliantClass("not-compliant");
        };
    };

    const onAccessibilityAnalysisLeave = ()=> {
        if(accessibilityAnalysis) {
            changeAccessibotComment({...comment, hover: false});
            setCompliantClass("");
        };
    };

    useEffect(()=> {
        if(!accessibilityAnalysis) {
            changeAccessibotComment({...comment, hover: false});
            setCompliantClass("");
        };
    },[accessibilityAnalysis]);

    const onClickFunction = ()=> {
        if(!accessibilityAnalysis) {
            setDisplay(true);
        } else {
            changeAccessibilityAnalysisWarning(true);
        };
    };

    const classNames = `environnement-toggle-button ${environnement === "recruiter" ? "recruiter" : "client"} ${compliantClass}`;

    return(
        <button className={classNames} onClick={()=> onClickFunction()}
            onMouseOver={()=> onAccessibilityAnalysisOver()} onMouseLeave={()=> onAccessibilityAnalysisLeave()}>
            <span aria-hidden="true" className="environnement-toggle-button_invisible-text">Recruiter</span>
            <span className="environnement-toggle-button_overflow-container">
                <span aria-hidden="true" className="environnement-toggle-button_invisible-text">Recruiter</span>
                <span className="environnement-toggle-button_text-container">
                    <span className="environnement-toggle-button_recruiter" aria-hidden={environnement === "client" ? "true" : "false"}>
                        {
                            language === "french" ? "Recruteur" : "Recruiter"
                        }
                    </span>
                    <span className="environnement-toggle-button_client" aria-hidden={environnement === "recruiter" ? "true" : "false"}>
                        Client
                    </span>
                </span>
            </span>
        </button>

    )
}