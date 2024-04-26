import ModalLayout from "./modalLayout.tsx";
import { useContext} from "react";
import EnvironnementContext from "../Contexts/environnement-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import BasicButton from "../Components/basic-button.tsx";

interface EnvironnementModalPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function EnvironnementModal({setDisplay}: EnvironnementModalPropsInterface): React.JSX.Element {

    const {environnement,changeEnvironnement} = useContext(EnvironnementContext);
    const {language} = useContext(LanguageContext);

    const onClickFunction = ()=> {
        changeEnvironnement(environnement === "recruiter" ? "client" : "recruiter");
        localStorage.setItem("environnement",environnement === "recruiter" ? "client" : "recruiter");
        setDisplay(false);
    };

    return (
        <ModalLayout setDisplay={setDisplay} frenchTitle="Version" englishTitle="Version">
            {
                language === "french" ?
                    <p>
                        {`Vous naviguez actuellement dans la version ${environnement === "recruiter" ? "recruteur" : "client"}, souhaitez-vous basculer dans la version ${environnement === "recruiter" ? "client" : "recruteur"} ?`}
                    </p>
                    :
                    <p>
                        {`You are currently in the ${environnement} version, do you want to switch in the ${environnement === "recruiter" ? "client" : "recruteur"} version ?`}
                    </p>
            }
            <div className="confirm-modal_buttons-container">
                <BasicButton frenchText="Oui" englishText="Yes" onWhiteBackground={true} onClickFunction={()=> onClickFunction()} />
                <BasicButton frenchText="Non" englishText="No" onWhiteBackground={true} onClickFunction={()=> setDisplay(false)} />
            </div>
        </ModalLayout>
    )
}