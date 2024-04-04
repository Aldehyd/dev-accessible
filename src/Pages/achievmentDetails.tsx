
import AchievmentDetailsMain from "../Layout/achievmentDetailsMain.tsx";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MainTitle from "../Components/main-title.tsx";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import ModalContext from "../Contexts/modal-context.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";

export default function AchievmentDetails(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);

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
                <MainTitle frenchText={achievment} englishText={achievment} />
                <AchievmentDetailsMain achievment={currentAchievment} />
            </main>
        </>
        
    )
}