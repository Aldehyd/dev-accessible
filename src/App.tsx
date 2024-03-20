import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Components from './Components/index.tsx';
import LanguageContext from './Contexts/language-context.tsx';
import Layouts from './Layout/index.tsx';

export default function App(): React.JSX.Element {

    const [language,setLanguage] = useState(localStorage.getItem('language') !== undefined && localStorage.getItem('language') !== null && localStorage.getItem('language') === "english" ? "english" : "french"); 

    const changeLanguage : (language: string) => void = (language)=> {
        setLanguage(language);
      };

    return(
        <LanguageContext.Provider value ={{language,changeLanguage}}>
            <Router>
                <Routes>
                    <Route path="/components" element={<Components />} />
                    <Route path="/layouts" element={<Layouts />} />
                </Routes>
            </Router>
        </LanguageContext.Provider>
    )
}