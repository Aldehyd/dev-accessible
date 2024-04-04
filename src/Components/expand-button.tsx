import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface ExpandButtonPropsInterface {
    expanded: boolean,
    setExpanded: (expanded: boolean)=> void,
}

export default function ExpandButton({expanded,setExpanded}: ExpandButtonPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);


    let basicButtonClassNames = `basic-button-container ${expanded ? "hide" : "show"}`;

    const onClickFunction = ()=> {
        setExpanded(expanded => !expanded);
    };

    return(
        <div className={basicButtonClassNames}>
            <button className="basic-button" onClick={onClickFunction}>
                <span className="basic-button_text">
                    {expanded ? "hide" : "show"}
                </span>
            </button>
            <div className="basic-button-shadow"></div>
        </div>
    )
}