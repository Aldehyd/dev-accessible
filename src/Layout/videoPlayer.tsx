import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import TimeSlider from "../Components/time-slider.tsx";
import TimeCount from "../Components/time-count.tsx";
import BasicButton from "../Components/basic-button.tsx";

interface VideoPlayerPropsInterface {
    video: {videoName: string, pictureName: string, pictureFrenchAlt: string, englishEnglishAlt: string, frenchTitle: string, englishTitle: string, frenchTranscription: string, englishTranscription: string}
}

export default function VideoPlayer({video}: VideoPlayerPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const videoElement = useRef(null);

    const [status,setStatus] = useState<string>("video");
    const [currentTime,setCurrentTime] = useState<number>(0);
    const [currentTimeInMinutesAndSeconds,setCurrentTimeInMinutesAndSeconds] = useState({minutes: 0, seconds: 0});

    const convertInMinutesAndSeconds : (value: number)=> {minutes: number, seconds: number} = (value)=> {
        let minutes = Math.floor(value / 60);
        let seconds = Math.floor(value % 60);

        return {minutes: minutes, seconds: seconds};
    };

    const onTranscriptionButtonClick = ()=> {
        status === "video" ? setStatus("transcription") : setStatus("video");
    };

    useEffect(()=> {
        setCurrentTime(videoElement.current?.currentTime);
    },[videoElement.current?.currentTime]);

    useEffect(()=> {
        setCurrentTimeInMinutesAndSeconds(convertInMinutesAndSeconds(currentTime));
    },[currentTime]);

    return(
        <div className="video-container">
            <h2 className="video-title">
                {language === "french" ? video.frenchTitle : video.englishTitle}
            </h2>
            <div className="video-player">
                <div className="video-player_transcription">
                    <p>{language === "french" ? video.frenchTranscription : video.englishTranscription}</p>
                </div>
                <div className="video-player_video">
                    <video ref={videoElement} tabIndex={0}>
                        <source src={"videos/" + video.videoName + ".mp4"} type="video/mp4" />
                    </video>
                    <img src={"img/" + video.pictureName + ".JPG"} alt={language === "french" ? video.pictureFrenchAlt : video.pictureEnglishAlt} className="video-player_background" />
                    <button className="main-play-button" aria-label={language === "french" ? "Lancer la vidéo": "Play"}>
                        <span className="main-play-button_play-icon">&#9654;</span>
                    </button>
                </div>
                
                <div className="video-player_control-bar">
                    <div className="video-player_control-bar_timeline">
                        <button className="play-button video-player-button" aria-label={language === "french" ? "Lancer la vidéo": "Play"}>
                            <span className="play-button_play-icon">&#9654;</span>
                        </button>
                        {/* <div className="time-slider">
                            <span className="time-slider_thumb" tabIndex={0} role="slider" 
                                aria-valuemin="0" aria-valuemax="10" aria-valuenow={}
                                aria-label="volume"></span>
                        </div> */}
                        <TimeSlider duration={videoElement.current?.duration} currentValue={currentTime} currentValueMinutesAndSeconds={convertInMinutesAndSeconds(currentTime)} />
                    </div>
                    {/* <div className="time-count">0:00 / 02:49</div> */}
                    <TimeCount currentTime={currentTimeInMinutesAndSeconds} duration={convertInMinutesAndSeconds(videoElement.current?.duration)} />
                    <div className="video-player_control-bar_volume">
                        <button className="volume-button video-player-button" aria-label={"Volume"}>
                            <span className="volume-button_icon">&#128361;</span>
                        </button>
                        <div className="volume-slider-container">
                            <div className="volume-slider">
                                <div className="volume-slider_mask">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                {/* <div className="volume-slider_thumb" tabIndex={0} role="slider" 
                                aria-valuemin="0" aria-valuemax="10" aria-valuenow={}
                                aria-label="volume" aria-orientation="vertical"></div> */}
                            </div>
                        </div>
                    </div>
                    <button className="full-screen-button video-player-button" aria-label={language === "french" ? "Plein écran": "Full Screen"}>&#9167;</button>
                    <BasicButton frenchtext="Transcription textuelle" englishText="Text transcription" onClickFunction={} />
                </div>
            </div>
            <div className="button-container">
                <div className="button-shadow"></div>
                <button className="video-transcription-button">
                    <span className="video-transcription-button_transcription-text">Transcription textuelle</span>
                    <span className="video-transcription-button_video-text">Vidéo</span>
                </button>
            </div>
        
        </div>
    )
}