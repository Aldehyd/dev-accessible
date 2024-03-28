import { useCallback, useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CVSkill from "../Components/cv-skill.tsx";
import { diplomas } from "../Datas/diplomas.tsx";
import { languages } from "../Datas/languages.tsx";
import { achievments } from "../Datas/achievments.tsx";

interface CVSectionInterface {
    type: string
}

export default function CVSection({type}: CVSectionInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [sectionTitle,setSectionTitle] = useState<string>("");
    const [technologies,setTechnologies] = useState<{id: string, frenchTitle: string, englishTitle: string, projects: string[]}[]>([]);
    const [designTools,setDesignTools] = useState<{id: string, frenchTitle: string, englishTitle: string, projects: string[]}[]>([]);

    const addTechnoToTechnologies : (technosType: string, technologies: {id: string, frenchTitle: string, englishTitle: string, projects: string[]}[])=>void = (technosType,technologies) => {
        for(let achievment of achievments) {
            for(let techno of achievment.technologies[technosType]) {
                let isAlreadyInTechnologies = false;
                for(let technology of technologies) {
                    if(technology.englishTitle === techno) {
                        isAlreadyInTechnologies = true;
                    };
                };
                if(!isAlreadyInTechnologies) {
                    technologies.push({id: techno, frenchTitle: techno, englishTitle: techno, projects: [achievment.title]});
                } else {
                    let technologyToModify = technologies.find(tech => tech.id === techno);
                    technologyToModify?.projects.push(achievment.title);
                };
            };
        };
    };

    const addToolToDesignTools : ()=>void = () => {
        let designTools : {id: string, frenchTitle: string, englishTitle: string, projects: string[]}[] = [];
        for(let achievment of achievments) {
            for(let tool of achievment.design.tools) {
                let isAlreadyInTools = false;
                for(let designTool of designTools) {
                    if(designTool.englishTitle === tool) {
                        isAlreadyInTools = true;
                    };
                };
                if(!isAlreadyInTools) {
                    designTools.push({id: tool, frenchTitle: tool, englishTitle: tool, projects: [achievment.title]});
                } else {
                    let toolToModify = designTools.find(dTool => dTool.id === tool);
                    toolToModify?.projects.push(achievment.title);
                };
            };
        };
        setDesignTools(designTools);
    };

    const setTechnologiesForCV :()=> void = useCallback(()=> {
        let technologies : {id: string, frenchTitle: string, englishTitle: string, projects: string[]}[] = [];
        addTechnoToTechnologies("frontEnd",technologies);
        addTechnoToTechnologies("backEnd",technologies);
        addTechnoToTechnologies("dataBase",technologies);

        setTechnologies(technologies);
    },[]);

    useEffect(()=> {
        switch(type) {
            case "technology":
                setSectionTitle("Technologies");
                setTechnologiesForCV();
                break;
            case "design":
                language === "french" ? setSectionTitle("Outils de design") : setSectionTitle("Design tools");
                addToolToDesignTools();
                break;
            case "diploma":
                language === "french" ? setSectionTitle("Diplômes") : setSectionTitle("Diplomas");
                break;
            case "language":
                language === "french" ? setSectionTitle("Langues") : setSectionTitle("Languages");
                break;
            default:
                break;
        };
    },[language,setSectionTitle,type,setTechnologiesForCV]);

    const classList = `cv_section_list-container ${type === "language" || type === "diploma" ? "col" : ""}`;

    return (
        <div className="cv_section">
            <h2>{sectionTitle}</h2>
            <ul className={classList}>
                {
                    type === "technology" && technologies.map(skill => 
                        <li key={skill.id}>
                            <CVSkill skill={skill} type={type} />
                        </li>
                    )
                }
                {
                    type === "design" && designTools.map(skill => 
                        <li key={skill.id}>
                            <CVSkill skill={skill} type={type} />
                        </li>
                    )
                }
                {
                    type === "diploma" && diplomas.map(skill => 
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