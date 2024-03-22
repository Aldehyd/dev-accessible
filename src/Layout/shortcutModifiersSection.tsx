import { useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import ShortcutsContext from "../Contexts/shortcuts-context.tsx";
import ShortcutModifier from "./shortcutModifier.tsx";
import BasicButton from "../Components/basic-button.tsx";

export default function ShortcutModifiersSection(): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const {shortcuts,changeShortcuts} = useContext(ShortcutsContext);

    const [shortcutsState,setShortcutsState] = useState(shortcuts); //to re render after resetting shortcuts
    
    const resetShortcuts = ()=> {
        let newShortcuts = shortcuts;
        for(let shortcut of newShortcuts) {
            shortcut.currentKey = shortcut.defaultKey;
        };
        setShortcutsState(newShortcuts);
        changeShortcuts(newShortcuts);
        localStorage.setItem('shortcuts',JSON.stringify(newShortcuts));
    };

    return(
        <section className="shortcut-modifiers-section">
            <h2>
                {
                    language === "french" ? 
                        "Modifier les raccourcis clavier :"
                        :
                        "Modify keyboard shorcuts :"
                }
            </h2>
            <div className="shortcut-modifiers-section_shortcut-modifiers-container">
                {
                    shortcuts.map(shortcut => {
                        return(
                            <ShortcutModifier key={shortcut.id} shortcut={shortcut} setShortcutsState={setShortcutsState} />
                        )
                    })
                   
                }
            </div>
            <BasicButton frenchText="Réinitialiser les raccourcis" englishText="Reset keyboard shortcuts" disableAbility={true} disabledStatus={shortcutsState !== shortcuts ? "false" : "true"} onClickFunction={()=> resetShortcuts()} />
        </section>
    )
}