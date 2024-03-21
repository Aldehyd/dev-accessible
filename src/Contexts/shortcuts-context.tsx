import {createContext} from 'react';
import { localShortcuts } from '../Datas/shortcuts.tsx';

interface ShortcutsContextInterface {
    shortcuts: {id: number, name: string, defaultKey: string, currentKey: string, frenchLabel: string, englishLabel: string}[],
    changeShortcuts: (shortcuts: {id: number, name: string, defaultKey: string, currentKey: string, frenchLabel: string, englishLabel: string}[])=> void
}

const ShortcutsContext = createContext<ShortcutsContextInterface>(localShortcuts);

export default ShortcutsContext;