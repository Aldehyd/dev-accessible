import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import TimeSlider from "../Components/time-slider.tsx";

export default function VideoPlayer({frenchTitle,englishTitle,frenchTranscription,englishTranscription}): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    // computeAriaValueText(value) {
    //     let minutes = 0;
    //     let seconds = 0;
    //     minutes = Math.floor(currentValue / 60);
    //     seconds = Math.floor(currentValue % 60);

    //     return {minutes: minutes, seconds: seconds};
    // }

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
                        <TimeSlider durationNumber={} durationMinutesAndSeconds={} currentValue={} />
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