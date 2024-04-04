import AnimationToggleButton from "../Components/animation-toggle-button.tsx";
import LanguageSelect from "../Components/language-select.tsx";
import AccessibilityAnalysisIndicator from "../Components/accessibility-analysis-indicator.tsx";
import SearchBar from "../Components/search-bar.tsx";

export default function TopMenu(): React.JSX.Element {

    return (
        <div className="top-menu">
            <div className="top-menu_buttons-invisible-container">

                <AnimationToggleButton />
                <LanguageSelect />
                <AccessibilityAnalysisIndicator />
                <SearchBar />
            </div>
    </div>
    )
}