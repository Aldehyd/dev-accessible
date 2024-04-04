import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface AccessibilitySettingsButtonPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function AccessibilitySettingsButton({setDisplay}: AccessibilitySettingsButtonPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <button type="button" className="accessibility-settings-button" onClick={()=> setDisplay(true)}>
            <span className="wheel-symbol"></span>
            {language === "french" ? "Accessibilité" : "Accessibility"}
        </button>
    )
}