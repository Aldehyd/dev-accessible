import {createContext} from 'react';

interface EnvironnementContextInterface {
    environnement: string,
    changeEnvironnement: (environnement: string)=> void
}

const EnvironnementContext = createContext<EnvironnementContextInterface>({environnement: ""});

export default EnvironnementContext;