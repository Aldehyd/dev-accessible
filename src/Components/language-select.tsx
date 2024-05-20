import { useContext, useEffect, useState, useRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";
import AccessibotCommentContext from "../Contexts/accessibot-comment-context.tsx";
import AccessibilityAnalysisWarningContext from "../Contexts/accessibility-analysis-warning-context.tsx";
interface LanguageSelectPropsInterface {
    setDisplay: (display: boolean)=> void,
    comment?: {
        hover: boolean,
        compliant: boolean,
        frenchContent: string,
        englishContent: string
    }
}

export default function LanguageSelect({setDisplay,comment={hover: true,compliant: true,frenchContent: "La liste de choix possède un nom accessible via l'attribut 'aria-label', un attribut 'role' égal à 'listbox' ainsi qu'un attribut 'aria-expanded' dont la valeur change en fonction de l'état",englishContent: "The aselect has an accessible name thanks to the 'aria-label' attribute, a 'role' attribute whose value is 'listbox' and a 'aria-expanded' attribute changing depending on the state"}}:LanguageSelectPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);
    const {accessibilityAnalysis} = useContext(AccessibilityAnalysisContext);
    const {changeAccessibotComment} = useContext(AccessibotCommentContext);
    const {changeAccessibilityAnalysisWarning} = useContext(AccessibilityAnalysisWarningContext);

    // const [selectClassList,setSelectClassList] = useState("language-select");
    const [topClassList,setTopClassList] = useState("language-select_top");
    const [centerClassList,setCenterClassList] = useState("language-select_center");

    const languageSelect = useRef(null);
    const languageSelectTop = useRef(null);
    const languageSelectCenter = useRef(null);

    const [expanded,setExpanded] = useState<string>("false");

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

    const handleClickOnSelect = ()=> {
        if(!accessibilityAnalysis) {
            expanded === "false" ? setExpanded("true") : setExpanded("false");
        } else {
            changeAccessibilityAnalysisWarning(true);
        }; 
    };

    const handleClickOnOption = (choice)=> {
        if(choice !== language) {
            // changeLanguage(choice);
            setDisplay(true);
            setExpanded("false");
        };
    };

    const closeOnClickAnywhereElse = (e)=> {
        !languageSelect.current?.contains(e.target) && setExpanded("false");
    };

    const handleKeyDown = (e)=> {
        switch(e.key) {
            case "Escape":
                setExpanded("false");
                break;
            default:
                break;
        };
    };

    useEffect(()=> {
        document.documentElement.setAttribute('lang',language === "french" ? "fr" : "en");
        // setSelectClassList(`language-select ${language === "french" ? "fr" : "en"}`);
        setTopClassList(`language-select_top ${language === "french" ? "fr" : "en"}`);
        setCenterClassList(`language-select_center ${language === "french" ? "en" : "fr"}`);
    },[language]);
    
    useEffect(()=> {
        window.addEventListener('click',(e)=> closeOnClickAnywhereElse(e));
            
        return() => {window.removeEventListener('click',closeOnClickAnywhereElse)}
    },[]);

    const selectClassList = `language-select ${language === "french" ? "fr" : "en"} ${compliantClass}`;

    return(
        <div className={selectClassList} ref={languageSelect} aria-expanded={expanded} 
            role="listbox" aria-label={language === "french" ? "choix de la langue" : "language choice"} 
            onKeyDown={(e)=> handleKeyDown(e)} tabIndex={0}
            onMouseOver={()=> onAccessibilityAnalysisOver()} onMouseLeave={()=> onAccessibilityAnalysisLeave()}>
            <div ref={languageSelectTop} className={topClassList} onClick={()=> handleClickOnSelect()}>
                <span className="language-select_top_fr" role="option">FR</span>
                <span className="language-select_top_en" role="option">EN</span>
            </div>
            <div ref={languageSelectCenter} className={centerClassList}>
                <span className="language-select_center_fr" role="option"
                    onClick={()=> handleClickOnOption("french")} aria-label="français" lang="fr">
                    FR
                </span>
                <span className="language-select_center_en" role="option"
                onClick={()=> handleClickOnOption("english")} aria-label="english" lang="en">
                    EN
                </span>
            </div>
            <div className="language-select_bottom"></div>
        </div>
    )
}