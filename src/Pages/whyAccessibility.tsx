import {useContext, useState} from 'react';
import ModalContext from '../Contexts/modal-context.tsx';
import ModalDarkBackground from '../Components/modal-dark-background.tsx';
import AccessibilitySettingsModal from '../Modals/AccessibilitySettingsModal.tsx';
import TopMenu from '../Layout/topMenu.tsx';
import BackLink from '../Components/back-link.tsx';
import MainTitle from '../Components/main-title.tsx';
import BottomMenu from '../Layout/bottomMenu.tsx';
import WhyAccessibilityMain from '../Layout/whyAccessibilityMain.tsx';
import LanguageModal from "../Modals/LanguageModal.tsx";
import MainMenuModal from '../Modals/mainMenuModal.tsx';

export default function WhyAccessibility(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);
    const [isMainMenuExpanded,setIsMainMenuExpanded] = useState<boolean>(false);

    return (
        <>
            {isModalDisplayed && <ModalDarkBackground />}
            {isLanguageModalDisplayed && <LanguageModal setDisplay={setIsLanguageModalDisplayed} />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed}
                    setLanguageModalDisplay={setIsLanguageModalDisplayed} />
            </header>
            <MainMenuModal isExpanded={isMainMenuExpanded} setIsExpanded={setIsMainMenuExpanded} />
            <main>
                <BackLink />
                <MainTitle frenchText="Pourquoi l'accessibilité ?" englishText="Why accessibility ?" />
                <WhyAccessibilityMain />
            </main>
            <footer>
                <BottomMenu />
            </footer>
        </>
    )
}