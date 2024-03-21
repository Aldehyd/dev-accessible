import { useContext, useState, useEffect, useRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import BasicButton from "../Components/basic-button.tsx";

interface ShortcutModifierPropsInterface {
    name: string,
    frenchLabel: string,
    englishLabel: string,
    defaultKey: string,
    modifyFunction: ()=>void
}

export default function ShortcutModifier({name,frenchLabel,englishLabel,defaultKey,modifyFunction}: ShortcutModifierPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const [currentKey,setCurrentKey] = useState<string>('Escape');

    const [inputValue,setInputValue] = useState<{french: string, english : string}>({french: "",english: ""});

    const input = useRef(null);

    const translateFunction: (key: string)=> string = (key)=> {
        let translatedValue ="";
        const keyToTranslate = ["space","escape","delete","capslock","numlock","arrowdown","arrowup","arrowleft","arrowright","pageup","pagedown","home","end","backspace","insert"];

        if(keyToTranslate.includes(key.toLowerCase())) {
            switch(key.toLowerCase()) {
                case "space":
                    translatedValue = "espace";
                    break;
                case "escape":
                    translatedValue = "echap";
                    break;
                case "delete":
                    translatedValue = "suppr";
                    break;
                case "capslock":
                    translatedValue = "maj";
                    break;
                case "numlock":
                    translatedValue = "verr num";
                    break;
                case "arrowdown":
                    translatedValue = "fleche bas";
                    break;
                case "arrowup":
                    translatedValue = "fleche haut";
                    break;
                case "arrowleft":
                    translatedValue = "fleche gauche";
                    break;
                case "arrowright":
                    translatedValue = "fleche bas";
                    break;
                case "pageup":
                    translatedValue = "page haut";
                    break;
                case "pagedown":
                    translatedValue = "page bas";
                    break;
                case "end":
                    translatedValue = "fin";
                    break;
                case "home":
                    translatedValue = "debut";
                    break;
                case "backspace":
                    translatedValue = "retour arr";
                    break;
                case "insert":
                    translatedValue = "inser";
                    break;
                default:
                    break;
            };
        } else {
            translatedValue = key.toLowerCase();
        };
        return translatedValue;
    };

    useEffect(()=> {
        const savedKey = localStorage.getItem(name);

        if(savedKey !== undefined && savedKey !== null) {
            setCurrentKey(savedKey);
            setInputValue({french: translateFunction(savedKey), english: savedKey});
        } else {
            setCurrentKey(defaultKey);
            setInputValue({french: translateFunction(defaultKey), english: defaultKey});
        };
    },[]);

    const [toolTipDisplayed,setToolTipDisplayed] = useState<boolean>(false);
    const [successMessageDisplayed,setSuccessMessageDisplayed] = useState<boolean>(false);
    const [keyPictureDisplayed,setKeyPictureDisplayed] = useState<boolean>(false);

    const handleKeyDown = (e:KeyboardEvent)=> {
        if(e.key === 'Escape') {
            setToolTipDisplayed(false);
        };
        if(e.key !=='Tab' && e.key !=='Enter' && e.key !=='Meta') {
            e.preventDefault();
            if(e.key === ' ') {
                setInputValue({french: 'espace', english: 'space'});
            } else {
                setInputValue({french: translateFunction(e.key), english: e.key});
            };
        } else if(e.key === 'Enter') {
            if(inputValue.english !== currentKey) {
                onClickFunction();
            };
        };
    };

    useEffect(()=> {
        console.log(inputValue)
        if(input.current)
            input.current.value = (language === "french" ? inputValue.french : inputValue.english);
    },[inputValue,language]);

    const onClickFunction = ()=> {
        localStorage.setItem(name,inputValue.english);
        modifyFunction();
    };

    return (
        <div className="shortcut-setting-container animations">
            <label htmlFor="shortcut-input">{language === "french" ? frenchLabel : englishLabel} :</label>
            <div className="shortcut-input-container">
                <span className="input-container">  
                    <input type="text" id="shortcut-input" ref={input} className="shortcut-input-container_input" onKeyDown={(e)=> handleKeyDown(e)} onFocus={()=> setToolTipDisplayed(true)} onBlur={()=> setToolTipDisplayed(false)} />
                </span>
                <BasicButton frenchText="Modifier" englishText="Modify" disableAbility={true} disabledStatus={inputValue.english === currentKey ? "true" : "false"} onWhiteBackground={true} onClickFunction={onClickFunction}/>
                {successMessageDisplayed && <p className="shortcut-input-container_success-message">Raccourci modifié !</p>}
                {
                    toolTipDisplayed && 
                        <p className="shortcut-input-container_tooltip">
                            {language === "french" ? 
                                "Appuyez sur une touche du clavier pour choisir une nouvelle touche de raccourci puis cliquez sur 'modifier' ou tapez 'entrée' pour confirmer votre choix."
                                :
                                "Press a key to choose a new shortcut then clic on 'Modify' button or press 'Enter' to confirm your choice."
                            }
                        </p>
                }
            </div>
            {keyPictureDisplayed && <div className="shortcut-setting-container_key-pictures">
                <img src="home.png" className="home" alt="" />
                <img src="end.png" className="end" alt="" />
                <img src="page-down.png" className="pagedown" alt="" />
                <img src="page-up.png" className="pageup" alt="" />
            </div>}
        </div>
    )
}