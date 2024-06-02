
import AchievmentDetailsMain from "../Layout/achievmentDetailsMain.tsx";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MainTitle from "../Components/main-title.tsx";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import ModalContext from "../Contexts/modal-context.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";
import BottomMenu from "../Layout/bottomMenu.tsx";
import LanguageModal from "../Modals/LanguageModal.tsx";
import MainMenuModal from '../Modals/mainMenuModal.tsx';
import AccessibilityAnalysisInfosModal from "../Modals/accessibilityAnalysisInfosModal.tsx";
import BackLink from "../Components/back-link.tsx";
import BurgerMenuButton from "../Components/burger-menu-button.tsx";
import Accessibot from "../Components/accessibot.tsx";
import AccessibotPlatform from "../Components/accessibot-platform.tsx";
import AccessibilityAnalysisWarningContext from "../Contexts/accessibility-analysis-warning-context.tsx";
import AccessibilityAnalysisModal from "../Modals/accessibilityAnalysisModal.tsx";

export default function AchievmentDetails(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const {accessibilityAnalysisWarning,changeAccessibilityAnalysisWarning} = useContext(AccessibilityAnalysisWarningContext);

    const [isAccessibilityAnalysisModalDisplayed,setIsAccessibilityAnalysisModalDisplayed] = useState<boolean>(false);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);
    const [isMainMenuExpanded,setIsMainMenuExpanded] = useState<boolean>(false);
    const [isAccessibilityAnalysisInfosModalDisplayed,setIsAccessibilityAnalysisInfosModalDisplayed] = useState<boolean>(false);

    const {achievments} = useContext(AchievmentsContext);

    const {achievment} = useParams();
    const currentAchievment = achievments.find(project => project.title === achievment || project.title === `${achievment}.com`);

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
                <MainTitle frenchText={achievment} englishText={achievment} />
                <BackLink frenchText="Réalisations" englishText="Achievments" route="/achievments" />
                <AchievmentDetailsMain achievment={currentAchievment} />
            </main>
            <footer>
                <BottomMenu />
            </footer>
        </>
        
    )
}