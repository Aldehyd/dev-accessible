
import CVComponent from "../Layout/cvComponent.tsx";
import { useState, useEffect, useContext } from "react";
import { fetchData } from "../Functions/fetchData.tsx";
import Loader from "../Components/loader.tsx";
import Error from "../Components/error.tsx";
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";
import DiplomaInterface from "../Interfaces/diplomaInterface.tsx";
import LanguageInterface from "../Interfaces/languageInterface.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import ModalContext from "../Contexts/modal-context.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";
import BackLink from "../Components/back-link.tsx";
import MainTitle from "../Components/main-title.tsx";
import BottomMenu from "../Layout/bottomMenu.tsx";
import LanguageModal from "../Modals/LanguageModal.tsx";

export default function CV(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);

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
        fetchData('https://dev-accessible.com/cv-statu',setStatus,setIsStatusLoading,setError);
        fetchData('https://dev-accessible.com/cv-achievments',setAchievments,setIsAchievmentsLoading,setError);
        fetchData('https://dev-accessible.com/cv-diplomas',setDiplomas,setIsDiplomasLoading,setError);
        fetchData('https://dev-accessible.com/cv-languages',setLanguages,setIsLanguagesLoading,setError);
    },[]);

    useEffect(()=> {
        if(isModalDisplayed) {
            document.body.classList.add('has-modal');
        } else {
            document.body.classList.remove('has-modal');
        };
    },[isModalDisplayed]);
    
    return (
        <>
            {isModalDisplayed && <ModalDarkBackground />}
            {isLanguageModalDisplayed && <LanguageModal setDisplay={setIsLanguageModalDisplayed} />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed}
                    setLanguageModalDisplay={setIsLanguageModalDisplayed} />
            </header>
                
            <main>
                <MainTitle frenchText="CV" englishText="CV" />
                <BackLink />
                {(isStatusLoading || isAchievmentsLoading || isDiplomasLoading || isLanguagesLoading) && !error && <Loader />}
                {error && <Error frenchMessage="Une erreur est survenue. Veuillez rafraichir la page svp." englishMessage="An error has occured. Please refresh the current page." />}
                {!isStatusLoading && !isAchievmentsLoading && !isDiplomasLoading && !isLanguagesLoading && !error &&
                 <CVComponent availableStatus={status[0].status} achievments={achievments} diplomas={diplomas} languages={languages} />}
            </main>
            <footer>
                <BottomMenu />
            </footer>
        </>
    )
}