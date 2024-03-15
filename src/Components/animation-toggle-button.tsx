import { useEffect, useState } from "react";

export default function AnimationToggleButton(): React.JSX.Element {

    const [animationsStatus,setAnimationsStatus] = useState<boolean>(true);
    const [classNames,setClassNames] = useState<string>('animations-toggle-button');

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
        if(animationsStatus) {
            document.body.classList.add('animations');
        } else {
            document.body.classList.remove('animations');
        };
        localStorage.setItem('animations',animationsStatus.toString());

        setClassNames(`animations-toggle-button ${animationsStatus ? 'on' : 'off'}`);

    },[animationsStatus]);

    return(
        <button className={classNames} onClick={()=> setAnimationsStatus(animationsStatus => !animationsStatus)}>
            <span aria-hidden="true" class="animations-toggle-button_invisible-text">Animations OFF</span>
            <span class="animations-toggle-button_overflow-container">
                <span aria-hidden="true" class="animations-toggle-button_invisible-text">Animations OFF</span>
                <span class="animations-toggle-button_text-container">
                    <span class="animations-toggle-button_on" aria-hidden="false">Animations <span lang="en">ON</span></span>
                    <span class="animations-toggle-button_off" aria-hidden="true">Animations <span lang="en">OFF</span></span>
                </span>
            </span>
        </button>

    )
}