import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import CheckBox from "../Components/checkbox.tsx";
import BasicButton from "../Components/basic-button.tsx";

interface AchievmentsFilterLinePropsInterface {
    frenchLabel: string,
    englishLabel: string,
    array: string[],
    filterArray: string[],
    setFilterArray: (array: string[])=>void
}

export default function AchievmentsFilterLine({frenchLabel,englishLabel,array,filterArray,setFilterArray}: AchievmentsFilterLinePropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const cleanFilters = ()=> {
        setFilterArray([]);
    };

    return (
        <div className="filters_line">
            {filterArray.length > 0 && <BasicButton frenchText={`${filterArray.length} X`} englishText={`${filterArray.length} X`} onWhiteBackground={true} onClickFunction={()=> cleanFilters()} />}
            <span className="filters_line_label">
                {language === "french" ? frenchLabel : englishLabel} :
            </span>
            <ul className="filters_line_list" role="group">
                {array.map(element => {
                    return <CheckBox key={element.index} frenchText={element} englishText={element} filterArray={filterArray} setFilterArray={setFilterArray} />
                })}
            </ul>
        </div>
    )
}