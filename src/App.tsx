import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Components from './Components/index.tsx';
import LanguageContext from './Contexts/language-context.tsx';
import ShortcutsContext from './Contexts/shortcuts-context.tsx';
import CarouselContext from './Contexts/caroussel-context.tsx';
import Layouts from './Layout/index.tsx';
import Achievments from './Pages/achievments.tsx';
import UnderConstruction from './Pages/underConstruction.tsx';
import {localShortcuts} from './Datas/shortcuts.tsx';
import AchievmentDetails from './Pages/achievmentDetails.tsx';
import CV from './Pages/cv.tsx';

export default function App(): React.JSX.Element {

    const [language,setLanguage] = useState(localStorage.getItem('language') !== undefined && localStorage.getItem('language') !== null && localStorage.getItem('language') === "english" ? "english" : "french"); 

    const changeLanguage : (language: string) => void = (language)=> {
        setLanguage(language);
    };

    const [shortcuts,setShortcuts] = useState<{id: number, name: string, defaultKey: string, currentKey: string, frenchLabel: string, englishLabel: string}[]>(localStorage.getItem('shortcuts') !== undefined && localStorage.getItem('shortcuts') !== null ? JSON.parse(localStorage.getItem('shortcuts')) : localShortcuts); 

    const changeShortcuts : (shortcuts: {id: number, name: string, defaultKey: string, currentKey: string, frenchLabel: string, englishLabel: string}[]) => void = (shortcuts)=> {
        setShortcuts(shortcuts);
    };

    const [displayCarousel,setDisplayCarousel] = useState<boolean>(false);  

    const changeDisplayCarousel : (displayCarousel: boolean)=>void = (displayCarousel)=> {
        setDisplayCarousel(displayCarousel);
    };

    const [picturesFullScreen,setPicturesFullScreen] = useState<{id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[]>([]);

    const changePicturesFullScreen : (pictures: {id: number, pictureName: any, frenchAlt?: string, englishAlt?: string}[]) => void = (pictures)=> {
        setPicturesFullScreen(pictures);
    };

    const [currentPictureFullScreen,setCurrentPictureFullScreen] = useState<number>(0);

    const changeCurrentPictureFullScreen : (currentPicture: number)=> void = (currentPicture)=> {
        setCurrentPictureFullScreen(currentPictureFullScreen);
    };

    return(
        <LanguageContext.Provider value ={{language,changeLanguage}}>
            <ShortcutsContext.Provider value={{shortcuts,changeShortcuts}}>
                <CarouselContext.Provider value={{displayCarousel,picturesFullScreen,currentPictureFullScreen,changeDisplayCarousel,changePicturesFullScreen,changeCurrentPictureFullScreen}}>
                    <Router>
                        <Routes>
                            <Route path="/components" element={<Components />} />
                            <Route path="/layouts" element={<Layouts />} />
                            <Route path="*" element={<UnderConstruction />} />
                            <Route path="/achievments" element={<Achievments />} />
                            <Route path="/achievments/:achievment" element={<AchievmentDetails />} />
                            <Route path="/cv" element={<CV />} />
                        </Routes>
                    </Router>
                </CarouselContext.Provider>
            </ShortcutsContext.Provider>
        </LanguageContext.Provider>
    )
}