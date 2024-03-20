import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Components from './Components/index.tsx';
import LanguageContext from './Contexts/language-context.tsx';

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
                </Routes>
            </Router>
        </LanguageContext.Provider>
    )
}