import { useCallback, useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CVSkill from "../Components/cv-skill.tsx";
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";
import DiplomaInterface from "../Interfaces/diplomaInterface.tsx";
import LanguageInterface from "../Interfaces/languageInterface.tsx";
import { addTechnoToTechnologies } from "../Functions/addTechnoToTechnologies.tsx";

interface CVSectionInterface {
    type: string,
    achievments: AchievmentInterface[],
    diplomas: DiplomaInterface[],
    languages: LanguageInterface[]
}

export default function CVSection({type,achievments,diplomas,languages}: CVSectionInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);
  
    const [sectionTitle,setSectionTitle] = useState<string>("");
    const [technologies,setTechnologies] = useState<{id: string, frenchTitle: string, englishTitle: string, projects: string[]}[]>([]);
    const [designTools,setDesignTools] = useState<{id: string, frenchTitle: string, englishTitle: string, projects: string[]}[]>([]);
    const [devTools,setDevTools] = useState<{id: string, frenchTitle: string, englishTitle: string, projects: string[]}[]>([]);

    const addToolToDevTools : (achievments: AchievmentInterface[])=>void = useCallback((achievments) => {
        let devTools : {id: string, frenchTitle: string, englishTitle: string, projects: string[]}[] = [];
        for(let achievment of achievments) {
            if(achievment.developmentTools)
                for(let tool of achievment.developmentTools) {
                    let isAlreadyInTools = false;
                    for(let devTool of devTools) {
                        if(devTool.englishTitle === tool) {
                            isAlreadyInTools = true;
                        };
                    };
                    if(!isAlreadyInTools) {
                        devTools.push({id: tool, frenchTitle: tool, englishTitle: tool, projects: [achievment.title]});
                    } else {
                        let toolToModify = devTools.find(dTool => dTool.id === tool);
                        toolToModify?.projects.push(achievment.title);
                    };
                };
        };
        setDevTools(devTools);
    },[]);

    const addToolToDesignTools : (achievments: AchievmentInterface[])=>void = (achievments) => {
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
        addTechnoToTechnologies("frontEnd",technologies,achievments);
        addTechnoToTechnologies("backEnd",technologies,achievments);
        addTechnoToTechnologies("dataBase",technologies,achievments);

        setTechnologies(technologies);
    },[achievments]);

    useEffect(()=> {
        switch(type) {
            case "technology":
                setSectionTitle("Technologies");
                setTechnologiesForCV();
                break;
            case "devTool":
                language === "french" ? setSectionTitle("Outils de développement") : setSectionTitle("Development tools");
                addToolToDevTools(achievments);
                break;
            case "design":
                language === "french" ? setSectionTitle("Outils de design") : setSectionTitle("Design tools");
                addToolToDesignTools(achievments);
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
    },[achievments,language,setSectionTitle,type,setTechnologiesForCV,addToolToDevTools]);

    const classList = `cv_section_list-container ${type === "language" || type === "diploma" ? "col" : ""}`;

    return (
        <div className="cv_section">
            <h2 className="cv_section_title">{sectionTitle}</h2>
            <ul className={classList}>
                {
                    type === "technology" && technologies.map(skill => 
                        <li key={skill.id}>
                            <CVSkill skill={skill} type={type} />
                        </li>
                    )
                }
                {
                    type === "devTool" && devTools.map(skill => 
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