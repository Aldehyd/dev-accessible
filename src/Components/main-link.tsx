import { useContext } from "react";
import { Link } from "react-router-dom";
import LanguageContext from "../Contexts/language-context.tsx";

interface MainLinkInterface {
    frenchText: string,
    englishText: string,
    route: string
}

export default function MainLink({frenchText,englishText,route}: MainLinkInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return(
        <Link to={route} className="main-link">
            {language === "french" ? frenchText : englishText}
        </Link>
    )   
}