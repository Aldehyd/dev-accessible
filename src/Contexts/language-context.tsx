import {createContext} from 'react';

interface LanguageContextInterface {
    language: string,
    changeLanguage: (color: string)=> void
}

const LanguageContext = createContext<LanguageContextInterface>({language: 'french'});

export default LanguageContext;