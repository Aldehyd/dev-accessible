import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function RadioButton({name,frenchLabel,englishLabel,checkedButton,setCheckedButton}): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <li role="radio" className="radio-button" aria-labelledby={"radio-button-label--" + name}
            aria-checked={checkedButton === name ? "true" : "false"} 
            tabindex={checkedButton === name ? "0" : "-1"} onClick={()=> setCheckedButton(name)}>
            <span className="radio-button_input"></span>
            <label id={"radio-button-label--" + name} className="radio-button_label">
                {language === "french" ? frenchLabel : englishLabel}
            </label>
        </li>
    )
}