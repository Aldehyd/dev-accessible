import { useContext, useState, useCallback, useEffect } from "react";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import AchievmentsFilterLine from "./AchievmentsFilterLine.tsx";
import BasicButton from "../Components/basic-button.tsx";
import ExpandButton from "../Components/expand-button.tsx";
import Warning from "../Components/warning.tsx";

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
    results: number
}

export default function AchievmentsFitler({typeFilter,setTypeFilter,yearFilter,setYearFilter,frontEndFilter,setFrontEndFilter,backEndFilter,setBackEndFilter,databaseFilter,setDatabaseFilter,results}: AchievmentsFilterPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const {achievments} = useContext(AchievmentsContext);   

    const [filterExpanded,setFilterExpanded] = useState<boolean>(false);

    const [types,setTypes] = useState<{id: string, french: string, english: string}[]>([]);
    const [years,setYears] = useState<{id: string, french: string, english: string}[]>([]);
    const [frontEndTechnologies,setFrontEndTechnologies] = useState<{id: string, french: string, english: string}[]>([]);
    const [backEndTechnologies,setBackEndTechnologies] = useState<{id: string, french: string, english: string}[]>([]);
    const [dataBaseTechnologies,setDataBaseTechnologies] = useState<{id: string, french: string, english: string}[]>([]);

    const initializeTwoLanguagesFilters:(frenchType:string, englishType:string, array: {id: string, french: string, english: string}[],setArray: (array: {id: string, french: string, english: string}[])=>void)=> void = useCallback((frenchType,englishType,array,setArray)=> {
        for(let achievment of achievments) {
            if(!array.some(element => element.english === achievment[englishType])) {
                setArray([...array,{id: achievment[englishType].toLowerCase().replace(" ","_"), french: achievment[frenchType], english: achievment[englishType]}]);
            };
        };
    },[achievments]);

    const initializeOneLanguageFilters:(type:string, array: {id: string, french: string, english: string}[],setArray: (array: {id: string, french: string, english: string}[])=>void)=> void = useCallback((type,array,setArray)=> {
        for(let achievment of achievments) {
            if(!array.some(element => element.english === achievment[type])) {
                setArray([...array,{id: achievment[type].toLowerCase().replace(" ","_"), french: achievment[type], english: achievment[type]}]);
            };
        };
    },[achievments]);

    const initializeTechnologiesFilters:(type:string, array: {id: string, french: string, english: string}[],setArray: (array: {id: string, french: string, english: string}[])=>void)=> void = useCallback((type,array,setArray)=> {
        for(let achievment of achievments) {
            for(let element of achievment.technologies[type]) {
                if(!array.some(e => e.english === element)) {
                    setArray([...array,{id: element.toLowerCase().replace(" ","_"), french: element, english: element}]);
                };
            };
        };
    },[achievments]);

    const cleanFilters = ()=> {
        setYearFilter([]);
        setTypeFilter([]);
        setFrontEndFilter([]);
        setBackEndFilter([]);
        setDatabaseFilter([]);
    };

    useEffect(()=> {
        initializeTwoLanguagesFilters('frenchType','englishType',types,setTypes);
        initializeOneLanguageFilters('year',years,setYears);
        initializeTechnologiesFilters('frontEnd',frontEndTechnologies,setFrontEndTechnologies);
        initializeTechnologiesFilters('backEnd',backEndTechnologies,setBackEndTechnologies);
        initializeTechnologiesFilters('dataBase',dataBaseTechnologies,setDataBaseTechnologies);
    },[achievments,initializeTwoLanguagesFilters,initializeOneLanguageFilters,types,years,initializeTechnologiesFilters,frontEndTechnologies,backEndTechnologies,dataBaseTechnologies])

    return (
        <div className="achievments-filter" aria-expanded={filterExpanded ? "true" : "false"}>
            <div className="achievments-filter_head">
                {
                    (typeFilter.length > 1 || yearFilter.length > 1) && !filterExpanded &&
                    <Warning frenchText="Modifier les filtres !" englishText="Modify filters !" />
                }
                {typeFilter.length + yearFilter.length + frontEndFilter.length + backEndFilter.length + databaseFilter.length > 0 && !filterExpanded && <BasicButton frenchText={(typeFilter.length + yearFilter.length + frontEndFilter.length + backEndFilter.length + databaseFilter.length).toString()} englishText={(typeFilter.length + yearFilter.length + frontEndFilter.length + backEndFilter.length + databaseFilter.length).toString()} onWhiteBackground={true} removeButton={true} onClickFunction={()=> cleanFilters()} />}
                <h2 className="cv_section_title">{language === "french" ? "Filtres" : "Filters"}</h2>
                <ExpandButton expanded={filterExpanded} setExpanded={setFilterExpanded}/>
            </div>
            {
                filterExpanded &&
                    <div className="achievments-filter_content">
                        {
                            (typeFilter.length > 0 || yearFilter.length > 0 || frontEndFilter.length > 0 || backEndFilter.length > 0 || databaseFilter.length > 0) && 
                            <BasicButton frenchText="Effacer tous les filtres" englishText="Clean filters" onWhiteBackground={true} removeButton={true} onClickFunction={()=> cleanFilters()} />
                        }
                        <AchievmentsFilterLine frenchLabel="Types" englishLabel="Types" array={types} filterArray={typeFilter} setFilterArray={setTypeFilter} />
                        <AchievmentsFilterLine frenchLabel="Années" englishLabel="Years" array={years} filterArray={yearFilter} setFilterArray={setYearFilter} />
                        <AchievmentsFilterLine frenchLabel="Technologies Front-End" englishLabel="Front-End technologies" array={frontEndTechnologies} filterArray={frontEndFilter} setFilterArray={setFrontEndFilter} />
                        <AchievmentsFilterLine frenchLabel="Technologies Back-End" englishLabel="Back-End technologies" array={backEndTechnologies} filterArray={backEndFilter} setFilterArray={setBackEndFilter} />
                        <AchievmentsFilterLine frenchLabel="Bases de données" englishLabel="Databases" array={dataBaseTechnologies} filterArray={databaseFilter} setFilterArray={setDatabaseFilter} />
                        <div className="achievments-filter_results">
                            <span>
                                {language === "french" ? "Résultats" : "Results"} :
                            </span>
                            <span>
                                {results}
                            </span>
                        </div>
                    </div>
        }
        </div>
        
    )
}