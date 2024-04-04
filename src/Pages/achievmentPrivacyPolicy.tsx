import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import MainTitle from "../Components/main-title.tsx";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import ModalContext from "../Contexts/modal-context.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";

export default function AchievmentPrivacyPolicy(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);

    const {language} = useContext(LanguageContext);
    const {achievments} = useContext(AchievmentsContext);

    const {achievment} = useParams();
    const currentAchievment = achievments.find(project => project.title === achievment || project.title === `${achievment}.com`);

    return (
        <>
            {isModalDisplayed && <ModalDarkBackground />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed} />
            </header>
            <main>
                <MainTitle frenchText="Règles de confidentialité" englishText="Privacy policy" />
                <h2>
                    {language === "french" ? "Propriétaire et contrôleur des données" : "Owner and Data Controller"}
                </h2>
                <p>
                    {language === "french" ? currentAchievment?.privacyPolicy?.frenchCollect : currentAchievment?.privacyPolicy?.englishCollect}
                </p>
                <h2>
                    {language === "french" ? "Email du propriétaire" : "Owner contact email"}
                </h2>
                <p>
                {language === "french" ? currentAchievment?.privacyPolicy?.frenchCollect : currentAchievment?.privacyPolicy?.englishCollect}
                </p>
                <h2>
                    {language === "french" ? "Action légale" : "Legal action"}
                </h2>
                <p>
                {language === "french" ? currentAchievment?.privacyPolicy?.frenchCollect : currentAchievment?.privacyPolicy?.englishCollect}
                </p>
                <h2>
                    {language === "french" ? "Modifications de ces régles" : "Changes to this privacy policy"}
                </h2>
                <p>
                    {language === "french" ? currentAchievment?.privacyPolicy?.frenchCollect : currentAchievment?.privacyPolicy?.englishCollect}
                </p>
            </main> 
        </>
    )
}