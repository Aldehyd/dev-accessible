import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Components from './Components/index.tsx';
import LanguageContext from './Contexts/language-context.tsx';
import ShortcutsContext from './Contexts/shortcuts-context.tsx';
import Layouts from './Layout/index.tsx';
import Achievments from './Pages/achievments.tsx';
import {localShortcuts} from './Datas/shortcuts.tsx';

export default function App(): React.JSX.Element {

    const [language,setLanguage] = useState(localStorage.getItem('language') !== undefined && localStorage.getItem('language') !== null && localStorage.getItem('language') === "english" ? "english" : "french"); 

    const changeLanguage : (language: string) => void = (language)=> {
        setLanguage(language);
    };

    const [shortcuts,setShortcuts] = useState<{id: number, name: string, defaultKey: string, currentKey: string, frenchLabel: string, englishLabel: string}[]>(localStorage.getItem('shortcuts') !== undefined && localStorage.getItem('shortcuts') !== null ? JSON.parse(localStorage.getItem('shortcuts')) : localShortcuts); 

    const changeShortcuts : (shortcuts: {id: number, name: string, defaultKey: string, currentKey: string, frenchLabel: string, englishLabel: string}[]) => void = (shortcuts)=> {
        setShortcuts(shortcuts);
    };

    return(
        <LanguageContext.Provider value ={{language,changeLanguage}}>
            <ShortcutsContext.Provider value={{shortcuts,changeShortcuts}}>
                <Router>
                    <Routes>
                        <Route path="/components" element={<Components />} />
                        <Route path="/layouts" element={<Layouts />} />
                        <Route path="/achievments" element={<Achievments />} />
                    </Routes>
                </Router>
            </ShortcutsContext.Provider>
        </LanguageContext.Provider>
    )
}