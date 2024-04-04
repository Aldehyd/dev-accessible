import { useContext, useState, useCallback, useEffect } from "react";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import AchievmentsFilterLine from "./AchievmentsFilterLine.tsx";
import BasicButton from "../Components/basic-button.tsx";

interface AchievmentsFilterPropsInterface {
    typeFilter: string[],
    setTypeFilter: (filter: string[])=>void,
    yearFilter: string[],
    setYearFilter: (filter: string[])=>void,
    frontEndFilter: string[],
    setFrontEndFilter: (filter: string[])=>void,
    backEndFilter: string[],
    setBackEndFilter: (filter: string[])=>void,
    databaseFilter: string[],
    setDatabaseFilter: (filter: string[])=>void,
}

export default function AchievmentsFitler({typeFilter,setTypeFilter,yearFilter,setYearFilter,frontEndFilter,setFrontEndFilter,backEndFilter,setBackEndFilter,databaseFilter,setDatabaseFilter}: AchievmentsFilterPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const {achievments} = useContext(AchievmentsContext);   

    const [types,setTypes] = useState<string[]>([]);
    const [years,setYears] = useState<string[]>([]);
    const [frontEndTechnologies,setFrontEndTechnologies] = useState<string[]>([]);
    const [backEndTechnologies,setBackEndTechnologies] = useState<string[]>([]);
    const [dataBaseTechnologies,setDataBaseTechnologies] = useState<string[]>([]);

    const setOtherFilters:(type:string, array: string[],setArray: (array: string[])=>void)=> void = useCallback((type,array,setArray)=> {
        for(let achievment of achievments) {
            if(!array.includes(achievment[type])) {
                setArray([...array,achievment[type]]);
            };
        };
    },[achievments]);

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
        setOtherFilters('englishType',types,setTypes);
        setOtherFilters('year',years,setYears);
        setTechnologiesFilters('frontEnd',frontEndTechnologies,setFrontEndTechnologies);
        setTechnologiesFilters('backEnd',backEndTechnologies,setBackEndTechnologies);
        setTechnologiesFilters('dataBase',dataBaseTechnologies,setDataBaseTechnologies);
    },[achievments,setOtherFilters,types,years,setTechnologiesFilters,frontEndTechnologies,backEndTechnologies,dataBaseTechnologies])

    const cleanFilters = ()=> {
        setYearFilter([]);
        setTypeFilter([]);
        setFrontEndFilter([]);
        setBackEndFilter([]);
        setDatabaseFilter([]);
    };

    return (
        <div className="achievments-filter">
            <h2 className="cv_section_title">{language === "french" ? "Filtres" : "Filters"}</h2>
            {
                (typeFilter.length > 0 || yearFilter.length > 0 || frontEndFilter.length > 0 || backEndFilter.length > 0 || databaseFilter.length > 0) && 
                <BasicButton frenchText="Effacer tous les filtres X" englishText="Clean filters X" onWhiteBackground={true} onClickFunction={()=> cleanFilters()} />
            }
            <AchievmentsFilterLine frenchLabel="Types" englishLabel="Types" array={types} filterArray={typeFilter} setFilterArray={setTypeFilter} />
            <AchievmentsFilterLine frenchLabel="Années" englishLabel="Years" array={years} filterArray={yearFilter} setFilterArray={setYearFilter} />
            <AchievmentsFilterLine frenchLabel="Technologies Front-End" englishLabel="Front-End technologies" array={frontEndTechnologies} filterArray={frontEndFilter} setFilterArray={setFrontEndFilter} />
            <AchievmentsFilterLine frenchLabel="Technologies Back-End" englishLabel="Back-End technologies" array={backEndTechnologies} filterArray={backEndFilter} setFilterArray={setBackEndFilter} />
            <AchievmentsFilterLine frenchLabel="Bases de données" englishLabel="Databases" array={dataBaseTechnologies} filterArray={databaseFilter} setFilterArray={setDatabaseFilter} />
        </div>
        
    )
}