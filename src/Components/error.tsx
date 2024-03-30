import { useContext } from "react";
import ErrorSmiley from "./error-smiley.tsx";
import LanguageContext from "../Contexts/language-context.tsx";

export default function Error({frenchMessage,englishMessage}): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return (
        <div className="error">
            <ErrorSmiley />
            <p className="error_message">
                {language === "french" ? frenchMessage : englishMessage}
            </p>
        </div>
    )
}