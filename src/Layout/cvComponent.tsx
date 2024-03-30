import React from "react";
import CVMainLine from "../Components/cv-main-line.tsx";
import CVSection from "./cvSection.tsx";
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";
import DiplomaInterface from "../Interfaces/diplomaInterface.tsx";
import LanguageInterface from "../Interfaces/languageInterface.tsx";

interface CVComponentPropsInterface {
    achievments: AchievmentInterface[],
    diplomas: DiplomaInterface[],
    languages: LanguageInterface[]
}

export default function CVComponent({achievments,diplomas,languages}: CVComponentPropsInterface): React.JSX.Element {
    console.log(achievments)
    return (
        <div className="cv">
            <CVMainLine />
            <CVSection type="technology" achievments={achievments} diplomas={diplomas} languages={languages} />
            <CVSection type="devTool" achievments={achievments} diplomas={diplomas} languages={languages} />
            <CVSection type="design" achievments={achievments} diplomas={diplomas} languages={languages} />
            <CVSection type="diploma" achievments={achievments} diplomas={diplomas} languages={languages} />
            <CVSection type="language" achievments={achievments} diplomas={diplomas} languages={languages} />
        </div>
    )
}