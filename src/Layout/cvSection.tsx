import { useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CVSkill from "../Components/cv-skill.tsx";
import { diplomas } from "../Datas/diplomas.tsx";
import { languages } from "../Datas/languages.tsx";

interface CVSectionInterface {
    type: string
}

export default function CVSection({type}: CVSectionInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [sectionTitle,setSectionTitle] = useState<string>("");

    useEffect(()=> {
        switch(type) {
            case "diploma":
                language === "french" ? setSectionTitle("Diplômes") : setSectionTitle("Diplomas");
                break;
            case "language":
                language === "french" ? setSectionTitle("Langues") : setSectionTitle("Languages");
                break;
            default:
                break;
        };
    },[]);

    return (
        <div className="cv_section">
            <h2>{sectionTitle}</h2>
            <ul className="list-container">
                {
                    type === "dipoma" && diplomas.map(skill => 
                        <li key={skill.id}>
                            <CVSkill skill={skill} type={type} />
                        </li>
                    )
                }
                {
                    type === "language" && languages.map(skill => 
                        <li key={skill.id}>
                            <CVSkill skill={skill} type={type} />
                        </li>
                    )
                }
            </ul>
        </div>
    )
}