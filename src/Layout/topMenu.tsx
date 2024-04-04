import AnimationToggleButton from "../Components/animation-toggle-button.tsx";
import LanguageSelect from "../Components/language-select.tsx";
import AccessibilityAnalysisIndicator from "../Components/accessibility-analysis-indicator.tsx";
import SearchBar from "../Components/search-bar.tsx";
import AccessibilitySettingsButton from "../Components/accessibility-settings-button.tsx";

interface TopMenuPropsInterface {
    setAccessibilityModalDisplay: (display: boolean)=> void
}

export default function TopMenu({setAccessibilityModalDisplay}: TopMenuPropsInterface): React.JSX.Element {

    return (
        <div className="top-menu">
            <div className="top-menu_buttons-invisible-container">
                <AccessibilitySettingsButton setDisplay={setAccessibilityModalDisplay} />
                <AnimationToggleButton />
                <LanguageSelect />
                <AccessibilityAnalysisIndicator />
                <SearchBar />
            </div>
    </div>
    )
}