import { useContext, useEffect } from "react";
import CustomLink from "../Components/custom-link.tsx";
import EnvironnementContext from "../Contexts/environnement-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import ModalContext from "../Contexts/modal-context.tsx";

interface MainMenuPropsInterface {
    isExpanded: boolean,
    setIsExpanded: (expanded: boolean)=> void
}

export default function MainMenuModal({isExpanded,setIsExpanded}: MainMenuPropsInterface): React.JSX.Element {

    const {environnement} = useContext(EnvironnementContext);
    const {language} = useContext(LanguageContext);
    const {changeIsModalDisplayed} = useContext(ModalContext);

    const onClickFunction = ()=> {
        setIsExpanded(isExpanded => !isExpanded);
    };

    useEffect(()=> {
        if(isExpanded) {
            changeIsModalDisplayed(true);
        } else {
            changeIsModalDisplayed(false);
        };
    },[isExpanded,changeIsModalDisplayed]);

    return (
        <div className="main-menu-modal" aria-expanded={isExpanded ? "true" : "false"}>
            <div className="basic-button-container basic-button-container--on-white-background">
                <button className="basic-button" id="main-menu-modal_toggle-button"
                    onClick={()=> onClickFunction()}>
                    {language === "french" ? "Menu principal" : "Main menu"}
                    <svg className="expand-arrow-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 96.3 104.1">
                        <path d="M83,42.8L29.6,12C20.4,6.7,8.9,13.3,8.9,24v61.6c0,10.7,11.5,17.3,20.8,12L83,66.8C92.2,61.5,92.2,48.1,83,42.8z"/>
                    </svg>
                </button>
                <div className="basic-button-shadow"></div>
            </div>
            <nav role="navigation">
                <ul role="menu"
                    aria-labelledby="main-menu-modal_toggle-button">
                    <li>
                        <CustomLink type="main" frenchText="Accueil" englishText="Home" route="/home" />
                    </li>
                    <li>
                        <CustomLink type="main" frenchText="Qui suis-je" englishText="Who am I" route="/who-am-i" />
                    </li>
                    {
                        environnement === "recruiter" &&
                            <li>
                                <CustomLink type="main" frenchText="CV" englishText="CV" route="/cv" />
                            </li>
                    }
                    <li>
                        <CustomLink type="main" frenchText="Réalisations" englishText="Achievments" route="/achievments" />
                    </li>
                    <li>
                        <CustomLink type="main" frenchText="Pourquoi l'accessibilité ?" englishText="Why accessibility ?" route="/why-accessibility" />
                    </li>
                    {/* <li>
                        <MainLink frenchText="Tarifs" englishText="Prices" route="/prices" />
                    </li> */}
                </ul>
            </nav>
        </div>
        
    )
}