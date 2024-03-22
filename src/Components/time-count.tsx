
interface TimeCountPropsInterface {
    currentTime: {minutes: number, seconds: number},
    duration: {minutes: number, seconds: number}
}

export default function TimeCount({currentTime,duration}: TimeCountPropsInterface): React.JSX.Element {
    return (
        <div className="time-count">
            {currentTime.minutes + ":" + currentTime.seconds + " / " + duration.minutes + ":" + duration.seconds}
        </div>
    )
}