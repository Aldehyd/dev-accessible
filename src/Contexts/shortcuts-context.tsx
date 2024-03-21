import {createContext} from 'react';

interface ShortcutsContextInterface {
    shortcuts: {exitAccessibilityMode: string},
    changeShortcuts: (shortcuts: {exitAccessibilityMode: string})=> void
}

const LanguageContext = createContext<ShortcutsContextInterface>({shortcuts: {exitAccessibilityMode: 'Escape'}});

export default LanguageContext;