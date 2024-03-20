import { useEffect, useState, useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function BurgerMenuButton(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <button className="main-burger-menu" aria-label={language === "french" ? "principal" : "main"}
            aria-haspopup="menu">
            <span className="main-burger-menu_line--1"></span>
            <span className="main-burger-menu_line--2"></span>
            <span className="main-burger-menu_line--3"></span>
        </button>
    )
}