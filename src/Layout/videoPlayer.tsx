import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import TimeSlider from "../Components/time-slider.tsx";
import TimeCount from "../Components/time-count.tsx";
import BasicButton from "../Components/basic-button.tsx";
import VideoInterface from "../Interfaces/videoInterface.tsx";
import VolumeSlider from "../Components/volume-slider.tsx";
import VolumeButton from "../Components/volume-button.tsx";

interface VideoPlayerPropsInterface {
    video: VideoInterface
}

export default function VideoPlayer({video}: VideoPlayerPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const videoPlayerElement = useRef(null);
    const videoElement = useRef(null);
    const controlBar = useRef(null);

    const [status,setStatus] = useState<string>("video");
    const [fullScreenMode,setFullScreenMode] = useState<boolean>(false);
    const [isPlaying,setIsPlaying] = useState<boolean>(false);
    const [currentTime,setCurrentTime] = useState<number>(0);
    const [currentTimeInMinutesAndSeconds,setCurrentTimeInMinutesAndSeconds] = useState({minutes: 0, seconds: 0});
    const [volume,setVolume] = useState<number>(0);
    const [volumeSliderDisplay,setVolumeSliderDisplay] = useState<boolean>(false);

    const convertInMinutesAndSeconds : (value: number)=> {minutes: number, seconds: number} = (value)=> {
        let minutes = Math.floor(value / 60);
        let seconds = Math.floor(value % 60);

        return {minutes: minutes, seconds: seconds};
    };

    const onTranscriptionButtonClick = ()=> {
        status === "video" ? setStatus("transcription") : setStatus("video");
    };

    const onPlayButtonClick = ()=> {
        setIsPlaying(isPlaying => !isPlaying);
    };

    const onVideoClick = ()=> {
        if(isPlaying) {
            setIsPlaying(false);
        };
    };

    const showControlBar = ()=> {
        // clearTimeout(controlBar);
        controlBar.current.classList.add('display');
        // const controlBarHide = setTimeout(()=> {
        //     controlBar.current.classList.remove('display');
        // },4000);
    };

    const hideControlBar = ()=> {
        controlBar.current.classList.remove('display');
    };

    const handleKeyDown = (e)=> {
        switch(e.key) {
            case " ":
                e.preventDefault();
                if(isPlaying) {
                    videoElement.current.pause();
                    setIsPlaying(false);
                } else {
                    videoElement.current.play();
                    setIsPlaying(true);
                };
                break;
            default:
                break;
        };
    };

    const playButtonClassList = `play-button video-player-button ${isPlaying ? "pause" : "play"}`;
    const volumeClassList = `video-player_control-bar_volume ${volumeSliderDisplay ? "display" : ""}`;

    useEffect(()=> {
        fullScreenMode ? 
            videoPlayerElement.current?.requestFullscreen() 
            : 
            document.fullscreenElement !== null && document.exitFullscreen();
    },[fullScreenMode]);

    useEffect(()=> {
        if(isPlaying) {
            videoElement.current?.play();
        } else {
            videoElement.current?.pause()
        };
    },[isPlaying]);

    useEffect(()=> {
        console.log('maj time')
        setCurrentTime(videoElement.current?.currentTime);
    },[videoElement.current?.currentTime]);

    useEffect(()=> {
        setCurrentTimeInMinutesAndSeconds(convertInMinutesAndSeconds(currentTime));
    },[currentTime]);

    useEffect(()=> {
        if(status === "video") {
            videoPlayerElement.current?.addEventListener('mouseover',()=> showControlBar());
            videoPlayerElement.current?.addEventListener('mouseleave',()=> hideControlBar());
        } else {
            videoPlayerElement.current?.removeEventListener('mouseover',showControlBar);
            // clearTimeout(controlBarHide);
        };
    },[status]);

    return(
        <div className="video-container">
            <h2 className="video-title">
                {language === "french" ? video.frenchTitle : video.englishTitle}
            </h2>
            <div className="video-player" ref={videoPlayerElement} onKeyDown={(e)=> handleKeyDown(e)}
                tabIndex={0}>
                {status === "transcription" && 
                    <div className="video-player_transcription">
                        <p>{language === "french" ? video.frenchTranscription : video.englishTranscription}</p>
                    </div>
                }
                {status === "video" &&
                    <div className="video-player_video" onClick={onVideoClick}>
                        <video ref={videoElement} tabIndex={0} onTimeUpdate={()=> setCurrentTime(videoElement.current.currentTime)}>
                            <source src={"/videos/" + video.videoName + ".mp4"} type="video/mp4" />
                        </video>
                        {/* <img src={"img/" + video.pictureName + ".JPG"} alt={language === "french" ? video.pictureFrenchAlt : video.pictureEnglishAlt} className="video-player_background" /> */}
                        {!isPlaying && 
                            <button className="main-play-button" onClick={onPlayButtonClick}
                                aria-label={language === "french" ? "Lancer la vidéo": "Play"}>
                                <svg className="main-play-button_play-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.2 106.4" >
                                    <path d="M-244.9-89.5l-53.3-30.8c-9.2-5.3-20.8,1.3-20.8,12v61.6c0,10.7,11.5,17.3,20.8,12l53.3-30.8
                                        C-235.7-70.8-235.7-84.1-244.9-89.5z"/>
                                    <path d="M91.1,47.5L21.5,7.3C15.9,4.1,8.9,8.1,8.9,14.6V95c0,6.5,7,10.6,12.7,7.3l69.6-40.2C96.7,58.8,96.7,50.7,91.1,47.5z"/>
                                </svg>
                            </button>
                        }
                    </div>
                }
                
                <div className="video-player_control-bar" ref={controlBar}
                    // onMouseOver={()=> clearTimeout(controlBarHide.current)}
                    // onFocus={()=> clearTimeout(controlBarHide.current)}
                    >
                    <div className="video-player_control-bar_timeline">
                        <button className={playButtonClassList}
                            onClick={onPlayButtonClick}
                            aria-label={language === "french" ? "Lancer la vidéo": "Play"}>
                            <svg className="play-icon" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100.2 106.4" >
                                <path d="M-244.9-89.5l-53.3-30.8c-9.2-5.3-20.8,1.3-20.8,12v61.6c0,10.7,11.5,17.3,20.8,12l53.3-30.8
                                    C-235.7-70.8-235.7-84.1-244.9-89.5z"/>
                                <path d="M91.1,47.5L21.5,7.3C15.9,4.1,8.9,8.1,8.9,14.6V95c0,6.5,7,10.6,12.7,7.3l69.6-40.2C96.7,58.8,96.7,50.7,91.1,47.5z"/>
                            </svg>
                            <span className="pause-icon">
                                <span></span>
                                <span></span>
                            </span>
                        </button>
                        <TimeSlider videoElement={videoElement} duration={videoElement.current?.duration} currentValue={currentTime} setCurrentValue={setCurrentTime} currentValueMinutesAndSeconds={convertInMinutesAndSeconds(currentTime)} />
                    </div>
                    <TimeCount currentTime={currentTimeInMinutesAndSeconds} duration={convertInMinutesAndSeconds(videoElement.current?.duration)} />
                    <div className={volumeClassList} >
                        <VolumeButton volume={volume === 0 ? "muted" : (volume <=5 ? "low" : "high")} 
                            setDisplay={setVolumeSliderDisplay} />
                            
                        <VolumeSlider volume={volume} setDisplay={setVolumeSliderDisplay} />
                    </div>
                    <button className="full-screen-button video-player-button" 
                        onClick={()=> setFullScreenMode(fullScreenMode => !fullScreenMode)}
                        aria-label={fullScreenMode ? (language === "french" ? "Quitter le mode plein écran" : "Exit full screen mode") : (language === "french" ? "Passer en mode plein écran": "Go to full screen mode")}>
                        &#9167;
                    </button>
                </div>
            </div>
            <BasicButton frenchText={status === "video" ? "Transcription textuelle" : "Vidéo"} englishText={status === "video" ? "Text transcription" : "Video"} onClickFunction={onTranscriptionButtonClick} />
        </div>
    )
}