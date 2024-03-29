import AnimationToggleButton from "../Components/animation-toggle-button.tsx";
import LanguageSelect from "../Components/language-select.tsx";
import Switch from "../Components/switch.tsx";
import RadioButtonGroup from "../Layout/RadioButtonsGroup.tsx";
import { handleContrastedThemeSwitch } from "../Functions/handleContrastedThemeSwitch.tsx";
import { colorsRadioButtonsData } from "../Datas/colorsRadioButtonsData.tsx";
import { handleMainColor } from "../Functions/handleMainColor.tsx";
import CVComponent from "../Layout/cvComponent.tsx";
import useFetch from "../Hooks/useFetch.tsx";
import { useState, useEffect } from "react";
import { fetchData } from "../Functions/fetchData.tsx";

export default function CV(): React.JSX.Element {

    const [diplomas,setDiplomas] = useState(null);
    
    const [isLoading,setIsLoading] = useState<boolean>(true);
    const [error,setError] = useState<boolean>(false);

    useEffect(()=> {
        fetchData('http://localhost:4000/cv',setDiplomas);
    },[]);
    

    return (
        <>
            <header>
                <AnimationToggleButton />
                <LanguageSelect />
                <Switch name="contrasted-theme" frenchLabel="Thème contrasté" englishLabel="Contrasted theme" onSwitchFunction={handleContrastedThemeSwitch} />
                <RadioButtonGroup name="color" frenchLegend="Couleur" englishLegend="Color" radioButtonsData={colorsRadioButtonsData} handleChoice={handleMainColor} />
            </header>
                
            <main className="cv">
                {diplomas && <p>{diplomas[0].frenchTitle}</p>}

                {/* <CVComponent achievments={achievments} diplomas={diplomas} languages={languages} /> */}
            </main>
        </>
    )
}