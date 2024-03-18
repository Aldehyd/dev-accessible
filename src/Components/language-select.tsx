
import { useContext, useEffect, useState, useRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function LanguageSelect(): React.JSX.Element {
    
    const {language,changeLanguage} = useContext(LanguageContext);

    const [selectClassList,setSelectClassList] = useState("language-select");
    const [topClassList,setTopClassList] = useState("language-select_top");
    const [centerClassList,setCenterClassList] = useState("language-select_center");

    const languageSelect = useRef(null);
    const languageSelectTop = useRef(null);
    const languageSelectCenter = useRef(null);

    const [expanded,setExpanded] = useState<string>("false");

    const handleClickOnSelect = ()=> {
        expanded === "false" ? setExpanded("true") : setExpanded("false");
    };

    const handleClickOnOption = (choice)=> {
        if(choice !== language) {
            changeLanguage(choice);
            setExpanded("false");
        };
    };

    const closeOnClickAnywhereElse = (e)=> {
        !languageSelect.current?.contains(e.target) && setExpanded("false");
    };

    const handleKeyDown = (e)=> {
        switch(e.key) {
            case "Escape":
                setExpanded("false");
                break;
            default:
                break;
        };
    };

    useEffect(()=> {
        document.documentElement.setAttribute('lang',language === "french" ? "fr" : "en");
        setSelectClassList(`language-select ${language === "french" ? "fr" : "en"}`);
        setTopClassList(`language-select_top ${language === "french" ? "fr" : "en"}`);
        setCenterClassList(`language-select_center ${language === "french" ? "en" : "fr"}`);
    },[language]);
    
    useEffect(()=> {
        window.addEventListener('click',(e)=> closeOnClickAnywhereElse(e));
            
        return() => {window.removeEventListener('click',closeOnClickAnywhereElse)}
    },[]);

    return(
        <div className={selectClassList} ref={languageSelect} aria-expanded={expanded} 
            role="listbox" aria-label={language === "french" ? "choix de la langue" : "language choice"} 
            onKeyDown={(e)=> handleKeyDown(e)} tabIndex="0">
            <div ref={languageSelectTop} className={topClassList} onClick={()=> handleClickOnSelect()}>
                <span className="language-select_top_fr" role="option">FR</span>
                <span className="language-select_top_en" role="option">EN</span>
            </div>
            <div ref={languageSelectCenter} className={centerClassList}>
                <span className="language-select_center_fr" role="option"
                    onClick={()=> handleClickOnOption("french")} aria-label="français" lang="fr">
                    FR
                </span>
                <span className="language-select_center_en" role="option"
                onClick={()=> handleClickOnOption("english")} aria-label="english" lang="en">
                    EN
                </span>
            </div>
            <div className="language-select_bottom"></div>
        </div>
    )
}