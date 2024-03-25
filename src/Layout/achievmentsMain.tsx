import AchievmentSection from "./achievmentSection.tsx";
import AchievmentsSeparator from "../Components/achievments-separator.tsx";

export default function AchievmentsMain({achievments}): React.JSX.Element {
    return (
        <main>
            {achievments.map(achievment => {
                return (
                    <>
                        <AchievmentSection achievment={achievment}/>
                        {!(achievments.indexOf(achievment) === achievments.length -1) && <AchievmentsSeparator />}
                    </>
                
                )
            })}
        </main>
    )
}