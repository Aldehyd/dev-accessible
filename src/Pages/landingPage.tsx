import { useContext, useState, useEffect } from "react";
import ModalContext from "../Contexts/modal-context.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import MainTitle from "../Components/main-title.tsx";
import LandingPageChoice from "../Components/landing-page-choice.tsx";
import FlyingSaucer from "../Components/flying-saucer.tsx";
import EnvironnementContext from "../Contexts/environnement-context.tsx";
import LanguageModal from "../Modals/LanguageModal.tsx";

export default function LandingPage(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const {environnement,changeEnvironnement} = useContext(EnvironnementContext);

    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);
    const [choice,setChoice] = useState("");

    const recruiterClassList = `landing-page_choice-container ${choice === "client" ? "broken" : ""}`;
    const clientClassList = `landing-page_choice-container ${choice === "recruiter" ? "broken" : ""}`;

    const mainClassList = `landing-page_main ${environnement !== "" ? "disappear" : ""}`;

    useEffect(()=> {
        const environnementSavedStatus = localStorage.getItem('environnement');

        if(environnementSavedStatus !== undefined && environnementSavedStatus !== null) {
            changeEnvironnement(environnementSavedStatus);
            window.location = window.location + "home";
        };
    },[]);

    return (
        <>
            {isModalDisplayed && <ModalDarkBackground />}
            {isLanguageModalDisplayed && <LanguageModal setDisplay={setIsLanguageModalDisplayed} />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed}
                    setLanguageModalDisplay={setIsLanguageModalDisplayed}  />
            </header>
            <main className={mainClassList}>
                <MainTitle home={true} frenchText="Bienvenue !" englishText="Welcome !" />
                <div className="landing-page_choices-container">
                    <div className={recruiterClassList}>
                        <LandingPageChoice frenchText="Je suis un recruteur" 
                            englishText="I am a recruiter"
                            setChoice={setChoice} />
                        <FlyingSaucer side="left" />
                    </div>
                    <div className={clientClassList}>
                        <LandingPageChoice frenchText="Je suis un client" 
                            englishText="I am a client"
                            setChoice={setChoice} />
                        <FlyingSaucer side="right" />
                    </div>
                </div>
            </main>
        </>
    )
}