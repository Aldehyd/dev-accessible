import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface MainTitlePropsInterface {
    frenchText: string,
    englishText: string,
    home: boolean,
    mobile: boolean
}

export default function MainTitle({frenchText,englishText,home=false,mobile=false}: MainTitlePropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const classList = `main-title ${(home || mobile) && "main-title--home"}`;

    return (
        <h1 className={classList}>{language === "french" ? frenchText : englishText}</h1>
    )
}