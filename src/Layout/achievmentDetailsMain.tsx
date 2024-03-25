
import { useContext} from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function AchievmentDetailsMain({achievment}): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const translateArrayInStringsList: (array: string[])=> string = (array) => {
        let stringsList = "";
        for(let element of array) {
            if(array.indexOf(element) !== array.length-1) {
                stringsList = stringsList + element + ", ";
            } else {
                stringsList = stringsList + element;
            };
        };
        return stringsList;
    };

    return (
        <main>
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
                    <dd>{translateArrayInStringsList(achievment.developmentTools)}</dd>

                    <dt>{language === "french" ? "Technologies front-end" : "Front-end technologies"} :</dt>
                    <dd>{translateArrayInStringsList(achievment.technologies.frontEnd)}</dd>

                    { achievment.technologies.backEnd.length > 0 &&
                        <>
                            <dt>{language === "french" ? "Technologies back-end" : "Back-end technologies"} :</dt>
                            <dd>{translateArrayInStringsList(achievment.technologies.backEnd)}</dd>
                        </>}
                    
                    { achievment.technologies.dataBase.length > 0 &&
                        <>
                            <dt>{language === "french" ? "Base de données" : "Database"} :</dt>
                            <dd>{translateArrayInStringsList(achievment.technologies.dataBase)}</dd>
                        </>}
                    
                    <dt>{language === "french" ? "Accessibilité" : "Accessibility"} :</dt>
                    <dd>{achievment.accessibility.score === false ? 
                        (language === "french" ? "Non évaluée" : "Not evaluated")
                        : 
                        <>
                            <dl>
                                <dt>Score :</dt>
                                <dd>{achievment.accessibility.score + " %"}</dd>

                                <dt>{language === "french" ? "Non conformités" : "Non compliances"} :</dt>
                                <dd>
                                    <ul>
                                        {language === "french" ?
                                            achievment.accessibility.frenchNonCompliance.map(nonCompliance => {return <li key={nonCompliance.index}>{nonCompliance}</li>})
                                            :
                                            achievment.accessibility.englishNonCompliance.map(nonCompliance => {return <li key={nonCompliance.index}>{nonCompliance}</li>})
                                        }
                                    </ul>
                                </dd>
                            </dl>
                        </>}
                    </dd>

                    <dt>{language === "french" ? "Fonctionnalités" : "Fonctionnalities"} :</dt>
                    <dd>
                        <ul>
                            {language === "french" ? 
                                achievment.frenchFonctionnalities.map(fonctionnality => {return <li key={fonctionnality.index}>{fonctionnality}</li>})
                                :
                                achievment.englishFonctionnalities.map(fonctionnality => {return <li key={fonctionnality.index}>{fonctionnality}</li>})
                            }
                        </ul> 
                    </dd>

                    {/* ajouter design */}
                    <dt>Design :</dt>
                    <dd>
                        <dl>
                            <dt>{language === "french" ? "Réalisations" : "Realizations"} :</dt>
                            <dd></dd>

                            <dt>{language === "french" ? "Outils utilisés" : "Tools"} :</dt>
                            <dd></dd>
                        </dl>
                    </dd>

                    <dt>{language === "french" ? "Déploiement" : "Deployment"} :</dt>
                    <dd>{language === "french" ? achievment.frenchDeployment : achievment.englishDeployment}</dd>

                    <dt>{language === "french" ? "Commantaires" : "Comments"} :</dt>
                    <dd>{language === "french" ? achievment.frenchComments: achievment.englishComments}</dd>

                    {/* ajouter carousel photos */}
                </dl>
            </div>
        </main>
    )
}