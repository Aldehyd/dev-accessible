import {useRef, useContext, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import BasicButton from "./basic-button.tsx";
interface SpinButtonPropsInterface {
    frenchLabel: string,
    englishLabel: string,
    minValue?: number,
    maxValue?: number,
    defaultValue?: number,
    maxInputLength?: number,
    handleKeyDown: (e:KeyboardEvent,input,setCurrentValue,minValue: number,maxValue: number,effectFunction)=> void,
    increase: (input,setCurrentValue,effectFunction)=> void,
    decrease: (input,setCurrentValue,effectFunction)=> void,
    effectFunction: (input)=> void
}

export default function SpinButton({frenchLabel,englishLabel,minValue = 0,maxValue = 100,defaultValue = 0, maxInputLength= 3,handleKeyDown,increase,decrease,effectFunction}: SpinButtonPropsInterface) : React.JSX.Element {

    const input = useRef(null);

    const {language} = useContext(LanguageContext);

    const [currentValue,setCurrentValue] = useState<number>(100);
    
    const handleChange = (e: Event)=> {
        this.input.current.value = e.target?.value;
        setCurrentValue(e.target?.value);
    }

    return(
        <div className="font-size-spin-button-container">
            <label id="spin-button-label">{language === "french" ? frenchLabel : englishLabel} : </label>
            <div className="spin-button-container">
                <BasicButton text="-" tabIndex="-1" disableAbility={true} disabledStatus={currentValue <= minValue ? "true" : "false"} onWhiteBackground={true} onClickFunction={()=>decrease(input,setCurrentValue,effectFunction)} />
                <span className="input-container">  
                    <input type="text" ref={input} onChange={(e)=> handleChange(e)} onKeyDown={(e:KeyboardEvent)=> handleKeyDown(e,input,setCurrentValue,minValue,maxValue,effectFunction)} maxLength={maxInputLength} className="spin-button_input" role="spinbutton" defaultValue={defaultValue} aria-valuenow={currentValue} aria-valuemin={minValue} aria-valuemax={maxValue} aria-valuetext={currentValue + "%"} aria-invalid={currentValue > maxValue || currentValue < minValue ? "true" : "false"} aria-labelledby="spin-button-label" />
                </span>
                <BasicButton text="+" tabIndex="-1" disableAbility={true} disabledStatus={currentValue >= maxValue ? "true" : "false"} onWhiteBackground={true} onClickFunction={()=>increase(input,setCurrentValue,effectFunction)} />
            </div>
        </div>
    )
}