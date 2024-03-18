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
        <fieldset className="radio-group">
            <legend>{language === 'french' ? frenchLegend : englishLegend}</legend>
            <ul>
                {
                    radioButtonsData.map(radio => {
                        return (<RadioButton name={radio.name} frenchLabel={radio.frenchLabel} englishLabel={radio.englishLabel} checkedButton={checkedButton} setCheckedButton={setCheckedButton} />)
                    })
                }
            </ul>
        </fieldset>
    )
}