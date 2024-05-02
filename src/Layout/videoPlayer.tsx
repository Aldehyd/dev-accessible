import { useContext, useEffect, useRef, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import TimeSlider from "../Components/time-slider.tsx";
import TimeCount from "../Components/time-count.tsx";
import BasicButton from "../Components/basic-button.tsx";
import VideoInterface from "../Interfaces/videoInterface.tsx";
import VolumeSlider from "../Components/volume-slider.tsx";
import VolumeButton from "../Components/volume-button.tsx";
import FullScreenButton from "../Components/full-screen-button.tsx";
import PlayButton from "../Components/play-button.tsx";
import MainPlayButton from "../Components/main-play-button.tsx";

interface VideoPlayerPropsInterface {
    video: VideoInterface
}

export default function VideoPlayer({video}: VideoPlayerPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const videoPlayerElement = useRef(null);
    const videoElement = useRef(null);
    const controlBar = useRef(null);
    const controlBarHide = useRef(null);

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
        clearTimeout(controlBarHide.current);
        controlBar.current?.classList.add('display');
        controlBarHide.current = setTimeout(()=> {
            controlBar.current.classList.remove('display');
        },4000);
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
            videoElement.current?.pause();
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
        videoElement.current.volume = volume;
    },[volume]);

    useEffect(()=> {
        if(status === "video") {
            videoPlayerElement.current?.addEventListener('mouseover',()=> showControlBar());
            videoPlayerElement.current?.addEventListener('mousemove',()=> showControlBar());
            videoPlayerElement.current?.addEventListener('mouseleave',()=> hideControlBar());
        } else {
            videoPlayerElement.current?.removeEventListener('mouseover',showControlBar);
            clearTimeout(controlBarHide.current);
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
                        {!isPlaying && currentTime === 0 && 
                            <img src={"img/" + video.pictureName + ".JPG"} alt={language === "french" ? video.pictureFrenchAlt : video.pictureEnglishAlt} className="video-player_background" />
                        }
                        {!isPlaying && 
                            <MainPlayButton onPlayButtonClick={onPlayButtonClick} />
                        }
                    </div>
                }
                
                <div className="video-player_control-bar" ref={controlBar}
                    onMouseOver={()=> clearTimeout(controlBarHide.current)}
                    onFocus={()=> clearTimeout(controlBarHide.current)}
                    >
                    <div className="video-player_control-bar_timeline">
                        <PlayButton onPlayButtonClick={onPlayButtonClick} isPlaying={isPlaying} />
                        <TimeSlider videoElement={videoElement} duration={videoElement.current?.duration} currentValue={currentTime} setCurrentValue={setCurrentTime} currentValueMinutesAndSeconds={convertInMinutesAndSeconds(currentTime)} />
                    </div>
                    <TimeCount currentTime={currentTimeInMinutesAndSeconds} duration={convertInMinutesAndSeconds(videoElement.current?.duration)} />
                    <div className={volumeClassList} >
                        <VolumeButton volume={volume}
                            setVolume={setVolume} setDisplay={setVolumeSliderDisplay} />
                            
                        <VolumeSlider volume={volume} setVolume={setVolume} setDisplay={setVolumeSliderDisplay} />
                    </div>
                    <FullScreenButton fullScreenMode={fullScreenMode} setFullScreenMode={setFullScreenMode} />
                </div>
            </div>
            <BasicButton frenchText={status === "video" ? "Transcription textuelle" : "Vidéo"} englishText={status === "video" ? "Text transcription" : "Video"} onClickFunction={onTranscriptionButtonClick} />
        </div>
    )
}