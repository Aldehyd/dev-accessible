import { useRef } from "react";
interface VolumeSliderPropsInterface {
    volume: number,
    setVolume: (volume: number)=> void,
    setDisplay: (display: boolean)=> void
}

export default function VolumeSlider({volume,setVolume,setDisplay}: VolumeSliderPropsInterface): React.JSX.Element {
    
    const volumeSlider = useRef(null);

    const changeVolume = (e)=> {
        const newVolume = 1 - Math.round(e.clientY - volumeSlider.current?.getBoundingClientRect().top)/volumeSlider.current.offsetHeight;
        console.log(volume)
        setVolume(newVolume);
    };
    
    return (
        <div className="volume-slider-container">
            <div className="volume-slider" ref={volumeSlider}
                onMouseOver={()=> setDisplay(true)}
                onMouseLeave={()=> setDisplay(false)}
                onClick={(e)=> changeVolume(e)}>
                <div className="volume-slider_mask">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="volume-slider_thumb" tabIndex={0} role="slider" 
                    aria-valuemin="0" aria-valuemax="10" aria-valuenow={Math.round(volume*10)}
                    aria-label="volume" aria-orientation="vertical"
                    style={{height: `${0.9*volume*volumeSlider.current?.offsetHeight}px`}}></div>
            </div>
        </div>
    )
}