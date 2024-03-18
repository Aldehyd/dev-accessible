import { useContext } from "react";
import LanguageContext from "../Contexts/language-context";

export default function RadioButton({name,frenchLabel,englishLabel,checkedButton}): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <li role="radio" aria-checked={checkedButton === name ? "true" : "false"} tabindex="0">
            <span className="radio-input"></span>
            <label>{language === "french" ? frenchLabel : englishLabel}</label>
        </li>
    )
}