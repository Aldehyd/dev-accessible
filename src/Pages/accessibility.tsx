import { useContext, useState } from "react";
import ModalContext from "../Contexts/modal-context.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import MainTitle from "../Components/main-title.tsx";
import BackLink from "../Components/back-link.tsx";
import BottomMenu from "../Layout/bottomMenu.tsx";
import LanguageModal from "../Modals/LanguageModal.tsx";
import MainMenuModal from '../Modals/mainMenuModal.tsx';
import AccessibilityAnalysisInfosModal from "../Modals/accessibilityAnalysisInfosModal.tsx";
import BurgerMenuButton from "../Components/burger-menu-button.tsx";
import Accessibot from "../Components/accessibot.tsx";
import AccessibotPlatform from "../Components/accessibot-platform.tsx";
import AccessibilityMain from "../Layout/accessibilityMain.tsx";
import AccessibilityAnalysisWarningContext from "../Contexts/accessibility-analysis-warning-context.tsx";
import AccessibilityAnalysisModal from "../Modals/accessibilityAnalysisModal.tsx";

export default function Accessibility(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const {accessibilityAnalysisWarning,changeAccessibilityAnalysisWarning} = useContext(AccessibilityAnalysisWarningContext);

    const [isAccessibilityAnalysisModalDisplayed,setIsAccessibilityAnalysisModalDisplayed] = useState<boolean>(false);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);
    const [isMainMenuExpanded,setIsMainMenuExpanded] = useState<boolean>(false);
    const [isAccessibilityAnalysisInfosModalDisplayed,setIsAccessibilityAnalysisInfosModalDisplayed] = useState<boolean>(false);

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
                    setAccessibilityAnalysisModalDisplay={setIsAccessibilityAnalysisInfosModalDisplayed}  />
            </header>
            <BurgerMenuButton isExpanded={isMainMenuExpanded} setIsExpanded={setIsMainMenuExpanded} />
            <MainMenuModal isExpanded={isMainMenuExpanded} setIsExpanded={setIsMainMenuExpanded} />
            <Accessibot setDisplay={setIsAccessibilityAnalysisModalDisplayed} />
            <AccessibotPlatform />
            <main>
                <BackLink />
                <MainTitle frenchText="Accessibilité" englishText="Accessibility" />
                <AccessibilityMain />
            </main>
            <footer>
                <BottomMenu />
            </footer>
        </>
    )
}