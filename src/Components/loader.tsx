import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function Loader(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const classList = `loader ${language === "french" ? "french" : ""}`;

    return (
        <div className={classList}>
        <p className="loader_text">
            {language === "french" ? "CHARGEMENT" : "LOADING"}
        </p>
        <div className="loader_timeline">
            <span className="loader_timeline_unit loader_timeline_unit--1"></span>
            <span className="loader_timeline_unit loader_timeline_unit--2"></span>
            <span className="loader_timeline_unit loader_timeline_unit--3"></span>
            <span className="loader_timeline_unit loader_timeline_unit--4"></span>
            <span className="loader_timeline_unit loader_timeline_unit--5"></span>
        </div>
    </div>
    )
}