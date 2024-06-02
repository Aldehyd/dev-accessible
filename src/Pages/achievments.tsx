import AchievmentsMain from "../Layout/achievmentsMain.tsx";
import { useState, useEffect, useContext } from "react";
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";
import { fetchData } from "../Functions/fetchData.tsx";
import Error from "../Components/error.tsx";
import Loader from "../Components/loader.tsx";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import MainTitle from "../Components/main-title.tsx";
import ModalContext from "../Contexts/modal-context.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";
import BackLink from "../Components/back-link.tsx";
import BottomMenu from "../Layout/bottomMenu.tsx";
import LanguageModal from "../Modals/LanguageModal.tsx";
import MainMenuModal from '../Modals/mainMenuModal.tsx';
import AccessibilityAnalysisInfosModal from "../Modals/accessibilityAnalysisInfosModal.tsx";
import BurgerMenuButton from "../Components/burger-menu-button.tsx";
import Accessibot from "../Components/accessibot.tsx";
import AccessibotPlatform from "../Components/accessibot-platform.tsx";
import AccessibilityAnalysisWarningContext from "../Contexts/accessibility-analysis-warning-context.tsx";
import AccessibilityAnalysisModal from "../Modals/accessibilityAnalysisModal.tsx";

export default function Achievments(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const {accessibilityAnalysisWarning,changeAccessibilityAnalysisWarning} = useContext(AccessibilityAnalysisWarningContext);

    const [isAccessibilityAnalysisModalDisplayed,setIsAccessibilityAnalysisModalDisplayed] = useState<boolean>(false);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);
    const [achievments,setAchievments] = useState<AchievmentInterface[]>([]);
    const [isMainMenuExpanded,setIsMainMenuExpanded] = useState<boolean>(false);
    const [isAccessibilityAnalysisInfosModalDisplayed,setIsAccessibilityAnalysisInfosModalDisplayed] = useState<boolean>(false);

    const [isLoading,setIsLoading] = useState<boolean>(true);
    const [error,setError] = useState<boolean>(false);

    const {changeAchievments} = useContext(AchievmentsContext);

    useEffect(()=> {
        if(isModalDisplayed) {
            document.body.classList.add('has-modal');
        } else {
            document.body.classList.remove('has-modal');
        };
    },[isModalDisplayed]);

    useEffect(()=> {
        fetchData('https://dev-accessible.com/cv-achievments',setAchievments,setIsLoading,setError);
    },[]);

    useEffect(()=> {
        !isLoading && !error && changeAchievments(achievments)
    },[isLoading,error,changeAchievments,achievments]);

    return (
        <>
            {isModalDisplayed && <ModalDarkBackground />}
            {isAccessibilityAnalysisModalDisplayed && <AccessibilityAnalysisModal setDisplay={setIsAccessibilityAnalysisModalDisplayed} />}
            {isLanguageModalDisplayed && <LanguageModal setDisplay={setIsLanguageModalDisplayed} />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            {isAccessibilityAnalysisInfosModalDisplayed && <AccessibilityAnalysisInfosModal setDisplay={setIsAccessibilityAnalysisInfosModalDisplayed} />}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed}
                    setLanguageModalDisplay={setIsLanguageModalDisplayed}
                    setAccessibilityAnalysisModalDisplay={setIsAccessibilityAnalysisInfosModalDisplayed} />
            </header>
            <BurgerMenuButton setIsExpanded={setIsMainMenuExpanded} />
            <MainMenuModal isExpanded={isMainMenuExpanded} setIsExpanded={setIsMainMenuExpanded} />
            <Accessibot setDisplay={setIsAccessibilityAnalysisModalDisplayed} />
            <AccessibotPlatform />
            <main>
                <MainTitle frenchText="Réalisations" englishText="Achievments"/>
                <BackLink />
                {isLoading && !error && <Loader />}
                {error && <Error frenchMessage="Une erreur est survenue. Veuillez rafraichir la page svp." englishMessage="An error has occured. Please refresh the current page." />}
                {!isLoading && !error && <AchievmentsMain achievments={achievments} />}
            </main>
            <footer>
                <BottomMenu />
            </footer>
        </>
        
    )
}