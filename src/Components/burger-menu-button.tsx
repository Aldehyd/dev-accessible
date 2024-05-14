import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface BurgerMenuButtonPropsInterface {
    isExpanded: boolean,
    setIsExpanded: (isExpanded: boolean)=> void
}

export default function BurgerMenuButton({setIsExpanded}: BurgerMenuButtonPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <button className="main-burger-menu" aria-label={language === "french" ? "principal" : "main"}
            aria-haspopup="menu" onClick={()=> setIsExpanded(true)}>
            <span className="main-burger-menu_line--1"></span>
            <span className="main-burger-menu_line--2"></span>
            <span className="main-burger-menu_line--3"></span>
        </button>
    )
}