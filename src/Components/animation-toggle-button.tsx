import { useEffect, useState, useContext } from "react";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";
import AccessibotCommentContext from "../Contexts/accessibot-comment-context.tsx";
import AccessibilityAnalysisWarningContext from "../Contexts/accessibility-analysis-warning-context.tsx";

interface AnimationToggleButtonPropsInterface {
    comment?: {
        hover: boolean,
        compliant: boolean,
        frenchContent: string,
        englishContent: string
    }
}

export default function AnimationToggleButton({comment={hover: true,compliant: true,frenchContent: "Le bouton à bascule change de nom accessible en changeant d'état",englishContent: "The accessible name of the toggle button changes on state change"}}:AnimationToggleButtonPropsInterface): React.JSX.Element {

    const {accessibilityAnalysis} = useContext(AccessibilityAnalysisContext);
    const {changeAccessibotComment} = useContext(AccessibotCommentContext);
    const {changeAccessibilityAnalysisWarning} = useContext(AccessibilityAnalysisWarningContext);

    const [animationsStatus,setAnimationsStatus] = useState<boolean>(true);

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

    useEffect(()=> {
        const animationsSavedStatus = localStorage.getItem('animations');

        if(animationsSavedStatus !== undefined && animationsSavedStatus !== null) {
            setAnimationsStatus(JSON.parse(animationsSavedStatus));
        } else if(globalThis.matchMedia("(prefers-reduced-motion:reduce)").matches) {
            setAnimationsStatus(false);
        } else {
            setAnimationsStatus(true);
        };
    },[]);

    useEffect(()=> {
        if(!accessibilityAnalysis) {
            if(animationsStatus) {
                document.body.classList.add('animations');
            } else {
                document.body.classList.remove('animations');
            };
            localStorage.setItem('animations',animationsStatus.toString());
        } else {
            changeAccessibilityAnalysisWarning(true);
        };
    },[animationsStatus]);

    const classNames = `animations-toggle-button ${animationsStatus ? 'on' : 'off'} ${compliantClass}`;

    return(
        <button className={classNames} onClick={()=> setAnimationsStatus(animationsStatus => !animationsStatus)}
            onMouseOver={()=> onAccessibilityAnalysisOver()} onMouseLeave={()=> onAccessibilityAnalysisLeave()}>
            <span aria-hidden="true" className="animations-toggle-button_invisible-text">Animations OFF</span>
            <span className="animations-toggle-button_overflow-container">
                <span aria-hidden="true" className="animations-toggle-button_invisible-text">Animations OFF</span>
                <span className="animations-toggle-button_text-container">
                    <span className="animations-toggle-button_on" aria-hidden={(!animationsStatus).toString()}>Animations <span lang="en">ON</span></span>
                    <span className="animations-toggle-button_off" aria-hidden={animationsStatus.toString()}>Animations <span lang="en">OFF</span></span>
                </span>
            </span>
        </button>

    )
}