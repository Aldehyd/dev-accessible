import { useState, useContext, useEffect } from "react";
import { fetchData } from "../Functions/fetchData.tsx";
import CustomLink from "../Components/custom-link.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import Loader from "../Components/loader.tsx";
import Error from "../Components/error.tsx";

export default function WhyAccessibilityMain(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [content,setContent] = useState("");
    const [isContentLoading,setIsContentLoading] = useState<boolean>(true);
    const [error,setError] = useState<boolean>(false);

    useEffect(()=> {
        fetchData('http://localhost:4000/page-content?page=why-accessibility',setContent,setIsContentLoading,setError);
    },[]);

    return (
        <>
        {isContentLoading && !error && <Loader />}
            {error && <Error frenchMessage="Une erreur est survenue. Veuillez rafraichir la page svp." englishMessage="An error has occured. Please refresh the current page." />}
            {!isContentLoading && !error &&
                <>
                    {content[0]?.content.map(contentUnit => {
                        switch(contentUnit.type) {
                            case 'title':
                                if(contentUnit.options === 2) {
                                    return (language === "french" ? <h2>{contentUnit.frenchContent}</h2> : <h2>{contentUnit.englishContent}</h2>)
                                } else if(contentUnit.options === 3) {
                                    return (language === "french" ? <h3>{contentUnit.frenchContent}</h3> : <h3>{contentUnit.englishContent}</h3>)
                                } else if(contentUnit.options === 4) {
                                    return (language === "french" ? <h4>{contentUnit.frenchContent}</h4> : <h4>{contentUnit.englishContent}</h4>)
                                };
                                break;
                            case 'list':
                                return <ul className={contentUnit.options === "styled" ? "styled-list" : ""}>
                                    {
                                        language === "french" ?
                                            contentUnit.frenchContent.map(line => <li key={contentUnit.frenchContent.indexOf(line)}>{line}</li>)
                                            :
                                            contentUnit.englishContent.map(line => <li key={contentUnit.englishContent.indexOf(line)}>{line}</li>)
                                    }
                                </ul>
                            case 'note':
                                return (
                                    language === "french" ?
                                        <p className="note"><span>{contentUnit.frenchContent[0]}</span><span>{contentUnit.frenchContent[1]}</span></p>
                                        :
                                        <p className="note"><span>{contentUnit.frenchContent[0]}</span><span>{contentUnit.frenchContent[1]}</span></p>
                                )
                            case 'paragraph':
                                return (
                                    language === "french" ?
                                        <p key={contentUnit.id}>{contentUnit.frenchContent}</p>
                                        :
                                        <p key={contentUnit.id}>{contentUnit.englishContent}</p>
                                )
                            case 'link':
                                return <CustomLink frenchText={contentUnit.frenchText} englishText={contentUnit.englishText} route={contentUnit.route} openInNewTab={contentUnit.options === "openInNewTab" ? true : false} />
                            default:
                                break;
                        };
                        
                    })}
                </> 
            }
            {/* <h2>Accessibilité numérique :</h2>
            <q>L’accessibilité numérique consiste à rendre les contenus et services numériques compréhensibles et utilisables par les personnes en situation de handicap.</q>
            <p>En France, 1 utilisateur d'internet sur 5 est en situation de handicap.</p>
            <p>L'accessibilité numérique :</p>
            <ul className="styled-list">
                <li>permet d'inclure un nombre plus important d'utilisateurs</li>
                <li>améliore l'expérience de tous les utilisateurs</li>
                <li>améliore le référencement</li>
                <li>est une obligation légale dans de nombreux cas</li>
            </ul>
            <h2>Qui est concerné par l'obligation d'accessibilité ?</h2>
            <ul>
                <li>1 - Les personnes morales de droit public ;</li>
                <li>2 - Les personnes morales de droit privé délégataires d’une mission de service 
                    public, ainsi que celles créées pour satisfaire spécifiquement des besoins 
                    d’intérêt général ayant un caractère autre qu’industriel ou commercial et dont :
                Soit l’activité est financée majoritairement par une ou plusieurs personnes 
                mentionnées aux 1° et 3° et au présent 2° ;
                Soit la gestion est soumise à leur contrôle ;
                Soit plus de la moitié des membres de l’organe d’administration, de direction 
                ou de surveillance sont désignés par elles ;</li>
                <li>3 - Les personnes morales de droit privé constituées par une ou plusieurs 
                    des personnes mentionnées aux 1° et 2° pour satisfaire spécifiquement des 
                    besoins d’intérêt général ayant un caractère autre qu’industriel ou commercial ;</li>
                <li>4 - Les entreprises à compter d’un seuil de chiffre d’affaires de 250 millions 
                    d’euros calculé pour chaque personne sur la base de la moyenne du chiffre 
                    d’affaires annuel réalisé en France des trois derniers exercices comptables 
                    clos antérieurement à l’année considérée.</li>
            </ul>
            <p className="note">
                <span>A noter</span><span>A partir de juin 2025, l'obligation sera étendue à toutes 
                    les entreprises privées de plus de 10 salariés et générant un chiffre d'affaire 
                    supérieur à 2 millions d'euros.</span> 
            </p>
            <h2>Comment est évaluée l'accessibilité ?</h2>
            <p>En France, l'accessibilité d'une application web est évaluée selon les 106 critères 
                du RGAA (Référentiel Général d'Amélioration de l'Accessibilité).</p>
            <p>Un site est considéré accessible quand il atteint un score de 100% de conformité
                avec ces critères.</p>
            <CustomLink frenchText="Lien vers le RGAA" englishText="RGAA link" route="https://accessibilite.numerique.gouv.fr/" /> */}
        </>
    )
}