import { useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import RadioButton from "../Components/radio-button.tsx";
import radioButtonDataInterface from "../Interfaces/radioButtonData.tsx";

interface radioButtonGroupProps {
    name: string,
    frenchLegend: string,
    englishLegend: string,
    radioButtonsData: radioButtonDataInterface[],
    handleChoice: (checkedButton: string) => void
}

export default function RadioButtonGroup({name,frenchLegend,englishLegend,radioButtonsData,handleChoice} : radioButtonGroupProps): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    
    const options: string[] | undefined = radioButtonsData.map(radio => {return(radio.name)});

    const [checkedButton,setCheckedButton] = useState<string>(options[0]);

    const [buttonFocused,setButtonFocused] = useState<string>(options[0]);

    const handleKeyDown: (e:KeyboardEvent)=>void = (e)=> {
        let index = options.indexOf(checkedButton);
        switch(e.key) {
            case "ArrowDown": 
                if(index === options?.length-1) {
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
            setCheckedButton(options[0]);
        };
    },[]);

    useEffect(()=> {
        handleChoice(checkedButton);
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