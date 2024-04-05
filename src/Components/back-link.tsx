import { useContext, useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import LanguageContext from "../Contexts/language-context.tsx";

export default function BackLink(): React.JSX.Element {

    const navigate = useNavigate();
    const {language} = useContext(LanguageContext);

    return(
        <button className="main-link" onClick={()=> navigate(-1)}>
            {language === "french" ? "Page précédente" : "Previous page"}
        </button>
    )   
}