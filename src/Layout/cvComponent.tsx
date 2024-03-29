import React from "react";
import CVMainLine from "../Components/cv-main-line.tsx";
import CVSection from "./cvSection.tsx";

interface CVComponentPropsInterface {
    achievments: any,
    diplomas: any,
    languages: any
}

export default function CVComponent({achievments,diplomas,languages}: CVComponentPropsInterface): React.JSX.Element {

    return (
        <div className="cv">
            <CVMainLine />
            <CVSection type="technology" />
            <CVSection type="devTool" />
            <CVSection type="design" />
            <CVSection type="diploma" />
            <CVSection type="language" />
        </div>
    )
}