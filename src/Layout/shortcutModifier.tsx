import { useContext, useState, useEffect, useRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import BasicButton from "../Components/basic-button.tsx";
import ShortcutsContext from "../Contexts/shortcuts-context.tsx";

import home from '../Pictures/keys/home.png';
import pagedown from '../Pictures/keys/page-down.png';
import pageup from '../Pictures/keys/page-up.png';

const keyPictures = {
    home: home,
    pagedown: pagedown,
    pageup: pageup
}

interface ShortcutModifierPropsInterface {
    shortcut: {id: number, name: string, defaultKey: string, currentKey: string, frenchLabel: string, englishLabel: string},
    setShortcutsState: (shortcut: {id: number, name: string, defaultKey: string, currentKey: string, frenchLabel: string, englishLabel: string}[])=>void
}

export default function ShortcutModifier({shortcut,shortcutsState,setShortcutsState}: ShortcutModifierPropsInterface): React.JSX.Element {
    console.log(shortcutsState)
    const {language} = useContext(LanguageContext);

    const {shortcuts,changeShortcuts} = useContext(ShortcutsContext);

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

    const [currentKey,setCurrentKey] = useState<string>(shortcut.currentKey);

    const [inputValue,setInputValue] = useState<{french: string, english : string}>({french: translateFunction(shortcut.currentKey),english: shortcut.currentKey});

    const input = useRef(null);

    const [toolTipDisplayed,setToolTipDisplayed] = useState<boolean>(false);
    const [successMessageDisplayed,setSuccessMessageDisplayed] = useState<boolean>(false);
    const [keyPictureDisplayed,setKeyPictureDisplayed] = useState<boolean | string>(false);

    const handleKeyDown = (e:KeyboardEvent)=> {
        if(e.key === 'Escape') {
            setToolTipDisplayed(false);
            setSuccessMessageDisplayed(false);
            setKeyPictureDisplayed(false);
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
                modifyShortcuts();
            };
        };
    };

    const handleFocus = ()=> {
        setToolTipDisplayed(true);
        setSuccessMessageDisplayed(false);
    };

    useEffect(()=> {
        if(input.current)
            input.current.value = (language === "french" ? inputValue.french : inputValue.english);

        const keyToShowPictureOf = ["pageup","pagedown","home"];
        if(keyToShowPictureOf.includes(inputValue.english.toLowerCase())) {
            setKeyPictureDisplayed(inputValue.english.toLowerCase());
        } else {
            setKeyPictureDisplayed(false);
        };

    },[inputValue,language]);

    const modifyShortcuts = ()=> {
        let newShortcuts = shortcuts;
        newShortcuts[shortcut.id].currentKey = inputValue.english;
        setShortcutsState(...newShortcuts,[]); //to force rerender of shortcut modifiers section
        changeShortcuts(newShortcuts);
        localStorage.setItem('shortcuts',JSON.stringify(newShortcuts));
        setCurrentKey(inputValue.english);
        setSuccessMessageDisplayed(true);
    };

    useEffect(()=> {
        // console.log(shortcutsState)
        setInputValue({french: translateFunction(shortcutsState[shortcut.id].currentKey), english: shortcutsState[shortcut.id].currentKey});
    },[shortcutsState]);

    return (
        <div className="shortcut-setting-container animations">
            <label htmlFor="shortcut-input">{language === "french" ? shortcut.frenchLabel : shortcut.englishLabel} :</label>
            <div className="shortcut-input-container">
                <span className="input-container">  
                    <input type="text" id="shortcut-input" ref={input} className="shortcut-input-container_input" onKeyDown={(e)=> handleKeyDown(e)} onFocus={()=> handleFocus()} onBlur={()=> setToolTipDisplayed(false)} />
                </span>
                <BasicButton frenchText="Modifier" englishText="Modify" disableAbility={true} disabledStatus={inputValue.english === currentKey ? "true" : "false"} onWhiteBackground={true} onClickFunction={modifyShortcuts}/>
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
            {keyPictureDisplayed !== false && 
                <div className="shortcut-setting-container_key-pictures">
                    <img src={keyPictures[keyPictureDisplayed]} className="key-picture" alt="" />
                </div>
            }
        </div>
    )
}