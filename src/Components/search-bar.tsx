import { useContext, useRef, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import LanguageContext from "../Contexts/language-context.tsx";
import EnvironnementContext from "../Contexts/environnement-context.tsx";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";
import AccessibotCommentContext from "../Contexts/accessibot-comment-context.tsx";
import AccessibilityAnalysisWarningContext from "../Contexts/accessibility-analysis-warning-context.tsx";
interface SearchBarPropsInterface {
    comment?: {
        hover: boolean,
        compliant: boolean,
        frenchContent: string,
        englishContent: string
    }
}

export default function SearchBar({comment={hover: true,compliant: true,frenchContent: "Le bouton possède un nom accessible via l'attribut 'aria-label'",englishContent: "The button has an accessible name thanks to the 'aria-label' attribute"}}:SearchBarPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const {environnement} = useContext(EnvironnementContext);
    const {accessibilityAnalysis} = useContext(AccessibilityAnalysisContext);
    const {changeAccessibotComment} = useContext(AccessibotCommentContext);
    const {changeAccessibilityAnalysisWarning} = useContext(AccessibilityAnalysisWarningContext);

    const navigate = useNavigate();

    const input = useRef(null);

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

    const handleKeyDown = (e: KeyboardEvent)=> {
        switch(e.key) {
            case 'Enter': 
                launchSearch();
                break;
            default:
                break;
        };
    };

    const launchSearch = ()=> {
        if(input.current?.value.length > 0 && !accessibilityAnalysis) {
            navigate('/search-results',{state: {language: language, environnement: environnement, query: input.current?.value}})
        } else {
            changeAccessibilityAnalysisWarning(true);
        };
    };

    const classList = `search-button ${compliantClass}`;

    return(
        <div className="search-bar-container">
            <span className="input-container">
                <input type="text" placeholder={language === "french" ? "Rechercher..." : "Search..."}
                 maxLength={26} onKeyDown={(e)=> handleKeyDown(e)} ref={input} />
            </span>
            <button type="button" className={classList}
                aria-label={language === "french" ? "Rechercher" : "Search"}
                onClick={()=> launchSearch()}
                onMouseOver={()=> onAccessibilityAnalysisOver()} onMouseLeave={()=> onAccessibilityAnalysisLeave()}>
                <svg className="magnifying-glass-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 97.8 96.3">
                    <line className="st0" x1="-177" y1="10.5" x2="-120.5" y2="67"/>
                    <line className="st0" x1="-120.5" y1="10.5" x2="-177" y2="67"/>
                    <line className="st0" x1="93.7" y1="122" x2="56.6" y2="159.1"/>
                    <line className="st0" x1="94.4" y1="122.7" x2="131.5" y2="159.8"/>
                    <path d="M-20.8,241.2l-53.3-30.8c-9.2-5.3-20.8,1.3-20.8,12V284c0,10.7,11.5,17.3,20.8,12l53.3-30.8
                        C-11.5,259.8-11.5,246.5-20.8,241.2z"/>
                    <path d="M315.3,378.1L245.7,338c-5.6-3.2-12.7,0.8-12.7,7.3v80.3c0,6.5,7,10.6,12.7,7.3l69.6-40.2
                        C320.9,389.5,320.9,381.4,315.3,378.1z"/>
                    <polyline className="st1" points="282.9,79.4 282.9,123.3 327.9,123.3 "/>
                    <polyline className="st1" points="350.4,101.3 350.4,57.5 305.4,57.5 "/>
                    <circle className="st1" cx="39.1" cy="39.1" r="22.3"/>
                    <line className="st2" x1="80" y1="81.7" x2="56.8" y2="58.4"/>
                </svg>
            </button>
        </div>
    )
}