import { useContext, useEffect, useRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function RadioButton({name,frenchLabel,englishLabel,checkedButton,setCheckedButton,buttonFocused}): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const buttonElement = useRef(null);

    useEffect(()=> {
        buttonElement.current !== null && buttonFocused === name  && buttonElement.current.focus();
    },[buttonFocused,name]);

    return(
        <li role="radio" className="radio-button" aria-labelledby={"radio-button-label--" + name}
            aria-checked={checkedButton === name ? "true" : "false"} 
            tabIndex={checkedButton === name ? "0" : "-1"} onClick={()=> setCheckedButton(name)}
            ref={buttonElement}>
            <span className="radio-button_input"></span>
            <label id={"radio-button-label--" + name} className="radio-button_label">
                {language === "french" ? frenchLabel : englishLabel}
            </label>
        </li>
    )
}