import { useContext, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function SearchBar(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <div class="search-bar-container animations top-menu_item">
            <span class="input-container">
                <input type="text" placeholder="Rechercher..." maxlength="26" />
            </span>
            <button type="button" class="search-button">
                <span class="circle"></span>
                <span class="rectangle"></span>
            </button>
        </div>
    )
}