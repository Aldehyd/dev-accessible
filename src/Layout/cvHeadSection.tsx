import { useContext } from "react";
import AvailableStatusIndicator from "../Components/availableStatusIndicator.tsx";
import LanguageContext from "../Contexts/language-context.tsx";

export default function CVHeadSection({availableStatus}): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return (
        <div className="cv_section cv_section--head">
            <h1>{language === "french" ? "Développeur Full-stack Accessibilité" : "Full-stack Developer Accessibility"}</h1>
            <div className="cv_section--head_infos-wrapper">
                <AvailableStatusIndicator isAvailable={availableStatus} />
                <img className="cv_section--head_identity-picture" src="/img/guitare.jpg" alt="" />
            </div>
        </div>
    )
}