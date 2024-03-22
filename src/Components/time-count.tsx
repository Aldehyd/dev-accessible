
interface TimeCountPropsInterface {
    currentTime: {minutes: number, seconds: number},
    duration: {minutes: number, seconds: number}
}

export default function TimeCount({currentTime,duration}: TimeCountPropsInterface): React.JSX.Element {

    const rectifySeconds = (seconds)=> {
        let rectifiedSecondsCount = "";
        if(seconds < 10) {
            rectifiedSecondsCount = "0" + seconds.toString();
            return rectifiedSecondsCount;
        };
        return seconds;
    };

    return (
        <div className="time-count">
            {currentTime.minutes + ":" + rectifySeconds(currentTime.seconds) + " / " + duration.minutes + ":" + rectifySeconds(duration.seconds)}
        </div>
    )
}