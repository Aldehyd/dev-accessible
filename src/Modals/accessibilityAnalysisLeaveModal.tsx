import ModalLayout from "./modalLayout.tsx";
import { useContext} from "react";
import AccessibilityAnalysisContext from "../Contexts/accessibility-analysis-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import BasicButton from "../Components/basic-button.tsx";

interface AccessibilityAnalysisLeaveModalPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function AccessibilityAnalysisLeaveModal({setDisplay}: AccessibilityAnalysisLeaveModalPropsInterface): React.JSX.Element {

    const {changeAccessibilityAnalysis} = useContext(AccessibilityAnalysisContext);
    const {language} = useContext(LanguageContext);

    const onClickFunction = ()=> {
        changeAccessibilityAnalysis(false);
        setDisplay(false);
    };

    return (
        <ModalLayout setDisplay={setDisplay} frenchTitle="Analyse de l'accessibilité" englishTitle="Accessibility analysis">
            {
                language === "french" ?
                    <>
                        <p>Les liens et boutons ne fonctionnent plus dans le mode analyse de l'accessibilité.</p>
                        <p>Souhaitez-vous quitter le mode analyse de l'accessibilité ?</p>
                    </>
                    :
                    <>
                        <p>Links and buttons are disabled in analysis accessibility mode.</p>
                        <p>Do you want to leave accessibility analysis mode ?</p>
                    </>
            }
            <div className="confirm-modal_buttons-container">
                <BasicButton frenchText="Oui" englishText="Yes" onWhiteBackground={true} onClickFunction={()=> onClickFunction()} />
                <BasicButton frenchText="Non" englishText="No" onWhiteBackground={true} onClickFunction={()=> setDisplay(false)} />
            </div>
        </ModalLayout>
    )
}