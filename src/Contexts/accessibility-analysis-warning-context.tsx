import {createContext} from 'react';

interface AccessibilityAnalysisWarningContextPropsInterface {
    accessibilityAnalysisWarning: boolean,
    changeAccessibilityAnalysisWarning: (accessibilityAnalysisWarning: boolean)=> void
}

const AccessibilityAnalysisWarningContext = createContext<AccessibilityAnalysisWarningContextPropsInterface>({accessibilityAnalysisWarning: false});

export default AccessibilityAnalysisWarningContext;