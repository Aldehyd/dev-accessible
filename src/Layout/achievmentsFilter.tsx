import { useContext, useState, useCallback, useEffect } from "react";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import { addTechnoToTechnologies } from "../Functions/addTechnoToTechnologies.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import AchievmentsFilterLine from "./AchievmentsFilterLine.tsx";

interface AchievmentsFilterPropsInterface {
    frontEndFilter: string[],
    setFrontEndFilter: (filter: string[])=>void,
    backEndFilter: string[],
    setBackEndFilter: (filter: string[])=>void,
    databaseFilter: string[],
    setDatabaseFilter: (filter: string[])=>void,
}

export default function AchievmentsFitler({frontEndFilter,setFrontEndFilter,backEndFilter,setBackEndFilter,databaseFilter,setDatabaseFilter}: AchievmentsFilterPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const {achievments} = useContext(AchievmentsContext);

    const [frontEndTechnologies,setFrontEndTechnologies] = useState<string[]>([]);
    const [backEndTechnologies,setBackEndTechnologies] = useState<string[]>([]);
    const [dataBaseTechnologies,setDataBaseTechnologies] = useState<string[]>([]);

    const setTechnologiesFilters:(type:string, array: string[],setArray: (array: string[])=>void)=> void = useCallback((type,array,setArray)=> {
        for(let achievment of achievments) {
            for(let element of achievment.technologies[type]) {
                if(!array.includes(element)) {
                    setArray([...array,element]);
                };
            };
        };
    },[achievments]);

    useEffect(()=> {
        setTechnologiesFilters('frontEnd',frontEndTechnologies,setFrontEndTechnologies);
        setTechnologiesFilters('backEnd',backEndTechnologies,setBackEndTechnologies);
        setTechnologiesFilters('dataBase',dataBaseTechnologies,setDataBaseTechnologies);
    },[achievments,setTechnologiesFilters,frontEndTechnologies,backEndTechnologies,dataBaseTechnologies])

    return (
        <div className="achievments-filter">
            <h2 className="cv_section_title">{language === "french" ? "Filtres" : "Filters"}</h2>
            <AchievmentsFilterLine frenchLabel="Technologies Front-End" englishLabel="Front-End technologies" array={frontEndTechnologies}  />
            <AchievmentsFilterLine frenchLabel="Technologies Back-End" englishLabel="Back-End technologies" array={backEndTechnologies} />
            <AchievmentsFilterLine frenchLabel="Bases de données" englishLabel="Databases" array={dataBaseTechnologies} />
        </div>
        
    )
}