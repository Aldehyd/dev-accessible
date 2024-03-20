import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function AccessibilitySettingsButton(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <button type="button" className="accessibility-settings-button">
            <span className="wheel-symbol"></span>
            {language === "french" ? "Accessibilité" : "Accessibility"}
        </button>
    )
}