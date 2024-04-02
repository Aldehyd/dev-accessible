import { useContext } from "react";
import { useParams } from "react-router-dom";
import MainTitle from "../Components/main-title.tsx";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";

export default function AchievmentPrivacyPolicy(): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const {achievments} = useContext(AchievmentsContext);

    const {achievment} = useParams();
    const currentAchievment = achievments.find(project => project.title === achievment || project.title === `${achievment}.com`);

    return (
        <>
            <MainTitle frenchText="Règles de confidentialité" englishText="Privacy policy" />
            <p>{language === "french" ? currentAchievment?.privacyPolicy?.frenchText : currentAchievment?.privacyPolicy?.englishText}</p>
        </>
    )
}