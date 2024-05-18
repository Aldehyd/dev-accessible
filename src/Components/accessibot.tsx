import React, { useContext } from "react";
import { useState, useEffect } from "react";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";

interface AccessibotPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function Accessibot({setDisplay}: AccessibotPropsInterface): React.JSX.Element {

    const {accessibilityAnalysis} = useContext(AccessibilityAnalysisContext);

    const [shadowColor,setShadowColor] = useState<string>("default");
    const [mouseOver,setMouseOver] = useState<boolean>(false);
    const [isWaiting,setIsWaiting] = useState<boolean>(false);

    const onMouseOver = ()=> {
        setMouseOver(true);
    };

    const onMouseLeave = ()=> {
        setMouseOver(false);
    };

    const onClick = ()=> {
        if(!accessibilityAnalysis) {
            setDisplay(true);
        };
    };

    const classList = `accessibility-bot ${isWaiting ? "accessibility-bot_waiting" : ""} ${mouseOver ? "accessibility-bot_hover" : ""}`;

    useEffect(()=> {
        setTimeout(()=> {
            setIsWaiting(true);
        },2600);
    },[]);

    return (
        <div className={classList} tabIndex={0} onClick={()=> onClick()} onMouseOver={()=> onMouseOver()} onMouseLeave={()=> onMouseLeave()}>
            {shadowColor === "red" && <div className="accessibility-bot_shadow accessibility-bot_shadow--red"></div>}
            {shadowColor === "green" && <div className="accessibility-bot_shadow accessibility-bot_shadow--green"></div>}
            {shadowColor === "default" && <div className="accessibility-bot_shadow accessibility-bot_shadow--default"></div>}
            <div className="accessibility-bot_body">
                <div className="accessibility-bot_left-eye accessibility-bot_eyes"></div>
                <div className="accessibility-bot_right-eye accessibility-bot_eyes"></div>
                <div className="accessibility-bot_mouth--happy accessibility-bot_mouth"></div>
                <div className="accessibility-bot_mouth--sad accessibility-bot_mouth"></div>
            </div>
            <div className="accessibility-bot_shadow-appear-effect"></div>
        </div>
    )
}