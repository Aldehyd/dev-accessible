import { useCallback, useEffect,useRef,useState } from "react";
import VideoInterface from "../Interfaces/videoInterface.tsx";

interface VideoPreviewPropsInterface {
    video: VideoInterface,
    currentTime: number,
    sliderBar: any,
    convertInMinutesAndSeconds: (time: number)=> {minutes: number,seconds: number}
}

export default function VideoPreview({video,currentTime,sliderBar,convertInMinutesAndSeconds}: VideoPreviewPropsInterface): React.JSX.Element {
    
    const videoElement = useRef(null);
    const previewElement = useRef(null);
    const [leftPosition,setLeftPosition] = useState<number>(0);

    const handlePosition = useCallback(()=> {
        let previewWidth: number = 0;
        let position: number = 0;
        if(previewElement.current)
            previewWidth = previewElement.current.offsetWidth;
        if(videoElement.current)
            position = currentTime/videoElement.current.duration*sliderBar.current.offsetWidth;
        if(position <= previewWidth/2) {
            setLeftPosition(0);
        } else if (sliderBar.current.offsetWidth - position <= previewWidth/2){
            setLeftPosition(sliderBar.current.offsetWidth - previewWidth);
        } else {
            setLeftPosition(position - previewWidth/2);
        };
    },[currentTime,sliderBar]);

    const rectifySeconds = (seconds)=> {
        let rectifiedSecondsCount = "";
        if(seconds < 10) {
            rectifiedSecondsCount = "0" + seconds.toString();
            return rectifiedSecondsCount;
        };
        return seconds;
    };

    useEffect(()=> {
        if(videoElement.current) {
            videoElement.current.currentTime = Math.round(currentTime);
            handlePosition();
        };
    },[currentTime,handlePosition]);

    return (
        <div style={{left: `${leftPosition}px`}} 
            className="video-preview" ref={previewElement}>
            <span className="video-preview_count">{convertInMinutesAndSeconds(currentTime).minutes + ":" + rectifySeconds(convertInMinutesAndSeconds(currentTime).seconds)}</span>
            <video ref={videoElement}>
                <source src={"/videos/" + video.videoName + ".mp4"} type="video/mp4" />
            </video>
        </div>
    )
}