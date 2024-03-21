import {createContext} from 'react';

interface ShortcutsContextInterface {
    shortcuts: {exitAccessibilityMode: string},
    changeShortcuts: (shortcuts: {exitAccessibilityMode: string})=> void
}

const ShortcutsContext = createContext<ShortcutsContextInterface>({shortcuts: {exitAccessibilityMode: 'Escape'}});

export default ShortcutsContext;