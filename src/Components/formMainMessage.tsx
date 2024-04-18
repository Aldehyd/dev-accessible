import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface FormMainAlertPropsInterface {
    role ?: string,
    frenchText: string,
    englishText: string,
}

export default function FormMainMessage({role="message",frenchText,englishText}: FormMainAlertPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const classList = `main-message ${role === "success" ? "main-success" : ""} ${role === "alert" ? "main-alert" : ""}`;

    return (
        <p className={classList} role={role === "alert" ? "alert" : "status"}>
            {language === "french" ? frenchText : englishText}
        </p>
    )
}