import { useContext } from "react";
import CustomLink from "../Components/custom-link.tsx";
import MainMenuLine from "../Components/mainMenuLine.tsx";
import EnvironnementContext from "../Contexts/environnement-context.tsx";

export default function MainMenu(): React.JSX.Element {

    const {environnement} = useContext(EnvironnementContext);

    return (
        <nav className="main-menu">
            <MainMenuLine />
            <ul className="main-menu_menu">
                <li className="main-menu_menu-item main-menu_menu-item--home">
                    <CustomLink type="main" frenchText="Accueil" englishText="Home" route="/home" />
                </li>
                <li className="main-menu_menu-item main-menu_menu-item--who-am-i">
                    <CustomLink type="main" frenchText="Qui suis-je ?" englishText="Who am I ?" route="/who-am-i" />
                </li>
                {
                    environnement === "recruiter" ?
                        <li className="main-menu_menu-item main-menu_menu-item--cv">
                            <CustomLink type="main" frenchText="CV" englishText="CV" route="/cv" />
                        </li>
                        :
                        <li className="main-menu_menu-item main-menu_menu-item--cv">
                            <CustomLink type="main" frenchText="Prestations" englishText="Services" route="/services" />
                        </li>
                }
                <li className="main-menu_menu-item main-menu_menu-item--achievments">
                    <CustomLink type="main" frenchText="Réalisations" englishText="Achievments" route="/achievments" />
                </li>
                <li className="main-menu_menu-item main-menu_menu-item--why-accessibility">
                    <CustomLink type="main" frenchText="Pourquoi l'accessibilité ?" englishText="Why accessibility ?" route="/why-accessibility" />
                </li>
            </ul>
        </nav>
    )
}