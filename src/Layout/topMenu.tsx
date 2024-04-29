import AnimationToggleButton from "../Components/animation-toggle-button.tsx";
import LanguageSelect from "../Components/language-select.tsx";
import AccessibilityAnalysisIndicator from "../Components/accessibility-analysis-indicator.tsx";
import SearchBar from "../Components/search-bar.tsx";
import AccessibilitySettingsButton from "../Components/accessibility-settings-button.tsx";
import EnvironnementToggleButton from "../Components/environnement-toggle-button.tsx";

interface TopMenuPropsInterface {
    home?: boolean,
    setAccessibilityModalDisplay: (display: boolean)=> void,
    setLanguageModalDisplay: (display: boolean)=> void,
    setEnvironnementModalDisplay?: (display: boolean)=> void,
    setAccessibilityAnalysisModalDisplay: (display: boolean)=> void
}

export default function TopMenu({home=false,setAccessibilityModalDisplay,setLanguageModalDisplay,setEnvironnementModalDisplay,setAccessibilityAnalysisModalDisplay}: TopMenuPropsInterface): React.JSX.Element {

    return (
        <div className="top-menu">
            <div className="top-menu_buttons-invisible-container">
                <AccessibilitySettingsButton setDisplay={setAccessibilityModalDisplay} />
                <AnimationToggleButton />
                <LanguageSelect setDisplay={setLanguageModalDisplay} />
                <AccessibilityAnalysisIndicator setDisplay={setAccessibilityAnalysisModalDisplay} />
                <SearchBar />
                {home && <EnvironnementToggleButton setDisplay={setEnvironnementModalDisplay} />}
            </div>
    </div>
    )
}