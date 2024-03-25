
import { useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function AchievmentDetailsMain({achievment}): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [frontTechnologiesList,setFrontTechnologiesList] = useState<string>("");
    const [backTechnologiesList,setBackTechnologiesList] = useState<string>("");
    const [dataTechnologiesList,setDataTechnologiesList] = useState<string>("");
    const [toolsList,setToolsList] = useState<string>("");

    useEffect(()=> {
        let frontTechnologiesList = "";
        for(let techno of achievment.technologies.frontEnd) {
            if(achievment.technologies.frontEnd.indexOf(techno) !== achievment.technologies.frontEnd.length-1) {
                frontTechnologiesList = frontTechnologiesList + techno + ", ";
            } else {
                frontTechnologiesList = frontTechnologiesList + techno;
            };
        };
        setFrontTechnologiesList(frontTechnologiesList);

        let backTechnologiesList = "";
        for(let techno of achievment.technologies.backEnd) {
            if(achievment.technologies.backEnd.indexOf(techno) !== achievment.technologies.backEnd.length-1) {
                backTechnologiesList = backTechnologiesList + techno + ", ";
            } else {
                backTechnologiesList = backTechnologiesList + techno;
            };
        };
        setBackTechnologiesList(backTechnologiesList);

        let dataTechnologiesList = "";
        for(let techno of achievment.technologies.dataBase) {
            if(achievment.technologies.dataBase.indexOf(techno) !== achievment.technologies.dataBase.length-1) {
                dataTechnologiesList = dataTechnologiesList + techno + ", ";
            } else {
                dataTechnologiesList = dataTechnologiesList + techno;
            };
        };
        setDataTechnologiesList(dataTechnologiesList);

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

    return (
        <main>
            <h1>{achievment.title}</h1>
            <div className="achievment-section_text-content">
                <dl>
                    <dt>Type :</dt>
                    <dd>{language === "french" ? achievment.frenchType : achievment.englishType}</dd>

                    <dt>{language === "french" ? "Année de réalisation" : "Year"} :</dt>
                    <dd>{achievment.year}</dd>

                    <dt>{language === "french" ? "Lien" : "Link"} :</dt>
                    <dd>{achievment.websiteLink}</dd>

                    <dt>{language === "french" ? "Lien GitHub" : "GitHub link"} :</dt>
                    <dd>{achievment.githubLink}</dd>

                    <dt>{language === "french" ? "Besoins" : "Need"} :</dt>
                    <dd>{language === "french" ? achievment.frenchNeed : achievment.englishNeed}</dd>

                    <dt>{language === "french" ? "Outils de développement" : "Development tools"} :</dt>
                    <dd>{toolsList}</dd>

                    <dt>{language === "french" ? "Technologies front-end" : "Front-end technologies"} :</dt>
                    <dd>{frontTechnologiesList}</dd>

                    {backTechnologiesList.length > 0 && 
                        <>
                            <dt>{language === "french" ? "Technologies back-end" : "Back-end technologies"} :</dt>
                            <dd>{backTechnologiesList}</dd>
                        </>}
                    
                    {dataTechnologiesList.length > 0 && 
                        <>
                            <dt>{language === "french" ? "Base de données" : "Database"} :</dt>
                            <dd>{dataTechnologiesList}</dd>
                        </>}
                    
                    <dt>{language === "french" ? "Accessibilité" : "Accessibility"} :</dt>
                    <dd>{achievment.accessibility.score === false ? 
                        (language === "french" ? "Non évaluée" : "Not evaluated")
                        : 
                        <>
                            <dl>
                                <dd>Score :</dd>
                                <dt>{achievment.accessibility.score + " %"}</dt>

                                <dd>{language === "french" ? "Non conformités" : "Non compliances"} :</dd>
                                <dt>
                                    <ul>
                                        {language === "french" ?
                                            achievment.accessibility.frenchNonCompliance.map(nonCompliance => {return <li>{nonCompliance}</li>})
                                            :
                                            achievment.accessibility.englishNonCompliance.map(nonCompliance => {return <li>{nonCompliance}</li>})
                                        }
                                    </ul>
                                </dt>
                            </dl>
                        </>}
                    </dd>

                    <dd>{language === "french" ? "Fonctionnalités" : "Fonctionnalities"} :</dd>
                    <dt>
                        <ul>
                            {language === "french" ? 
                                achievment.frenchFonctionnalities.map(fonctionnality => {return <li>{fonctionnality}</li>})
                                :
                                achievment.englishFonctionnalities.map(fonctionnality => {return <li>{fonctionnality}</li>})
                            }
                        </ul> 
                    </dt>

                    {/* ajouter design */}

                    <dd>{language === "french" ? "Déploiement" : "Deployment"} :</dd>
                    <dt>{language === "french" ? achievment.frenchDeployment : achievment.englishDeployment}</dt>

                    <dd>{language === "french" ? "Commantaires" : "Comments"} :</dd>
                    <dt>{language === "french" ? achievment.frenchComments: achievment.englishComments}</dt>

                    {/* ajouter carousel photos */}
                </dl>
            </div>
        </main>
    )
}