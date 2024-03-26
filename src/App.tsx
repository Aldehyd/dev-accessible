import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Components from './Components/index.tsx';
import LanguageContext from './Contexts/language-context.tsx';
import ShortcutsContext from './Contexts/shortcuts-context.tsx';
import CarouselContext from './Contexts/caroussel-context.tsx';
import Layouts from './Layout/index.tsx';
import Achievments from './Pages/achievments.tsx';
import {localShortcuts} from './Datas/shortcuts.tsx';
import AchievmentDetails from './Pages/achievmentDetails.tsx';

export default function App(): React.JSX.Element {

    const [language,setLanguage] = useState(localStorage.getItem('language') !== undefined && localStorage.getItem('language') !== null && localStorage.getItem('language') === "english" ? "english" : "french"); 

    const changeLanguage : (language: string) => void = (language)=> {
        setLanguage(language);
    };

    const [shortcuts,setShortcuts] = useState<{id: number, name: string, defaultKey: string, currentKey: string, frenchLabel: string, englishLabel: string}[]>(localStorage.getItem('shortcuts') !== undefined && localStorage.getItem('shortcuts') !== null ? JSON.parse(localStorage.getItem('shortcuts')) : localShortcuts); 

    const changeShortcuts : (shortcuts: {id: number, name: string, defaultKey: string, currentKey: string, frenchLabel: string, englishLabel: string}[]) => void = (shortcuts)=> {
        setShortcuts(shortcuts);
    };

    const [pictures,setPictures] = useState<{id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[]>([]);

    const changePictures : (pictures: {id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[]) => void = (pictures)=> {
        setPictures(pictures);
    };

    const [currentPicture,setCurrentPicture] = useState<number>(0);

    const changeCurrentPicture : (currentPicture: number)=> void = (currentPicture)=> {
        setCurrentPicture(currentPicture);
    };

    return(
        <LanguageContext.Provider value ={{language,changeLanguage}}>
            <ShortcutsContext.Provider value={{shortcuts,changeShortcuts}}>
                <Router>
                    <Routes>
                        <Route path="/components" element={<Components />} />
                        <Route path="/layouts" element={<Layouts />} />
                        <CarouselContext.Provider value={{pictures,currentPicture,changePictures,changeCurrentPicture}}>
                            <Route path="/achievments" element={<Achievments />} />
                            <Route path="/achievments/:achievment" element={<AchievmentDetails />} />
                        </CarouselContext.Provider>
                    </Routes>
                </Router>
            </ShortcutsContext.Provider>
        </LanguageContext.Provider>
    )
}