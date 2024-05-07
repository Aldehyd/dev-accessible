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

    const videoPlayerElement = useRef<HTMLElement | null>(null);
    const videoElement = useRef<HTMLVideoElement | null>(null);
    const controlBar = useRef<HTMLElement | null>(null);
    const controlBarHide = useRef<typeof setTimeout | null>(null);

    const [status,setStatus] = useState<string>("video");
    const [fullScreenMode,setFullScreenMode] = useState<boolean>(false);
    const [isPlaying,setIsPlaying] = useState<boolean>(false);
    const [currentTime,setCurrentTime] = useState<number>(0);
    const [currentTimeInMinutesAndSeconds,setCurrentTimeInMinutesAndSeconds] = useState({minutes: 0, seconds: 0});
    const [isVideoEnded,setIsVideoEnded] = useState<boolean>(false);
    const [volume,setVolume] = useState<number>(0);
    const [volumeSliderDisplay,setVolumeSliderDisplay] = useState<boolean>(false);
    const [mouseOverControlBar,setMouseOverControlBar] = useState<boolean>(false);

    const convertInMinutesAndSeconds : (value: number)=> {minutes: number, seconds: number} = (value)=> {
        let minutes = Math.floor(value / 60);
        let seconds = Math.floor(value % 60);

        return {minutes: minutes, seconds: seconds};
    };

    const onTranscriptionButtonClick = ()=> {
        status === "video" ? setStatus("transcription") : setStatus("video");
    };

    const onPlayButtonClick = ()=> {
        if(isVideoEnded) {
            if(videoElement.current)
                videoElement.current.currentTime = 0;
            setIsVideoEnded(false);
        };
        setIsPlaying(isPlaying => !isPlaying);
    };

    const onVideoClick = ()=> {
        if(isPlaying) {
            setIsPlaying(false);
        } else if(currentTime !== 0) {
            setIsPlaying(true);
        };
    };

    const hideControlBar = ()=> {
        setTimeout(()=> {
            if(controlBar.current && !mouseOverControlBar) {
                controlBar.current.classList.remove('display');
            };
        },200);      
        if(controlBarHide.current)
            clearTimeout(controlBarHide.current);
    };

    const showControlBar = ()=> {
        if(status === "video") {
            if(controlBar.current) {
                clearTimeout(controlBarHide.current);
                controlBar.current?.classList.add('display');
                controlBarHide.current = setTimeout(()=> {
                    hideControlBar();
                },4000);
            };
        };
    };

    const handleTimeUpdate = ()=> {
        if(videoElement.current)
            setCurrentTime(videoElement.current.currentTime);
    };

    const handleKeyDown = (e)=> {
        switch(e.key) {
            case " ":
                e.preventDefault();
                if(isPlaying && videoElement.current) {
                    videoElement.current.pause();
                    setIsPlaying(false);
                } else if(videoElement.current){
                    videoElement.current.play();
                    setIsPlaying(true);
                };
                break;
            default:
                break;
        };
    };

    const volumeClassList = `video-player_control-bar_volume ${volumeSliderDisplay ? "display" : ""}`;
    const transcriptionClassList = `video-player_transcription ${status === "transcription" ? "display" : ""}`;
    const videoClassList = `video-player_video ${status === "video" ? "display" : ""}`;

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
        if(videoElement.current) {
            if(videoElement.current.currentTime === videoElement.current.duration) {
                setIsVideoEnded(true);
            };
            setCurrentTime(videoElement.current.currentTime);
        };
    },[videoElement.current?.currentTime]);

    useEffect(()=> {
        setCurrentTimeInMinutesAndSeconds(convertInMinutesAndSeconds(currentTime));
    },[currentTime]);

    useEffect(()=> {
        if(videoElement.current)
            videoElement.current.volume = volume;
    },[volume]);

    useEffect(()=> {
        if(isVideoEnded) {
            setIsPlaying(false);
        }
    },[isVideoEnded]);

    useEffect(()=> {
        if(status === "transcription") {
            setIsPlaying(false);
            hideControlBar();
        };
    },[status]);

    useEffect(()=> {
        if(mouseOverControlBar) {
            clearTimeout(controlBarHide.current);
        } else {
            showControlBar();
        };
    },[mouseOverControlBar]);

    return(
        <div className="video-container">
            <h2 className="video-title">
                {language === "french" ? video.frenchTitle : video.englishTitle}
            </h2>
            <div className="video-player" ref={videoPlayerElement} onKeyDown={(e)=> handleKeyDown(e)}
                onMouseOver={()=> showControlBar()} onMouseMove={()=> showControlBar()}
                onMouseLeave={()=> hideControlBar()} tabIndex={0}>
                <div className={transcriptionClassList}>
                    <p>{language === "french" ? video.frenchTranscription : video.englishTranscription}</p>
                </div>
                <div className={videoClassList} onClick={onVideoClick}>
                    <video ref={videoElement} tabIndex={0} onTimeUpdate={()=> handleTimeUpdate()}>
                        <source src={"/videos/" + video.videoName + ".mp4"} type="video/mp4" />
                    </video>
                    {!isPlaying && currentTime === 0 && 
                        <img src={"img/" + video.pictureName + ".JPG"} alt={language === "french" ? video.pictureFrenchAlt : video.pictureEnglishAlt} className="video-player_background" />
                    }
                    {!isPlaying && currentTime === 0 && 
                        <MainPlayButton onPlayButtonClick={onPlayButtonClick} />
                    }
                </div>
                
                <div className="video-player_control-bar" ref={controlBar}
                    onMouseOver={()=> setMouseOverControlBar(true)}
                    onFocus={()=> setMouseOverControlBar(true)}
                    onMouseLeave={()=> setMouseOverControlBar(false)}
                    onBlur={()=> setMouseOverControlBar(false)}
                    >
                    <div className="video-player_control-bar_timeline">
                        <PlayButton onPlayButtonClick={onPlayButtonClick} isPlaying={isPlaying} />
                        <TimeSlider video={video} videoElement={videoElement} 
                            currentValue={currentTime} setCurrentValue={setCurrentTime} 
                            currentValueMinutesAndSeconds={convertInMinutesAndSeconds(currentTime)}
                            convertInMinutesAndSeconds={convertInMinutesAndSeconds} />
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