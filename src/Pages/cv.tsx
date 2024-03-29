import AnimationToggleButton from "../Components/animation-toggle-button.tsx";
import LanguageSelect from "../Components/language-select.tsx";
import Switch from "../Components/switch.tsx";
import RadioButtonGroup from "../Layout/RadioButtonsGroup.tsx";
import { handleContrastedThemeSwitch } from "../Functions/handleContrastedThemeSwitch.tsx";
import { colorsRadioButtonsData } from "../Datas/colorsRadioButtonsData.tsx";
import { handleMainColor } from "../Functions/handleMainColor.tsx";
import CVComponent from "../Layout/cvComponent.tsx";
import { useState, useEffect } from "react";
import { fetchData } from "../Functions/fetchData.tsx";

export default function CV(): React.JSX.Element {

    const [achievments,setAchievments] = useState(null);
    const [diplomas,setDiplomas] = useState(null);
    const [languages,setLanguages] = useState(null);
    
    const [isAchievmentsLoading,setIsAchievmentsLoading] = useState<boolean>(true);
    const [isDiplomasLoading,setIsDiplomasLoading] = useState<boolean>(true);
    const [isLanguagesLoading,setIsLanguagesLoading] = useState<boolean>(true);
    const [error,setError] = useState<boolean>(false);

    useEffect(()=> {

        fetchData('http://localhost:4000/cv-achievments',setAchievments,setIsAchievmentsLoading,setError);
        fetchData('http://localhost:4000/cv-diplomas',setDiplomas,setIsDiplomasLoading,setError);
        fetchData('http://localhost:4000/cv-languages',setLanguages,setIsLanguagesLoading,setError);

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
                {isAchievmentsLoading || isDiplomasLoading || isLanguagesLoading && <p>Chargement </p>}
                {error && <p>Erreur !</p>}
                {!isAchievmentsLoading && !isDiplomasLoading && !isLanguagesLoading && !error &&
                 <CVComponent achievments={achievments} diplomas={diplomas} languages={languages} />}
            </main>
        </>
    )
}