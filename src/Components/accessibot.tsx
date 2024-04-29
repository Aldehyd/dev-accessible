import React from "react";
import { useState, useEffect } from "react";

export default function Accessibot(): React.JSX.Element {

    const [shadowColor,setShadowColor] = useState<string>("blue");
    const [mouseOver,setMouseOver] = useState<boolean>(false);
    const [isWaiting,setIsWaiting] = useState<boolean>(false);

    const onMouseOver = ()=> {
        setMouseOver(true);
    };

    const onMouseLeave = ()=> {
        setMouseOver(false);
    };

    const classList = `accessibility-bot ${isWaiting ? "accessibility-bot_waiting" : ""} ${mouseOver ? "accessibility-bot_hover" : ""}`;

    useEffect(()=> {
        setTimeout(()=> {
            setIsWaiting(true);
        },2600);
    },[]);

    return (
        <div className={classList} onMouseOver={()=> onMouseOver()} onMouseLeave={()=> onMouseLeave()}>
            {shadowColor === "red" && <div className="accessibility-bot_shadow accessibility-bot_shadow--red"></div>}
            {shadowColor === "green" && <div className="accessibility-bot_shadow accessibility-bot_shadow--green"></div>}
            {shadowColor === "blue" && <div className="accessibility-bot_shadow accessibility-bot_shadow--blue"></div>}
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