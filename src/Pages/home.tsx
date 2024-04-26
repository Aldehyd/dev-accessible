import { useEffect, useContext, useState } from "react";
import BottomMenu from "../Layout/bottomMenu.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";
import ModalContext from "../Contexts/modal-context.tsx";
import EnvironnementModal from "../Modals/EnvironnementModal.tsx";
import LanguageModal from "../Modals/LanguageModal.tsx";
import MainMenu from "../Layout/mainMenu.tsx";

export default function Home(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);
    const [isEnvironnementModalDisplayed,setIsEnvironnementModalDisplayed] = useState<boolean>(false);

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
            {isEnvironnementModalDisplayed && <EnvironnementModal setDisplay={setIsEnvironnementModalDisplayed} />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed}
                    setLanguageModalDisplay={setIsLanguageModalDisplayed}
                    setEnvironnementModalDisplay={setIsEnvironnementModalDisplayed} 
                    home={true} />
            </header>
            <div className="under-construction-page">
                <MainMenu />
            </div>
            <footer className="home">
                <BottomMenu home={true} />
            </footer>
        </>
    )
}