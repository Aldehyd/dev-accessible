
import { useContext, useEffect, useState, useRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function LanguageSelect(): React.JSX.Element {
    
    const {language,changeLanguage} = useContext(LanguageContext);

    const [selectClassList,setSelectClassList] = useState("language-select");
    const [topClassList,setTopClassList] = useState("language-select_top");
    const [centerClassList,setCenterClassList] = useState("language-select_center");

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

    useEffect(()=> {
        setSelectClassList(`language-select ${language === "french" ? "fr" : "en"}`);
        setTopClassList(`language-select_top ${language === "french" ? "fr" : "en"}`);
        setCenterClassList(`language-select_center ${language === "french" ? "en" : "fr"}`);
    },[language]);
    
    const languageSelectTop = useRef(null);
    const languageSelectCenter = useRef(null);

    return(
        <div className={selectClassList} aria-expanded={expanded} role="listbox" aria-label="language choice">
            <div ref={languageSelectTop} className={topClassList} onClick={()=> handleClickOnSelect()}>
                <span className="language-select_top_fr" role="option">FR</span>
                <span className="language-select_top_en" role="option">EN</span>
            </div>
            <div ref={languageSelectCenter} className={centerClassList}>
                <span className="language-select_center_fr" role="option"
                    onClick={()=> handleClickOnOption("french")}>
                    FR
                </span>
                <span className="language-select_center_en" role="option"
                onClick={()=> handleClickOnOption("english")}>
                    EN
                </span>
            </div>
            <div className="language-select_bottom"></div>
        </div>
    )
}