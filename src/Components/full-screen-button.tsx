import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface FullScreenButtonPropsInterface {
    fullScreenMode: boolean,
    setFullScreenMode: (mode: boolean)=> void
}

export default function FullScreenButton({fullScreenMode,setFullScreenMode}: FullScreenButtonPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return (
        <button className="full-screen-button video-player-button" 
            onClick={()=> setFullScreenMode(fullScreenMode => !fullScreenMode)}
            aria-label={fullScreenMode ? (language === "french" ? "Quitter le mode plein écran" : "Exit full screen mode") : (language === "french" ? "Passer en mode plein écran": "Go to full screen mode")}>
            {
                fullScreenMode ?
                    <svg className="full-screen-button_icon full-screen-button_icon--leave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 142.04 132.65">
                        <polyline className="cls-1" points="60.02 121.39 60.02 77.57 14.97 77.57"/>
                        <polyline className="cls-1" points="82.55 14.96 82.55 58.78 127.6 58.78"/>
                    </svg>
                    :
                    <svg className="full-screen-button_icon full-screen-button_icon--enter" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 94.7 88.4" >
                        <line className="st0" x1="-445.8" y1="-35.3" x2="-389.3" y2="21.2"/>
                        <line className="st0" x1="-389.3" y1="-35.3" x2="-445.8" y2="21.2"/>
                        <line className="st0" x1="-175.1" y1="76.2" x2="-212.2" y2="113.3"/>
                        <line className="st0" x1="-174.4" y1="76.9" x2="-137.3" y2="114"/>
                        <path d="M-289.5,195.4l-53.3-30.8c-9.2-5.3-20.8,1.3-20.8,12v61.6c0,10.7,11.5,17.3,20.8,12l53.3-30.8
                            C-280.3,214.1-280.3,200.7-289.5,195.4z"/>
                        <path d="M46.5,332.3l-69.6-40.2c-5.6-3.2-12.7,0.8-12.7,7.3v80.3c0,6.5,7,10.6,12.7,7.3L46.5,347C52.1,343.7,52.1,335.6,46.5,332.3z
                            "/>
                        <polyline className="st1" points="14.1,33.7 14.1,77.5 59.1,77.5 "/>
                        <polyline className="st1" points="81.7,55.6 81.7,11.7 36.6,11.7 "/>
                    </svg>
            
            }
        </button>
    )
}