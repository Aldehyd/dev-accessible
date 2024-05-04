import { useContext, useEffect, useState } from "react";
import BasicPicture from "../Components/basic-picture.tsx";
import CustomLink from "../Components/custom-link.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";
import EnvironnementContext from "../Contexts/environnement-context.tsx";
interface AchievmentSectionPropsInterface {
    achievment: AchievmentInterface,
}

export default function AchievmentSection({achievment}: AchievmentSectionPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);
    const {environnement} = useContext(EnvironnementContext);

    const [technologiesList,setTechnologiesList] = useState<string>("");
    const [toolsList,setToolsList] = useState<string>("");

    useEffect(()=> {
        const technologiesArray = [...achievment.technologies.frontEnd,...achievment.technologies.backEnd,...achievment.technologies.dataBase];
        let technologiesList = "";
        for(let techno of technologiesArray) {
            if(technologiesArray.indexOf(techno) !== technologiesArray.length-1) {
                technologiesList = technologiesList + techno + ", ";
            } else {
                technologiesList = technologiesList + techno;
            };
        };
        setTechnologiesList(technologiesList);

        let toolsList = "";
        for(let tool of achievment.developmentTools) {
            if(achievment.developmentTools.indexOf(tool) !== achievment.developmentTools.length-1) {
                toolsList = toolsList + tool + ", ";
            } else {
                toolsList = toolsList + tool;
            };
        };
        setToolsList(toolsList);
    },[]);

    return(
        <section className="achievment-section">
            <h2>
                <a href={achievment.websiteLink} target="blank">{achievment.title}</a>
            </h2>
            <BasicPicture imageName={achievment.imageName} frenchAlt={achievment.frenchAlt} englishAlt={achievment.englishAlt} orientation={achievment.englishType === "Mobile application" ? "portrait" : "landscape"} />

            <div className="achievment-section_text-content">
                <dl>
                    <dt>Type :</dt>
                    <dd>{language === "french" ? achievment.frenchType : achievment.englishType}</dd>

                    <dt>{language === "french" ? "Année de réalisation" : "Year"} :</dt>
                    <dd>{achievment.year}</dd>

                    <dt>{language === "french" ? "Besoins" : "Need"} :</dt>
                    <dd>{language === "french" ? achievment.frenchNeed : achievment.englishNeed}</dd>

                    {
                        environnement === "recruiter" &&
                        <>
                            <dt>{language === "french" ? "Outils de développement" : "Development tools"} :</dt>
                            <dd>{toolsList}</dd>
                        </>
                    }

                    {
                        environnement === "recruiter" &&
                            <>
                                <dt>Technologies :</dt>
                                <dd>{technologiesList}</dd>
                            </>
                    }

                    <dt>{language === "french" ? "Accessibilité" : "Accessibility"} :</dt>
                    <dd>{achievment.accessibility.score === false ? (language === "french" ? "Non évaluée" : "Not evaluated") : achievment.accessibility.score + " %"}</dd>
                </dl>
            </div>
            <CustomLink frenchText="Voir détails..." englishText="See details..." route={"/achievments/" + achievment.title.replace(".com","")} />

        </section>
    )
}