import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MainTitle from "../Components/main-title.tsx";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import ModalContext from "../Contexts/modal-context.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";
import BackLink from "../Components/back-link.tsx";
import BottomMenu from "../Layout/bottomMenu.tsx";
import LanguageModal from "../Modals/LanguageModal.tsx";
import MainMenuModal from '../Modals/mainMenuModal.tsx';

export default function AchievmentPrivacyPolicy(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);
    const [isMainMenuExpanded,setIsMainMenuExpanded] = useState<boolean>(false);

    const {language} = useContext(LanguageContext);
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
            {isLanguageModalDisplayed && <LanguageModal setDisplay={setIsLanguageModalDisplayed} />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed}
                    setLanguageModalDisplay={setIsLanguageModalDisplayed} />
            </header>
            <MainMenuModal isExpanded={isMainMenuExpanded} setIsExpanded={setIsMainMenuExpanded} />
            <main>
                <BackLink />
                <MainTitle frenchText="Règles de confidentialité" englishText="Privacy policy" />
                <p>
                    {language === "french" ? currentAchievment?.privacyPolicy?.frenchCollect : currentAchievment?.privacyPolicy?.englishCollect}
                </p>
                <h2>
                    {language === "french" ? "Propriétaire et contrôleur des données" : "Owner and Data Controller"}
                </h2>
                <p>{currentAchievment?.privacyPolicy?.ownerName}</p>
                <p>{currentAchievment?.privacyPolicy?.ownerAdress}</p>
                <p>
                    {language === "french" ? currentAchievment?.privacyPolicy?.frenchCourt : currentAchievment?.privacyPolicy?.englishCourt}
                </p>
                <h2>
                    {language === "french" ? "Email du propriétaire" : "Owner contact email"}
                </h2>
                <p>
                    {currentAchievment?.privacyPolicy?.mail}
                </p>
                <h2>
                    {language === "french" ? "Action légale" : "Legal action"}
                </h2>
                <p>
                    {language === "french" ? currentAchievment?.privacyPolicy?.frenchLegalAction : currentAchievment?.privacyPolicy?.englishLegalAction}
                </p>
                <h2>
                    {language === "french" ? "Modifications de ces régles" : "Changes to this privacy policy"}
                </h2>
                <p>
                    {language === "french" ? currentAchievment?.privacyPolicy?.frenchPolicyChanges : currentAchievment?.privacyPolicy?.englishPolicyChanges}
                </p>
                <p>
                    {language === "french" ? currentAchievment?.privacyPolicy?.frenchNewConsent : currentAchievment?.privacyPolicy?.englishNewConsent}
                </p>
                <h2>
                    {language === "french" ? "Date de la dernière mise à jour des règles" : "Last rules update date"}
                </h2>
                <p>
                    {currentAchievment?.privacyPolicy?.lastChangeDate}
                </p>
            </main> 
            <footer>
                <BottomMenu />
            </footer>
        </>
    )
}