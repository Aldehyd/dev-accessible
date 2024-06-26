import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface ExpandButtonPropsInterface {
    expanded: boolean,
    setExpanded: (expanded: boolean)=> void,
}

export default function ExpandButton({expanded,setExpanded}: ExpandButtonPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);


    let basicButtonClassNames = `basic-button-container--on-white-background ${expanded ? "hide" : "show"}`;

    const onClickFunction = ()=> {
        setExpanded(expanded => !expanded);
    };

    return(
        <div className={basicButtonClassNames}>
            <button className="basic-button" onClick={onClickFunction}>
                <svg className="expand-arrow-svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        viewBox="0 0 96.3 104.1">
                    <line className="st0" x1="-73.2" y1="-187.9" x2="-16.8" y2="-131.4"/>
                    <line className="st0" x1="-16.8" y1="-187.9" x2="-73.2" y2="-131.4"/>
                    <line className="st0" x1="197.4" y1="-76.4" x2="160.4" y2="-39.3"/>
                    <line className="st0" x1="198.1" y1="-75.7" x2="235.2" y2="-38.6"/>
                    <path d="M83,42.8L29.6,12C20.4,6.7,8.9,13.3,8.9,24v61.6c0,10.7,11.5,17.3,20.8,12L83,66.8C92.2,61.5,92.2,48.1,83,42.8z"/>
                </svg>
            </button>
            <div className="basic-button-shadow"></div>
        </div>
    )
}