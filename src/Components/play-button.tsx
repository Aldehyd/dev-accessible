import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function PlayButton({onPlayButtonClick,isPlaying}):React.JSX.Element {

    const classList = `play-button video-player-button ${isPlaying ? "pause" : "play"}`;

    const {language} = useContext(LanguageContext);

    return (
        <button className={classList}
            onClick={()=> onPlayButtonClick()}
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
    )
}