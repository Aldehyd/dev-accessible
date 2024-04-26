import React from "react";

export default function Accessibot(): React.JSX.Element {
    return (
        <div className="accessibility-bot accessibility-bot_waiting animations">
            <div className="accessibility-bot_shadow accessibility-bot_shadow--red"></div>
            <div className="accessibility-bot_shadow accessibility-bot_shadow--green"></div>
            <div className="accessibility-bot_shadow accessibility-bot_shadow--blue"></div>
            <div className="accessibility-bot_body">
                <div className="accessibility-bot_left-eye accessibility-bot_eyes"></div>
                <div className="accessibility-bot_right-eye accessibility-bot_eyes"></div>
                <div className="accessibility-bot_mouth--happy accessibility-bot_mouth"></div>
                <div className="accessibility-bot_mouth--sad accessibility-bot_mouth"></div>
            </div>
        </div>
    )
}