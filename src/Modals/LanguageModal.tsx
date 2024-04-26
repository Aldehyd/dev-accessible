import ModalLayout from "./modalLayout.tsx";
import { useContext} from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import BasicButton from "../Components/basic-button.tsx";

interface LanguageModalPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function LanguageModal({setDisplay}: LanguageModalPropsInterface): React.JSX.Element {

    const {language,changeLanguage} = useContext(LanguageContext);

    const onClickFunction = ()=> {
        changeLanguage(language === "french" ? "english" : "french");
        localStorage.setItem("language",language === "french" ? "english" : "french");
        setDisplay(false);
    };

    return (
        <ModalLayout setDisplay={setDisplay} frenchTitle="Langue" englishTitle="Language">
            <p>
                {
                    language === "french" ?
                        "Souhaitez-vous traduire le contenu du site en anglais ?"
                        :
                        "Do you want to translate site content in french ?"
                }
            </p>
            <div className="confirm-modal_buttons-container">
                <BasicButton frenchText="Oui" englishText="Yes" onWhiteBackground={true} onClickFunction={()=> onClickFunction()} />
                <BasicButton frenchText="Non" englishText="No" onWhiteBackground={true} onClickFunction={()=> setDisplay(false)} />
            </div>
        </ModalLayout>
    )
}