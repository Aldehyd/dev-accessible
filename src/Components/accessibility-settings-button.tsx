import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface AccessibilitySettingsButtonPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function AccessibilitySettingsButton({setDisplay}: AccessibilitySettingsButtonPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <button type="button" className="accessibility-settings-button" onClick={()=> setDisplay(true)}>
            
            <svg className="settings-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 128.3 129.9">
                <line className="st0" x1="-138.2" y1="-320.2" x2="-81.7" y2="-263.7"/>
                <line className="st0" x1="-81.7" y1="-320.2" x2="-138.2" y2="-263.7"/>
                <line className="st0" x1="132.5" y1="-208.6" x2="95.4" y2="-171.6"/>
                <line className="st0" x1="133.2" y1="-208" x2="170.3" y2="-170.9"/>
                <path d="M18-89.5l-53.3-30.8c-9.2-5.3-20.8,1.3-20.8,12v61.6c0,10.7,11.5,17.3,20.8,12L18-65.5C27.2-70.8,27.2-84.1,18-89.5z"/>
                <path d="M354,47.5L284.5,7.3c-5.6-3.2-12.7,0.8-12.7,7.3V95c0,6.5,7,10.6,12.7,7.3L354,62.1C359.7,58.8,359.7,50.7,354,47.5z"/>
                <polyline className="st1" points="321.7,-251.2 321.7,-207.4 366.7,-207.4 "/>
                <polyline className="st1" points="389.2,-229.3 389.2,-273.1 344.2,-273.1 "/>
                <circle className="st1" cx="77.9" cy="-291.5" r="22.3"/>
                <line className="st2" x1="118.8" y1="-249" x2="95.6" y2="-272.2"/>
                <circle className="st2" cx="65.5" cy="67.9" r="34.6"/>
                <path d="M71.8,34.2H60c-2.5,0-4.5-2-4.5-4.5V17.8c0-2.5,2-4.5,4.5-4.5h11.8c2.5,0,4.5,2,4.5,4.5v11.8C76.4,32.2,74.3,34.2,71.8,34.2
                    z"/>
                <path d="M71.8,123.4H60c-2.5,0-4.5-2-4.5-4.5v-11.8c0-2.5,2-4.5,4.5-4.5h11.8c2.5,0,4.5,2,4.5,4.5v11.8
                    C76.4,121.4,74.3,123.4,71.8,123.4z"/>
                <path d="M116.5,78.3h-11.8c-2.5,0-4.5-2-4.5-4.5V62c0-2.5,2-4.5,4.5-4.5h11.8c2.5,0,4.5,2,4.5,4.5v11.8
                    C121.1,76.3,119,78.3,116.5,78.3z"/>
                <path d="M96,109.8l-8.4-8.4c-1.8-1.8-1.8-4.6,0-6.4l8.4-8.4c1.8-1.8,4.6-1.8,6.4,0l8.4,8.4c1.8,1.8,1.8,4.6,0,6.4l-8.4,8.4
                    C100.7,111.5,97.8,111.5,96,109.8z"/>
                <path d="M29.8,49.1l-8.4-8.4c-1.8-1.8-1.8-4.6,0-6.4l8.4-8.4c1.8-1.8,4.6-1.8,6.4,0l8.4,8.4c1.8,1.8,1.8,4.6,0,6.4l-8.4,8.4
                    C34.4,50.9,31.6,50.9,29.8,49.1z"/>
                <path d="M93.6,49.1l-8.4-8.4c-1.8-1.8-1.8-4.6,0-6.4l8.4-8.4c1.8-1.8,4.6-1.8,6.4,0l8.4,8.4c1.8,1.8,1.8,4.6,0,6.4l-8.4,8.4
                    C98.2,50.9,95.3,50.9,93.6,49.1z"/>
                <path d="M29.8,112.9l-8.4-8.4c-1.8-1.8-1.8-4.6,0-6.4l8.4-8.4c1.8-1.8,4.6-1.8,6.4,0l8.4,8.4c1.8,1.8,1.8,4.6,0,6.4l-8.4,8.4
                    C34.4,114.7,31.6,114.7,29.8,112.9z"/>
                <path d="M26.4,78.3H14.6c-2.5,0-4.5-2-4.5-4.5V62c0-2.5,2-4.5,4.5-4.5h11.8c2.5,0,4.5,2,4.5,4.5v11.8C30.9,76.3,28.9,78.3,26.4,78.3
                    z"/>
            </svg>

            {language === "french" ? "Accessibilité" : "Accessibility"}
        </button>
    )
}