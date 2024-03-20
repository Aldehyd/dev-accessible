export default function AccessibilityAnalysisIndicator(): React.JSX.Element {
    return(
        <div className="accessibility-analysis-indicator on animations">
            <button type="button" className="accessibility-analysis-toggle-button" aria-disabled="true">
                <p className="accessibility-analysis-toggle-button_on">Analyse accessibilité <span lang="en">ON</span></p>
                <p className="accessibility-analysis-toggle-button_off">Analyse accessibilité <span lang="en">OFF</span></p>
            </button>
            <button type="button" className="accessibility-analysis-help-button">
                <span>?</span>
            </button>
        </div>
    )
}