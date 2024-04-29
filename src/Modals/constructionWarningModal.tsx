import ModalLayout from "./modalLayout.tsx";
import { useContext} from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import BasicButton from "../Components/basic-button.tsx";

interface ConstructionWarningModalPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function ConstructionWarningModal({setDisplay}: ConstructionWarningModalPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const onClickFunction = ()=> {
        setDisplay(false);
    };

    return (
        <div className="warning-modal-container">
            <ModalLayout setDisplay={setDisplay} frenchTitle="Avertissement" englishTitle="Warning">
                <p>
                    {
                        language === "french" ?
                            "Le site est actuellement en construction !"
                            :
                            "The site is currently under construction !"
                    }
                </p>
                <p>
                    {
                        language === "french" ?
                            "Certaines fonctionnalités ne sont pas encore disponibles."
                            :
                            "Some functionnalities are not available yet."
                    }
                </p>
                <div className="confirm-modal_buttons-container">
                    <BasicButton frenchText="J'ai compris" englishText="I understand" onClickFunction={()=> onClickFunction()} />
                </div>
            </ModalLayout>
        </div>
    )
}