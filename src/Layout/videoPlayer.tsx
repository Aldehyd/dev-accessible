import { useContext, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import TimeSlider from "../Components/time-slider.tsx";

interface VideoPlayerPropsInterface {
    video: any,
    frenchTitle: string,
    englishTitle: string,
    frenchTranscription: string,
    englishTranscription: string
}

export default function VideoPlayer({video,frenchTitle,englishTitle,frenchTranscription,englishTranscription}: VideoPlayerPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [currentTime,setCurrentTime] = useState<number>(0);

    const convertInMinutesAndSeconds : (value: number)=> {minutes: number, seconds: number} = (value)=> {
        let minutes = Math.floor(value / 60);
        let seconds = Math.floor(value % 60);

        return {minutes: minutes, seconds: seconds};
    }

    return(
        <div className="video-container">
            <h2 className="video-title">
                {language === "french" ? frenchTitle : englishTitle}
            </h2>
            <div className="video-player">
                <div className="video-player_transcription">
                    <p>{language === "french" ? frenchTranscription : englishTranscription}</p>
                </div>
                <div className="video-player_video"></div>
                <button className="main-play-button" aria-label={language === "french" ? "Lancer la vidéo": "Play"}>
                    <span className="main-play-button_play-icon">&#9654;</span>
                </button>
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
                        <TimeSlider duration={video.duration} currentValue={currentTime} currentValueMinutesAndSeconds={convertInMinutesAndSeconds(currentTime)} />
                    </div>
                    <div className="time-count">0:00 / 02:49</div>
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
                                <div className="volume-slider_thumb" tabIndex={0} role="slider" 
                                aria-valuemin="0" aria-valuemax="10" aria-valuenow={}
                                aria-label="volume" aria-orientation="vertical"></div>
                            </div>
                        </div>
                    </div>
                    <button className="full-screen-button video-player-button" aria-label={language === "french" ? "Plein écran": "Full Screen"}>&#9167;</button>
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