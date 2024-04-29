import ModalLayout from "./modalLayout.tsx";
import { useContext} from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface AccessibilityAnalysisInfosModalPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function AccessibilityAnalysisInfosModal({setDisplay}: AccessibilityAnalysisInfosModalPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return (
        <ModalLayout setDisplay={setDisplay} frenchTitle="Analyse de l'accessibilité" englishTitle="Accessibility analysis">
            <p>
                {
                    language === "french" ?
                        "Le mode analyse de l'accessibilité n'est pas encore disponible."
                        :
                        "Accessibility analysis mode is not available yet."
                }
            </p>
        </ModalLayout>
    )
}