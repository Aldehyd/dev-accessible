import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface TimeSliderPropsInterface {
    duration: number,
    currentValue: number,
    currentValueMinutesAndSeconds: {minutes: number, seconds: number}
}

export default function TimeSlider({duration,currentValue,currentValueMinutesAndSeconds}: TimeSliderPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <div className="time-slider">
            <span className="time-slider_thumb" tabIndex={0} role="slider" 
                aria-valuemin="0" aria-valuemax={duration} aria-valuenow={currentValue}
                aria-valuetext={currentValueMinutesAndSeconds.minutes + 'minutes ' + language==="french" ? "et " : "and " + currentValueMinutesAndSeconds.seconds + language==="french" ? 'secondes' : 'seconds'}
                aria-label={language === "french" ? "temps" : "time"}></span>
        </div>
    )
}