import React, { useCallback, useContext, useRef } from "react";
import { useState, useEffect } from "react";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";
import AccessibotCommentContext from "../Contexts/accessibot-comment-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";

interface AccessibotPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function Accessibot({setDisplay}: AccessibotPropsInterface): React.JSX.Element {

    const accessibot = useRef(null); 
    
    const botOffsetX = 70;
    const botOffsetY = 40;

    const {language} = useContext(LanguageContext);
    const {accessibilityAnalysis,changeAccessibilityAnalysis} = useContext(AccessibilityAnalysisContext);
    const {accessibotComment,changeAccessibotComment} = useContext(AccessibotCommentContext);

    const [shadowColor,setShadowColor] = useState<string>("default");
    const [mouseOver,setMouseOver] = useState<boolean>(false);
    const [isWaiting,setIsWaiting] = useState<boolean>(false);

    const [botPosition,setBotPosition] = useState(accessibilityAnalysis ? {left: accessibot.current.offsetX, top: accessibot.current.offsetY} : {});

    const onMouseOver = ()=> {
        if(!accessibilityAnalysis)
            setMouseOver(true);
    };

    const onMouseLeave = ()=> {
        if(!accessibilityAnalysis)
            setMouseOver(false);
    };

    const onClick = ()=> {
        if(!accessibilityAnalysis) {
            setDisplay(true);
        };
    };

    const onMouseMove = (e)=> {
        setBotPosition({left: e.pageX - botOffsetX, top: e.pageY + botOffsetY})
    };

    const exitAccessibilityMode = useCallback(()=> {
        changeAccessibilityAnalysis(false);
        setBotPosition({});
    },[changeAccessibilityAnalysis]);

    const onKeyDown = useCallback((e)=> {
        switch(e.key) {
            case 'Escape':
                exitAccessibilityMode();
                break;
            default:
                break;
        }
    },[exitAccessibilityMode]);

    useEffect(()=> {
        setTimeout(()=> {
            setIsWaiting(true);
        },2600);
    },[]);

    useEffect(()=> {
        if(accessibilityAnalysis) {
            window.addEventListener('mousemove',(e)=> {
                onMouseMove(e);
            });
            window.addEventListener('keydown',(e)=> {
                onKeyDown(e);
            });
            window.addEventListener('contextmenu',(e)=> {
                e.preventDefault();
                exitAccessibilityMode();
            });
        } else {
            setBotPosition({});
            window.removeEventListener('mousemove',onMouseMove);
            window.removeEventListener('keydown',onKeyDown);
            window.removeEventListener('contextmenu',exitAccessibilityMode);
        };
        return ()=> window.removeEventListener('mousemove',onMouseMove);
    },[accessibilityAnalysis,exitAccessibilityMode,onKeyDown]);

    const botClassList = `accessibility-bot ${isWaiting ? "accessibility-bot_waiting" : ""} ${mouseOver ? "accessibility-bot_hover" : ""} ${accessibilityAnalysis ? "accessibility-bot_click" : ""} ${accessibotComment.hover ? (accessibotComment.compliant ? "compliant" : "not-compliant") : ""}`;

    return (
        <div className={botClassList} tabIndex={0} ref={accessibot} onClick={()=> onClick()} 
            onMouseOver={()=> onMouseOver()} onMouseLeave={()=> onMouseLeave()}
            style={botPosition}>
            <div className="accessibility-bot_shadow"></div>
            <div className="accessibility-bot_body">
                <div className="accessibility-bot_left-eye accessibility-bot_eyes"></div>
                <div className="accessibility-bot_right-eye accessibility-bot_eyes"></div>
                <div className="accessibility-bot_mouth--happy accessibility-bot_mouth"></div>
                <div className="accessibility-bot_mouth--sad accessibility-bot_mouth"></div>
            </div>
            <div className="accessibility-bot_shadow-appear-effect"></div>
            {
                accessibilityAnalysis && accessibotComment.hover &&
                <p className="accessibility-bot_comment">
                    {language === "french" ? accessibotComment.frenchContent : accessibotComment.englishContent}
                </p>
            }
        </div>
    )
}