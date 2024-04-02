import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CheckBox from "../Components/checkbox.tsx";
import BasicButton from "../Components/basic-button.tsx";

interface AchievmentsFilterLinePropsInterface {
    frenchLabel: string,
    englishLabel: string,
    array: any[]
}

export default function AchievmentsFilterLine({frenchLabel,englishLabel,array}: AchievmentsFilterLinePropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return (
        <div className="filters_line">
            <BasicButton frenchText="X" englishText="X" onWhiteBackground={true} />
            <span className="filters_line_label">
                {language === "french" ? frenchLabel : englishLabel} :
            </span>
            <ul className="filters_line_list" role="group">
                {array.map(element => {
                    return <CheckBox key={element.index} frenchText={element} englishText={element}  />
                })}
            </ul>
        </div>
    )
}