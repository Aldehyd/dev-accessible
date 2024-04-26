import { useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import EnvironnementContext from "../Contexts/environnement-context.tsx";

export default function EnvironnementToggleButton(): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const [environnement,setEnvironnement] = useState(useContext(EnvironnementContext).environnement);

    const [classNames,setClassNames] = useState<string>(`environnement-toggle-button`);

    useEffect(()=> {
        console.log(environnement)
        setClassNames(`environnement-toggle-button ${environnement === "recruiter" ? "recruiter" : "client"}`);
    },[environnement]);

    return(
        <button className={classNames}>
            <span aria-hidden="true" className="environnement-toggle-button_invisible-text">Recruiter</span>
            <span className="environnement-toggle-button_overflow-container">
                <span aria-hidden="true" className="environnement-toggle-button_invisible-text">Recruiter</span>
                <span className="environnement-toggle-button_text-container">
                    <span className="environnement-toggle-button_recruiter" aria-hidden={environnement === "client" ? "true" : "false"}>
                        {
                            language === "french" ? "Recruteur" : "Recruiter"
                        }
                    </span>
                    <span className="environnement-toggle-button_client" aria-hidden={environnement === "recruiter" ? "true" : "false"}>
                        Client
                    </span>
                </span>
            </span>
        </button>

    )
}