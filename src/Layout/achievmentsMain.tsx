import AchievmentSection from "./achievmentSection.tsx";
import AchievmentsSeparator from "../Components/achievments-separator.tsx";
import AchievmentsFitler from "./achievmentsFilter.tsx";
import { useState, useEffect } from "react";


export default function AchievmentsMain({achievments}): React.JSX.Element {

    const [frontEndFilter,setFrontEndFilter] = useState<string[]>([]);
    const [backEndFilter,setBackEndFilter] = useState<string[]>([]);
    const [databaseFilter,setDatabaseFilter] = useState<string[]>([]);

    const [achievmentsToShow,setAchievmentsToShow] = useState(achievments);

    useEffect(()=> {
        let temporaryAchievments = achievments;
        temporaryAchievments.sort(achievment => {return (
            achievment.technologies.frontEnd.includes(frontEndFilter)
        )})
    },[frontEndFilter,backEndFilter,databaseFilter]);

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