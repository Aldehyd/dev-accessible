import { useContext, useState, useEffect, useRef, useCallback } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import VideoPreview from "./video-preview.tsx";
import VideoInterface from "../Interfaces/videoInterface.tsx";

interface TimeSliderPropsInterface {
    video: VideoInterface,
    videoElement: any,
    duration: number,
    currentValue: number,
    setCurrentValue: (value: number)=>void,
    currentValueMinutesAndSeconds: {minutes: number,seconds: number},
    convertInMinutesAndSeconds: (time: number)=> {minutes: number,seconds: number}
}

export default function TimeSlider({video,videoElement,duration,currentValue,setCurrentValue,currentValueMinutesAndSeconds,convertInMinutesAndSeconds}: TimeSliderPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const sliderBar = useRef(null);
    const sliderThumb = useRef(null);

    const [mouseDown,setMouseDown] = useState<boolean>(false);
    const [thumbPosition,setThumbPosition] = useState<number>(0);
    const [previewCurrentTime,setPreviewCurrentTime] = useState<number>(0);
    const [mouseOver,setMouseOver] = useState<boolean>(false);

    const listenMouseUp = ()=> {
        setMouseDown(false);
    };

    const handleMouseDown = (e)=> {
        setMouseDown(true);
    };

    const computeTime = (e)=> {
        return Math.round((e.clientX - sliderBar.current.getBoundingClientRect().left)/sliderBar.current.offsetWidth*(duration))
    };

    const handleMouseMove = (e)=> {
        const currentTime = computeTime(e);
        if(mouseDown) {
            setCurrentValue(currentTime);
            videoElement.current.currentTime = currentTime;
        } else {
            setPreviewCurrentTime(currentTime);
        }
    };

    const handleClick = (e)=> {
        const currentTime = computeTime(e);
        setCurrentValue(currentTime);
        videoElement.current.currentTime = currentTime;
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
        if(mouseDown) {
            window.addEventListener('mouseup',listenMouseUp);
        } else {
            window.removeEventListener('mouseup',listenMouseUp);
        };
        return ()=> window.removeEventListener('mouseup',listenMouseUp)
    },[mouseDown]);

    useEffect(()=> {
        videoElement.currentTime = currentValue;
        handleThumbPosition();
    },[currentValue,handleThumbPosition]);

    return(
        <div ref={sliderBar} className="time-slider"  
            onClick = {(e)=> handleClick(e)}
            onMouseMove = {(e)=> handleMouseMove(e)}
            onMouseOver = {()=> setMouseOver(true)}
            onMouseLeave = {()=> setMouseOver(false)}
        >
            <span className="time-slider_thumb" tabIndex={0} role="slider" ref={sliderThumb}
                aria-valuemin="0" aria-valuemax={duration} aria-valuenow={currentValue}
                aria-valuetext={currentValueMinutesAndSeconds.minutes + 'minutes ' + language==="french" ? "et " : "and " + currentValueMinutesAndSeconds.seconds + language==="french" ? 'secondes' : 'seconds'}
                aria-label={language === "french" ? "temps" : "time"} onMouseDown={(e)=> handleMouseDown(e)}
                onKeyDown={()=> handleKeyDown()} style={{left: `${thumbPosition}px`}}></span>
            {
                mouseOver && !mouseDown && <VideoPreview video={video} currentTime={previewCurrentTime} sliderBar={sliderBar}
                                convertInMinutesAndSeconds={convertInMinutesAndSeconds} />
            }
        </div>
    )
}