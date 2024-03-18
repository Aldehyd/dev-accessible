import { useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import RadioButton from "../Components/radio-button.tsx";
import radioButtonDataInterface from "../Interfaces/radioButtonData.tsx";

interface radioButtonGroupProps {
    name: string,
    frenchLegend: string,
    englishLegend: string,
    radioButtonsData: radioButtonDataInterface[]
}

export default function RadioButtonGroup({name,frenchLegend,englishLegend,radioButtonsData} : radioButtonGroupProps): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [checkedButton,setCheckedButton] = useState<string>("blue");

    const [buttonFocused,setButtonFocused] = useState<string>("blue");
    
    const options: string[] = radioButtonsData.map(radio => {return(radio.name)});

    const handleKeyDown: (e:KeyboardEvent)=>void = (e)=> {
        let index = options.indexOf(checkedButton);
        switch(e.key) {
            case "ArrowDown": 
                if(index === options.length-1) {
                    index = 0;
                } else {
                    index++;
                };
                setCheckedButton(options[index]);
                break;
            case "ArrowRight": 
                if(index === options.length-1) {
                    index = 0;
                } else {
                    index++;
                };
                setCheckedButton(options[index]);
                break;
            case "ArrowUp": 
                if(index === 0) {
                    index = options.length-1;
                } else {
                    index--;
                };
                setCheckedButton(options[index]);
                break;
            case "ArrowLeft": 
                if(index === 0) {
                    index = options.length-1;
                } else {
                    index--;
                };
                setCheckedButton(options[index]);
                break;
            default:
                break;
        };
        setButtonFocused(options[index]);
    }

    useEffect(()=> {
        const savedStatus = localStorage.getItem(name);

        if(savedStatus !== undefined && savedStatus !== null) {
            setCheckedButton(savedStatus);
        } else {
            setCheckedButton("blue");
        };
    },[]);

    useEffect(()=> {
        switch(checkedButton) {
            case "blue":
                document.body.classList.remove('purple');
                break;
            default:
                document.body.classList.add('purple');
                break;
        };
        localStorage.setItem(name,checkedButton.toString());
    },[checkedButton,name]);

    return(
        <fieldset className="radio-group" onKeyDown={(e)=>handleKeyDown(e)}>
            <legend>{language === 'french' ? frenchLegend : englishLegend}</legend>
            <ul>
                {
                    radioButtonsData.map(radio => {
                        return (<RadioButton key={radio.id} name={radio.name} frenchLabel={radio.frenchLabel} englishLabel={radio.englishLabel} checkedButton={checkedButton} setCheckedButton={setCheckedButton} buttonFocused={buttonFocused} />)
                    })
                }
            </ul>
        </fieldset>
    )
}