
import { useContext, useState} from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CarouselContext from "../Contexts/caroussel-context.tsx";
import Carousel from "../Layout/carousel.tsx";
import CarouselFullScreen from "./carouselFullScreen.tsx";
import CustomLink from '../Components/custom-link.tsx';
import EnvironnementContext from '../Contexts/environnement-context.tsx';

export default function AchievmentDetailsMain({achievment}): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const {environnement} = useContext(EnvironnementContext);

    const {displayCarousel,changeDisplayCarousel,picturesFullScreen,currentPictureFullScreen,changePicturesFullScreen,changeCurrentPictureFullScreen} = useContext(CarouselContext);

    const [currentPicture,setCurrentPicture] = useState<boolean | number>(false);

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
        <div className="achievment-section">
            <dl>
                <dt>Type :</dt>
                <dd>{language === "french" ? achievment.frenchType : achievment.englishType}</dd>

                <dt>{language === "french" ? "Année de réalisation" : "Year"} :</dt>
                <dd>{achievment.year}</dd>

                <dt>{language === "french" ? "Lien" : "Link"} :</dt>
                <dd><a href={achievment.websiteLink} target="blank">{achievment.websiteLink}</a></dd>

                {
                    environnement === "recruiter" &&
                        <>
                            <dt>{language === "french" ? "Lien GitHub" : "GitHub link"} :</dt>
                            <dd><a href={achievment.githubLink} target="blanck">{achievment.githubLink}</a></dd>
                        </>
                }
                
                <dt>{language === "french" ? "Besoins" : "Need"} :</dt>
                <dd>{language === "french" ? achievment.frenchNeed : achievment.englishNeed}</dd>

                {
                    environnement === "recruiter" &&
                        <>
                            <dt>{language === "french" ? "Outils de développement" : "Development tools"} :</dt>
                            <dd>{translateArrayInStringsList(achievment.developmentTools)}</dd>
                        </>
                }
                
                {
                    environnement === "recruiter" &&
                        <>
                            <dt>{language === "french" ? "Technologies front-end" : "Front-end technologies"} :</dt>
                            <dd>{translateArrayInStringsList(achievment.technologies.frontEnd)}</dd>
                        </>
                }

                { 
                    environnement === "recruiter" && achievment.technologies.backEnd.length > 0 &&
                        <>
                            <dt>{language === "french" ? "Technologies back-end" : "Back-end technologies"} :</dt>
                            <dd>{translateArrayInStringsList(achievment.technologies.backEnd)}</dd>
                        </>
                }
                
                { 
                    environnement === "recruiter" && achievment.technologies.dataBase.length > 0 &&
                        <>
                            <dt>{language === "french" ? "Base de données" : "Database"} :</dt>
                            <dd>{translateArrayInStringsList(achievment.technologies.dataBase)}</dd>
                        </>
                }
                
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
                                <ul className="achievments_list">
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
                    <ul className="achievments_list">
                        {language === "french" ? 
                            achievment.frenchFonctionnalities.map(fonctionnality => {return <li key={fonctionnality.index}>{fonctionnality}</li>})
                            :
                            achievment.englishFonctionnalities.map(fonctionnality => {return <li key={fonctionnality.index}>{fonctionnality}</li>})
                        }
                    </ul> 
                </dd>

                <dt>Design :</dt>
                <dd>
                    <dl>
                        <dt>{language === "french" ? "Réalisations" : "Realizations"} :</dt>
                        <dd>{language === "french" ? translateArrayInStringsList(achievment.design.frenchWork) : translateArrayInStringsList(achievment.design.englishWork)}</dd>

                        {
                            environnement === "recruiter" &&
                                <>
                                    <dt>{language === "french" ? "Outils utilisés" : "Tools"} :</dt>
                                    <dd>{translateArrayInStringsList(achievment.design.tools)}</dd>
                                </>
                        }
                    </dl>
                </dd>

                <dt>{language === "french" ? "Déploiement" : "Deployment"} :</dt>
                <dd>{language === "french" ? achievment.frenchDeployment : achievment.englishDeployment}</dd>

                {
                    environnement === "recruiter" &&
                        <>
                            <dt>{language === "french" ? "Commantaires" : "Comments"} :</dt>
                            <dd>{language === "french" ? achievment.frenchComments: achievment.englishComments}</dd>
                        </>
                }

            </dl>
            <h2>Photos :</h2>
            <Carousel pictures={achievment.pictures} setCurrentPicture={setCurrentPicture} />
            {displayCarousel && <CarouselFullScreen orientation={achievment.englishType === "Mobile application" ? "portrait" : "landscape"} />}
            {achievment.englishType === "Mobile application" && <CustomLink frenchText="Règles de confidentialité" englishText="Privacy policy" route={`/achievments/${achievment.title.replace(".com","")}/privacy-policy`} />}
        </div>
    )
}