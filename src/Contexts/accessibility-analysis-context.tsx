import {createContext} from 'react';

interface AccessibilityAnalysisContextInterface {
    accessibilityAnalysis: boolean,
    changeAccessibilityAnalysis: (accessibilityAnalysis: boolean)=> void
}

const AccessibilityAnalysisContext = createContext<AccessibilityAnalysisContextInterface>({accessibilityAnalysis: false});

export default AccessibilityAnalysisContext;