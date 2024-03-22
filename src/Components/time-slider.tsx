import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function TimeSlider({durationNumber,durationMinutesAndSeconds,currentValue}): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <div className="time-slider">
            <span className="time-slider_thumb" tabIndex={0} role="slider" 
                aria-valuemin="0" aria-valuemax={durationNumber} aria-valuenow={currentValue}
                aria-valuetext={durationMinutesAndSeconds.minutes + 'minutes ' + language==="french" ? "et " : "and " + durationMinutesAndSeconds.seconds + language==="french" ? 'secondes' : 'seconds'}
                aria-label={language === "french" ? "temps" : "time"}></span>
        </div>
    )
}