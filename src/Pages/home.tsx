import { useEffect, useContext, useState } from "react";
import BottomMenu from "../Layout/bottomMenu.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";
import ModalContext from "../Contexts/modal-context.tsx";
import EnvironnementModal from "../Modals/EnvironnementModal.tsx";
import LanguageModal from "../Modals/LanguageModal.tsx";
import MainMenu from "../Layout/mainMenu.tsx";
import Accessibot from "../Components/accessibot.tsx";
import AccessibilityAnalysisInfosModal from "../Modals/accessibilityAnalysisInfosModal.tsx";
import AccessibilityAnalysisModal from "../Modals/accessibilityAnalysisModal.tsx";
import AccessibilityAnalysisLeaveModal from "../Modals/accessibilityAnalysisLeaveModal.tsx";
import AccessibilityAnalysisWarningContext from "../Contexts/accessibility-analysis-warning-context.tsx";

export default function Home(): React.JSX.Element {

    const {isModalDisplayed,changeIsModalDisplayed} = useContext(ModalContext);
    const {accessibilityAnalysisWarning,changeAccessibilityAnalysisWarning} = useContext(AccessibilityAnalysisWarningContext);

    const [isAccessibilityAnalysisModalDisplayed,setIsAccessibilityAnalysisModalDisplayed] = useState<boolean>(false);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);
    const [isEnvironnementModalDisplayed,setIsEnvironnementModalDisplayed] = useState<boolean>(false);
    const [isAccessibilityAnalysisInfosModalDisplayed,setIsAccessibilityAnalysisInfosModalDisplayed] = useState<boolean>(false);

    useEffect(()=> {
        changeIsModalDisplayed(false);
        document.body.classList.add("home");
        
        return ()=> document.body.classList.remove("home");
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
            {isAccessibilityAnalysisModalDisplayed && <AccessibilityAnalysisModal setDisplay={setIsAccessibilityAnalysisModalDisplayed} />}
            {isLanguageModalDisplayed && <LanguageModal setDisplay={setIsLanguageModalDisplayed} />}
            {isEnvironnementModalDisplayed && <EnvironnementModal setDisplay={setIsEnvironnementModalDisplayed} />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            {isAccessibilityAnalysisInfosModalDisplayed && <AccessibilityAnalysisInfosModal setDisplay={setIsAccessibilityAnalysisInfosModalDisplayed} />}
            {accessibilityAnalysisWarning && <AccessibilityAnalysisLeaveModal setDisplay={changeAccessibilityAnalysisWarning}/>}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed}
                    setLanguageModalDisplay={setIsLanguageModalDisplayed}
                    setEnvironnementModalDisplay={setIsEnvironnementModalDisplayed} 
                    setAccessibilityAnalysisModalDisplay={setIsAccessibilityAnalysisInfosModalDisplayed}
                    home={true} />
            </header>
            <main>
                <MainMenu />
            </main>
            <footer className="home">
                <BottomMenu home={true} />
            </footer>
            <Accessibot setDisplay={setIsAccessibilityAnalysisModalDisplayed} />
        </>
    )
}