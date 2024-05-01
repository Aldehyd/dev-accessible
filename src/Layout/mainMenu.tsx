import { useContext } from "react";
import MainLink from "../Components/main-link.tsx";
import MainMenuLine from "../Components/mainMenuLine.tsx";
import EnvironnementContext from "../Contexts/environnement-context.tsx";

export default function MainMenu(): React.JSX.Element {

    const {environnement} = useContext(EnvironnementContext);

    return (
        <nav className="main-menu">
            <MainMenuLine />
            <ul className="main-menu_menu">
                <li className="main-menu_menu-item main-menu_menu-item--home">
                    <MainLink frenchText="Accueil" englishText="Home" route="/home" />
                </li>
                <li className="main-menu_menu-item main-menu_menu-item--who-am-i">
                    <MainLink frenchText="Qui suis-je ?" englishText="Who am I ?" route="/who-am-i" />
                </li>
                {environnement === "recruiter" && <li className="main-menu_menu-item main-menu_menu-item--cv">
                    <MainLink frenchText="CV" englishText="CV" route="/cv" />
                </li>}
                <li className="main-menu_menu-item main-menu_menu-item--achievments">
                    <MainLink frenchText="Réalisations" englishText="Achievments" route="/achievments" />
                </li>
                <li className="main-menu_menu-item main-menu_menu-item--why-accessibility">
                    <MainLink frenchText="Pourquoi l'accessibilité ?" englishText="Why accessibility ?" route="/why-accessibility" />
                </li>
            </ul>
        </nav>
    )
}