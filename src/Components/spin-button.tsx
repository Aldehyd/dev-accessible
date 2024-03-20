import {useRef, useContext, useState, useEffect } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import BasicButton from "./basic-button.tsx";
interface SpinButtonPropsInterface {
    name: string,
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

export default function SpinButton({name,frenchLabel,englishLabel,minValue = 0,maxValue = 100,defaultValue = 0, maxInputLength= 3,handleKeyDown,increase,decrease,effectFunction}: SpinButtonPropsInterface) : React.JSX.Element {

    const input = useRef(null);

    const {language} = useContext(LanguageContext);

    const [currentValue,setCurrentValue] = useState<number>(minValue);

    useEffect(()=> {
        const savedStatus = localStorage.getItem(name);

        if(savedStatus !== undefined && savedStatus !== null && input.current !== null) {
            setCurrentValue(JSON.parse(savedStatus));
            input.current.value = JSON.parse(savedStatus);
            effectFunction(input);
        };
    },[name]);

    useEffect(()=> {
        if(currentValue >= minValue && currentValue <= maxValue) {
            localStorage.setItem(name,JSON.stringify(currentValue));
        } else if(currentValue < minValue) {
            localStorage.setItem(name,JSON.stringify(minValue));
        } else {
            localStorage.setItem(name,JSON.stringify(maxValue));
        };
    },[currentValue,name]);
    
    const handleChange = (e: Event)=> {
        input.current.value = e.target?.value;
        setCurrentValue(e.target?.value);
    }

    return(
        <div className="font-size-spin-button-container">
            <label id="spin-button-label">{language === "french" ? frenchLabel : englishLabel} : </label>
            <div className="spin-button-container">
                <BasicButton frenchText="-" englishText="-" tabIndex="-1" disableAbility={true} disabledStatus={currentValue <= minValue ? "true" : "false"} onWhiteBackground={true} onClickFunction={()=>decrease(input,setCurrentValue,effectFunction)} />
                <span className="input-container">  
                    <input type="text" ref={input} onChange={(e)=> handleChange(e)} onKeyDown={(e)=> handleKeyDown(e,input,setCurrentValue,minValue,maxValue,effectFunction)} maxLength={maxInputLength} className="spin-button_input" role="spinbutton" defaultValue={defaultValue} aria-valuenow={currentValue} aria-valuemin={minValue} aria-valuemax={maxValue} aria-valuetext={currentValue + "%"} aria-invalid={currentValue > maxValue || currentValue < minValue ? "true" : "false"} aria-labelledby="spin-button-label" />
                </span>
                <BasicButton frenchText="+" englishText="+" tabIndex="-1" disableAbility={true} disabledStatus={currentValue >= maxValue ? "true" : "false"} onWhiteBackground={true} onClickFunction={()=>increase(input,setCurrentValue,effectFunction)} />
            </div>
        </div>
    )
}