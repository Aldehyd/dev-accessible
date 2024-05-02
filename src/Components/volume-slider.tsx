
interface VolumeSliderPropsInterface {
    volume: number,
    setDisplay: (display: boolean)=> void
}

export default function VolumeSlider({volume,setDisplay}: VolumeSliderPropsInterface): React.JSX.Element {
    return (
        <div className="volume-slider-container">
            <div className="volume-slider"
                onMouseOver={()=> setDisplay(true)}
                onMouseLeave={()=> setDisplay(false)}>
                <div className="volume-slider_mask">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="volume-slider_thumb" tabIndex={0} role="slider" 
                aria-valuemin="0" aria-valuemax="10" aria-valuenow={volume}
                aria-label="volume" aria-orientation="vertical"></div>
            </div>
        </div>
    )
}