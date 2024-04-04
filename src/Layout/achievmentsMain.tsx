import AchievmentSection from "./achievmentSection.tsx";
import AchievmentsSeparator from "../Components/achievments-separator.tsx";
import AchievmentsFitler from "./achievmentsFilter.tsx";
import { useState, useEffect } from "react";
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";

interface AchievmentsMainPropsInterface {
    achievments : AchievmentInterface[]
}

export default function AchievmentsMain({achievments}: AchievmentsMainPropsInterface): React.JSX.Element {

    const [frontEndFilter,setFrontEndFilter] = useState<string[]>([]);
    const [backEndFilter,setBackEndFilter] = useState<string[]>([]);
    const [databaseFilter,setDatabaseFilter] = useState<string[]>([]);

    const [achievmentsToShow,setAchievmentsToShow] = useState(achievments);

    const filter = (techno,filterArray,filteredAchievments)=> {
        console.log(techno,filterArray,filteredAchievments)
        for(let filter of filterArray) {
            filteredAchievments = filteredAchievments.filter(achievment => achievment.technologies[techno].includes(filter));
        };
        return filteredAchievments;
    };

    useEffect(()=> {
        let filteredAchievments = achievments; 
        filteredAchievments = filter('frontEnd',frontEndFilter,filteredAchievments);
        filteredAchievments = filter('backEnd',backEndFilter,filteredAchievments);
        filteredAchievments = filter('dataBase',databaseFilter,filteredAchievments);
 
        setAchievmentsToShow(filteredAchievments);
    },[frontEndFilter,backEndFilter,databaseFilter,achievments]);

    return (
        <main>
             <AchievmentsFitler frontEndFilter={frontEndFilter} setFrontEndFilter={setFrontEndFilter} backEndFilter={backEndFilter} setBackEndFilter={setBackEndFilter} databaseFilter={databaseFilter} setDatabaseFilter={setDatabaseFilter} />
            {achievmentsToShow.map(achievment => {
                return (
                    <>
                        <AchievmentSection achievment={achievment} />
                        {!(achievments.indexOf(achievment) === achievments.length -1) && <AchievmentsSeparator />}
                    </>
                )
            })}
        </main>
    )
}