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
import Loader from "../Components/loader.tsx";
import Error from "../Components/error.tsx";
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";
import DiplomaInterface from "../Interfaces/diplomaInterface.tsx";
import LanguageInterface from "../Interfaces/languageInterface.tsx";

export default function CV(): React.JSX.Element {

    const [status,setStatus] = useState<boolean>(false);
    const [achievments,setAchievments] = useState<AchievmentInterface[]>([]);
    const [diplomas,setDiplomas] = useState<DiplomaInterface[]>([]);
    const [languages,setLanguages] = useState<LanguageInterface[]>([]);
    
    const [isStatusLoading,setIsStatusLoading] = useState<boolean>(true);
    const [isAchievmentsLoading,setIsAchievmentsLoading] = useState<boolean>(true);
    const [isDiplomasLoading,setIsDiplomasLoading] = useState<boolean>(true);
    const [isLanguagesLoading,setIsLanguagesLoading] = useState<boolean>(true);
    const [error,setError] = useState<boolean>(false);

    useEffect(()=> {
        fetchData('http://localhost:4000/cv-status',setStatus,setIsStatusLoading,setError);
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
                {(isStatusLoading || isAchievmentsLoading || isDiplomasLoading || isLanguagesLoading) && !error && <Loader />}
                {error && <Error frenchMessage="Une erreur est survenue. Veuillez rafraichir la page svp." englishMessage="An error has occured. Please refresh the current page." />}
                {!isStatusLoading && !isAchievmentsLoading && !isDiplomasLoading && !isLanguagesLoading && !error &&
                 <CVComponent availableStatus={status[0].status} achievments={achievments} diplomas={diplomas} languages={languages} />}
            </main>
        </>
    )
}