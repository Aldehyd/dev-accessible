import ModalLayout from "./modalLayout.tsx";
import { useContext} from "react";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import BasicButton from "../Components/basic-button.tsx";

interface AccessibilityAnalysisModalPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function AccessibilityAnalysisModal({setDisplay}: AccessibilityAnalysisModalPropsInterface): React.JSX.Element {

    const {changeAccessibilityAnalysis} = useContext(AccessibilityAnalysisContext);
    const {language} = useContext(LanguageContext);

    const onClickFunction = ()=> {
        changeAccessibilityAnalysis(true);
        setDisplay(false);
    };

    return (
        <ModalLayout setDisplay={setDisplay} frenchTitle="Analyse de l'accessibilité" englishTitle="Accessibility analysis">
            {
                language === "french" ?
                    <p>
                        {`Voulez-vous activer le mode analyse de l'accessibilité ?`}
                    </p>
                    :
                    <p>
                        {`Do you want to activate the accessibility analysis mode ?`}
                    </p>
            }
            <div className="confirm-modal_buttons-container">
                <BasicButton frenchText="Oui" englishText="Yes" onWhiteBackground={true} onClickFunction={()=> onClickFunction()} />
                <BasicButton frenchText="Non" englishText="No" onWhiteBackground={true} onClickFunction={()=> setDisplay(false)} />
            </div>
        </ModalLayout>
    )
}