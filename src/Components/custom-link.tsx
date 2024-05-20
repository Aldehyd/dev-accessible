import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../Contexts/language-context.tsx";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";
import AccessibotCommentContext from "../Contexts/accessibot-comment-context.tsx";

interface CustomLinkInterface {
    frenchText: string,
    englishText: string,
    openInNewTab?: boolean,
    route: string,
    type?: string,
    comment?: {
        hover: boolean,
        compliant: boolean,
        frenchContent: string,
        englishContent: string
    }
}

export default function CustomLink({frenchText,englishText,openInNewTab=false,route,type="secundary",comment={hover: true,compliant: true,frenchContent: "Le lien possède un nom accessible pertinent",englishContent: "Link has a pertinent accessible name"} }: CustomLinkInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);
    const {accessibilityAnalysis} = useContext(AccessibilityAnalysisContext);
    const {changeAccessibotComment} = useContext(AccessibotCommentContext);

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
    },[accessibilityAnalysis,setCompliantClass]);

    const classList = `link ${type === "main" ? "main-link" : ""} ${type === "secundary" ? "secundary-link" : ""} ${compliantClass}`;

    return(
        <Link to={accessibilityAnalysis ? "" : route} target={openInNewTab ? "_blank" : ""} className={classList} 
            onMouseOver={()=> onAccessibilityAnalysisOver()} onMouseLeave={()=> onAccessibilityAnalysisLeave()}>
            {language === "french" ? frenchText : englishText}
        </Link>
    )   
}