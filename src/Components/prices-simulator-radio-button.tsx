import { useContext, useEffect, useRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import SimulationPageOptionInterface from "../Interfaces/simulationPageOptionInterface.tsx";

interface PricesSimulatorRadioButtonPropsInterface {
    option: SimulationPageOptionInterface,
    checkedButton: number,
    setCheckedButton: (checkedButton: number)=>void,
    buttonFocused: number
}

export default function PricesSimulatorRadioButton({option,checkedButton,setCheckedButton,buttonFocused}: PricesSimulatorRadioButtonPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const buttonElement = useRef(null);

    useEffect(()=> {
        buttonElement.current !== null && buttonFocused === option.id  && buttonElement.current.focus();
    },[buttonFocused,option]);

    return(
        <li role="radio" className="radio-button" aria-labelledby={"radio-button-label--" + option.id}
            aria-checked={checkedButton === option.id ? "true" : "false"} 
            tabIndex={checkedButton === option.id ? 0 : -1} onClick={()=> setCheckedButton(option.id)}
            ref={buttonElement}>
            <span className="radio-button_input"></span>
            <label id={"radio-button-label--" + option.id} className="radio-button_label">
                {language === "french" ? option.frenchLabel : option.englishLabel}
            </label>
        </li>
    )
}