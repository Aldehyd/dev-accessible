import { useContext, useState, useEffect, useRef, useCallback } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface TimeSliderPropsInterface {
    videoElement: any,
    duration: number,
    currentValue: number,
    setCurrentValue: (value: number)=>void,
    currentValueMinutesAndSeconds: {minutes: number, seconds: number}
}

export default function TimeSlider({videoElement,duration,currentValue,setCurrentValue,currentValueMinutesAndSeconds}: TimeSliderPropsInterface): React.JSX.Element {
    console.log('rerender')
    const {language} = useContext(LanguageContext);

    const sliderBar = useRef(null);
    const sliderThumb = useRef(null);

    // const [isMouseDown,setIsMouseDown] = useState<boolean>(true);
    const isMouseDown = useRef(false)
    const [thumbPosition,setThumbPosition] = useState<number>(0);

    const handleMouseUp = ()=> {
        isMouseDown.current = false;
        // setIsMouseDown(false);
    };

    const handleMouseDown = ()=> {
        isMouseDown.current = true;
        // setIsMouseDown(true);
    };

    const handleClick = (e)=> {
        setCurrentValue(Math.round((e.clientX - sliderBar.current.getBoundingClientRect().left)/sliderBar.current.offsetWidth*(duration)));
    };

    const handleMouseMove =(e)=> {
        console.log(isMouseDown)
        if(isMouseDown) {
            console.log('move')
            setCurrentValue(Math.round((e.clientX - sliderBar.current.getBoundingClientRect().left)/sliderBar.current.offsetWidth*(duration)));
        };
    };

    const handleKeyDown= (e)=> {
        switch(e.key) {
            case "ArrowRight":
                e.preventDefault();
                if(currentValue < duration-1) 
                    setCurrentValue(currentValue + 1);
                break;
            case "ArrowUp":
                e.preventDefault();
                if(currentValue < duration-1) 
                    setCurrentValue(currentValue + 1);
                break;
            case "ArrowLeft":
                e.preventDefault();
                if(currentValue >= 1) 
                    setCurrentValue(currentValue - 1);
                break;
            case "ArrowDown":
                e.preventDefault();
                if(currentValue >= 1) 
                    setCurrentValue(currentValue - 1);
                break;
            case "PageDown":
                e.preventDefault();
                if(currentValue >= 10) {
                    setCurrentValue(currentValue - 10);
                } else {
                    setCurrentValue(0);
                };
                break;
            case "PageUp":
                e.preventDefault();
                if(currentValue <= duration - 10) {
                    setCurrentValue(currentValue + 10);
                } else {
                    setCurrentValue(duration);
                };
                break;
            case "Home":
                e.preventDefault();
                setCurrentValue(0);
                break;
            case "End":
                e.preventDefault();
                setCurrentValue(duration);
                break;
            default:
                break;
        };
    };

    const handleThumbPosition = useCallback(()=> {
        const sliderBarOffset = parseInt(getComputedStyle(sliderBar.current).left.replace('px',''))/2;
        const sliderBarPaddingRight = parseInt(getComputedStyle(sliderBar.current).paddingRight);
        const sliderBarPaddingLeft = parseInt(getComputedStyle(sliderBar.current).paddingLeft);
        const sliderBarPaddings = sliderBarPaddingLeft + sliderBarPaddingRight;
        let position = 0;
        position = Math.round(currentValue/duration *(sliderBar.current ? (sliderBar.current.offsetWidth - sliderBarPaddings) : 0) + sliderBarOffset);
        const rectification = position / (sliderBar.current ? (sliderBar.current.offsetWidth - sliderBarPaddings) : 1) * (sliderThumb.current ? sliderThumb.current.offsetWidth : 0);
        const visualPosition = position - rectification;
        setThumbPosition(visualPosition);
    },[currentValue,duration]);

    useEffect(()=> {
        console.log('set event listener')
        sliderBar.current.addEventListener('mousemove',(e)=> handleMouseMove(e));

        return ()=> sliderBar.current.removeEventListener('mousemove',handleMouseMove);
    },[]);

    useEffect(()=> {
        console.log(videoElement)
        videoElement.currentTime = currentValue;
        console.log(videoElement)
        handleThumbPosition();
    },[currentValue,handleThumbPosition]);

    useEffect(()=> {
        console.log(isMouseDown)
        if(isMouseDown) {
            window.addEventListener('mouseup',()=> handleMouseUp());
        } else {
            window.removeEventListener('mouseup',handleMouseUp);
        };
    },[isMouseDown]);

    return(
        <div ref={sliderBar} className="time-slider"  
        // onClick={(e)=>handleClick(e)}
        >
            <span className="time-slider_thumb" tabIndex={0} role="slider" ref={sliderThumb}
                aria-valuemin="0" aria-valuemax={duration} aria-valuenow={currentValue}
                aria-valuetext={currentValueMinutesAndSeconds.minutes + 'minutes ' + language==="french" ? "et " : "and " + currentValueMinutesAndSeconds.seconds + language==="french" ? 'secondes' : 'seconds'}
                aria-label={language === "french" ? "temps" : "time"} onMouseDown={handleMouseDown}
                onKeyDown={handleKeyDown} style={{left: `${thumbPosition}px`}}></span>
        </div>
    )
}