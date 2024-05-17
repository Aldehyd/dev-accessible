import { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../Contexts/language-context.tsx";

interface CustomLinkInterface {
    frenchText: string,
    englishText: string,
    openInNewTab?: boolean,
    route: string,
    type?: string
}

export default function CustomLink({frenchText,englishText,openInNewTab=false,route,type="secundary"}: CustomLinkInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const classList = `link ${type === "main" ? "main-link" : ""} ${type === "secundary" ? "secundary-link" : ""}`;

    return(
        <Link to={route} target={openInNewTab ? "_blank" : ""} className={classList}>
            {language === "french" ? frenchText : englishText}
        </Link>
    )   
}