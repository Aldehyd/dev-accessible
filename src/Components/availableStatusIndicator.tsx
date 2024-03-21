import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface AvailableStatusIndicatorPropsInterface {
    isAvailable: boolean
}

export default function AvailableStatusIndicator({isAvailable}: AvailableStatusIndicatorPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const classList = `available-status-indicator ${isAvailable ? "available" : ""}`;

    return(
        <span className={classList}>
            {
            isAvailable ?
                language === "french" ? "disponible" : "available"
                :
                language === "french" ? "non disponible" : "not available"
            }
        </span>
    )
}