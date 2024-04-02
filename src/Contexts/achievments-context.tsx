import {createContext} from 'react';
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";

interface AchievmentsContextInterface {
    achievments: AchievmentInterface[],
    changeAchievments: (achievments: AchievmentInterface[])=> void
}

const AchievmentsContext = createContext<AchievmentsContextInterface>({achievments: []});

export default AchievmentsContext;