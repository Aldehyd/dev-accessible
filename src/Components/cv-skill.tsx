import { useContext, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import InfosDialog from "../Layout/infosDialog.tsx";

interface CVSkillPropsInterface {
    skill: any,
    type: string
}

export default function CVSkill({skill,type}: CVSkillPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [displayInfoDialog,setDisplayInfoDialog] = useState<boolean>(false);

    return (
        <div className="cv_skill-container">
            <button className="cv_skill" aria-expanded={displayInfoDialog ? "true" : "false"} aria-haspopup='true'>
                {language === 'french' ? skill.frenchTitle : skill.englishTitle}
            </button>
            {displayInfoDialog && <InfosDialog skill={skill} type={type} setDisplayInfoDialog={setDisplayInfoDialog} />}
        </div>
    )
}