import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Components from './Components/index.tsx';
import LanguageContext from './Contexts/language-context.tsx';
import ShortcutsContext from './Contexts/shortcuts-context.tsx';
import CarouselContext from './Contexts/caroussel-context.tsx';
import Layouts from './Layout/index.tsx';
import Achievments from './Pages/achievments.tsx';
import AchievmentPrivacyPolicy from './Pages/achievmentPrivacyPolicy.tsx';
import {localShortcuts} from './Datas/shortcuts.tsx';
import AchievmentDetails from './Pages/achievmentDetails.tsx';
import CV from './Pages/cv.tsx';
import AchievmentInterface from './Interfaces/achievmentInterface.tsx';
import AchievmentsContext from './Contexts/achievments-context.tsx';
import ModalContext from './Contexts/modal-context.tsx';
import WhoAmI from './Pages/who-am-i.tsx';
import WhyAccessibility from './Pages/whyAccessibility.tsx';
import Contact from './Pages/contact.tsx';
import SiteMap from './Pages/siteMap.tsx';
import Accessibility from './Pages/accessibility.tsx';
import LegalMentions from './Pages/legalMentions.tsx';
import PrivacyPolicy from './Pages/privacyPolicy.tsx';
import Prices from './Pages/prices.tsx';
import LandingPage from './Pages/landingPage.tsx';
import EnvironnementContext from './Contexts/environnement-context.tsx';
import Home from './Pages/home.tsx';
import SearchResults from './Pages/searchResults.tsx';

export default function App(): React.JSX.Element {

    const [isModalDisplayed,setIsModalDisplayed] = useState<boolean>(false);
    const changeIsModalDisplayed : (isModalDisplayed: boolean)=> void = (isModalDisplayed)=> {
        setIsModalDisplayed(isModalDisplayed);
    };

    const [language,setLanguage] = useState(localStorage.getItem('language') !== undefined && localStorage.getItem('language') !== null && localStorage.getItem('language') === "english" ? "english" : "french"); 
    const changeLanguage : (language: string) => void = (language)=> {
        setLanguage(language);
    };

    const [environnement,setEnvironnement] = useState<string>("");
    const changeEnvironnement : (environnement: string)=> void = (environnement)=> {
        setEnvironnement(environnement);
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

    const [achievments,setAchievments] = useState<AchievmentInterface[]>([]);
    const changeAchievments : (achievments: AchievmentInterface[])=> void = (achievments)=> {
        setAchievments(achievments);
    };

    return(
        <ModalContext.Provider value ={{isModalDisplayed,changeIsModalDisplayed}}>
            <LanguageContext.Provider value ={{language,changeLanguage}}>
                <EnvironnementContext.Provider value={{environnement,changeEnvironnement}}>
                    <ShortcutsContext.Provider value={{shortcuts,changeShortcuts}}>
                        <AchievmentsContext.Provider value={{achievments,changeAchievments}}>
                            <CarouselContext.Provider value={{displayCarousel,picturesFullScreen,currentPictureFullScreen,changeDisplayCarousel,changePicturesFullScreen,changeCurrentPictureFullScreen}}>
                                <Router>
                                    <Routes>
                                        <Route path="/components" element={<Components />} />
                                        <Route path="/layouts" element={<Layouts />} />
                                        <Route path="/" element={<LandingPage />} />
                                        <Route path="/home" element={<Home />} />
                                        <Route path="/who-am-i" element={<WhoAmI />} />
                                        <Route path="/achievments" element={<Achievments />} />
                                        <Route path="/achievments/:achievment" element={<AchievmentDetails />} />
                                        <Route path="/achievments/:achievment/privacy-policy" element={<AchievmentPrivacyPolicy />} />
                                        <Route path="/cv" element={<CV />} />
                                        <Route path="/why-accessibility" element={<WhyAccessibility />} />
                                        {/* <Route path="/prices" element={<Prices />} /> */}
                                        <Route path="/contact" element={<Contact />} />
                                        <Route path="/legal-mentions" element={<LegalMentions />} />
                                        <Route path="/site-map" element={<SiteMap />} />
                                        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                                        <Route path="/accessibility" element={<Accessibility />} />
                                        <Route path="/search-results" element={<SearchResults />} />
                                        <Route path="*" element={<Home />} />
                                    </Routes>
                                </Router>
                            </CarouselContext.Provider>
                        </AchievmentsContext.Provider>
                    </ShortcutsContext.Provider>
                </EnvironnementContext.Provider>
            </LanguageContext.Provider>
        </ModalContext.Provider>
    )
}