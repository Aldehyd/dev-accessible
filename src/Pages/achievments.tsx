import { achievments } from "../Datas/achievments.tsx";
import AchievmentsMain from "../Layout/achievmentsMain.tsx";

export default function Achievments(): React.JSX.Element {
    return (
        <AchievmentsMain achievments={achievments} />
    )
}