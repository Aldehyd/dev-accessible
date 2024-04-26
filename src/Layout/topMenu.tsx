import AnimationToggleButton from "../Components/animation-toggle-button.tsx";
import LanguageSelect from "../Components/language-select.tsx";
import AccessibilityAnalysisIndicator from "../Components/accessibility-analysis-indicator.tsx";
import SearchBar from "../Components/search-bar.tsx";
import AccessibilitySettingsButton from "../Components/accessibility-settings-button.tsx";
import EnvironnementToggleButton from "../Components/environnement-toggle-button.tsx";

interface TopMenuPropsInterface {
    landingPage?: boolean,
    setAccessibilityModalDisplay: (display: boolean)=> void
}

export default function TopMenu({landingPage=false,setAccessibilityModalDisplay}: TopMenuPropsInterface): React.JSX.Element {

    return (
        <div className="top-menu">
            <div className="top-menu_buttons-invisible-container">
                <AccessibilitySettingsButton setDisplay={setAccessibilityModalDisplay} />
                <AnimationToggleButton />
                <LanguageSelect />
                <AccessibilityAnalysisIndicator />
                <SearchBar />
                {!landingPage && <EnvironnementToggleButton />}
            </div>
    </div>
    )
}