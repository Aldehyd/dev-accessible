import AchievmentsMain from "../Layout/achievmentsMain.tsx";
import AnimationToggleButton from "../Components/animation-toggle-button.tsx";
import LanguageSelect from "../Components/language-select.tsx";
import Switch from "../Components/switch.tsx";
import RadioButtonGroup from "../Components/radio-button.tsx";
import {handleContrastedThemeSwitch} from "../Functions/handleContrastedThemeSwitch.tsx";
import {handleMainColor} from "../Functions/handleMainColor.tsx";
import {colorsRadioButtonsData} from "../Datas/colorsRadioButtonsData.tsx";
import { useState, useEffect } from "react";
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";
import { fetchData } from "../Functions/fetchData.tsx";
import Error from "../Components/error.tsx";
import Loader from "../Components/loader.tsx";

export default function Achievments(): React.JSX.Element {

    const [achievments,setAchievments] = useState<AchievmentInterface[]>([]);
    
    const [isLoading,setIsLoading] = useState<boolean>(true);
    const [error,setError] = useState<boolean>(false);

    useEffect(()=> {
        fetchData('http://localhost:4000/cv-achievments',setAchievments,setIsLoading,setError);
    },[]);

    return (
        <>
            <AnimationToggleButton />
            <LanguageSelect />
            <Switch name="contrasted-theme" frenchLabel="Thème contrasté" englishLabel="Contrasted theme" onSwitchFunction={handleContrastedThemeSwitch} />
            <RadioButtonGroup name="color" frenchLegend="Couleur" englishLegend="Color" radioButtonsData={colorsRadioButtonsData} handleChoice={handleMainColor} />
            {isLoading && !error && <Loader />}
            {error && <Error frenchMessage="Une erreur est survenue. Veuillez rafraichir la page svp." englishMessage="An error has occured. Please refresh the current page." />}
            {!isLoading && !error && <AchievmentsMain achievments={achievments} />}
        </>
        
    )
}