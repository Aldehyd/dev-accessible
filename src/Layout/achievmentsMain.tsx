import AchievmentSection from "./achievmentSection.tsx";
import AchievmentsSeparator from "../Components/achievments-separator.tsx";
import AchievmentsFitler from "./achievmentsFilter.tsx";
import { useState, useEffect } from "react";
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";
import Error from "../Components/error.tsx";
import BackLink from "../Components/back-link.tsx";
interface AchievmentsMainPropsInterface {
    achievments : AchievmentInterface[]
}

export default function AchievmentsMain({achievments}: AchievmentsMainPropsInterface): React.JSX.Element {

    const [typeFilter,setTypeFilter] = useState<string[]>([]);
    const [yearFilter,setYearFilter] = useState<string[]>([]);
    const [frontEndFilter,setFrontEndFilter] = useState<string[]>([]);
    const [backEndFilter,setBackEndFilter] = useState<string[]>([]);
    const [databaseFilter,setDatabaseFilter] = useState<string[]>([]);

    const [achievmentsToShow,setAchievmentsToShow] = useState(achievments);

    const filter: (techno: string, filterArray: string[],filteredAchievments: AchievmentInterface[],type?:string)=> AchievmentInterface[] = (techno,filterArray,filteredAchievments,type="other")=> {
        
        if(type === "techno") {
            for(let filter of filterArray) {
                filteredAchievments = filteredAchievments.filter(achievment => achievment.technologies[techno].includes(filter));
            };
        } else {
            for(let filter of filterArray) {
                filteredAchievments = filteredAchievments.filter(achievment => achievment[techno].includes(filter));
            };
        };
        
        return filteredAchievments;
    };

    useEffect(()=> {
        let filteredAchievments = achievments; 

        filteredAchievments = filter('englishType',typeFilter,filteredAchievments);
        filteredAchievments = filter('year',yearFilter,filteredAchievments);
        filteredAchievments = filter('frontEnd',frontEndFilter,filteredAchievments,'techno');
        filteredAchievments = filter('backEnd',backEndFilter,filteredAchievments,'techno');
        filteredAchievments = filter('dataBase',databaseFilter,filteredAchievments,'techno');
 
        setAchievmentsToShow(filteredAchievments);
    },[typeFilter,yearFilter,frontEndFilter,backEndFilter,databaseFilter,achievments]);

    return (
        <>
             <AchievmentsFitler typeFilter={typeFilter} setTypeFilter={setTypeFilter} setYearFilter={setYearFilter} yearFilter={yearFilter} frontEndFilter={frontEndFilter} setFrontEndFilter={setFrontEndFilter} backEndFilter={backEndFilter} setBackEndFilter={setBackEndFilter} databaseFilter={databaseFilter} setDatabaseFilter={setDatabaseFilter} results={achievmentsToShow.length} />
            {
                achievmentsToShow.length > 0 &&
                    achievmentsToShow.map(achievment => {
                        return (
                            <>
                                <AchievmentSection achievment={achievment} />
                                {!(achievmentsToShow.indexOf(achievment) === achievmentsToShow.length -1) && <AchievmentsSeparator />}
                            </>
                        )
                    })
            }
            {
                achievmentsToShow.length === 0 && <Error frenchMessage="Aucun résultat." englishMessage="No result." />
    
            }
        </>
    )
}