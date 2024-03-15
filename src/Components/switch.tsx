import { useContext, useState, useEffect } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function Switch({name,frenchLabel,englishLabel}): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [switchStatus,setSwitchStatus] = useState<boolean>(false);

    useEffect(()=> {
        const savedStatus = localStorage.getItem(name);

        if(savedStatus !== undefined && savedStatus !== null) {
            setSwitchStatus(JSON.parse(savedStatus));
        } else {
            setSwitchStatus(false);
        };
    },[]);

    useEffect(()=> {
        if(switchStatus) {
            document.body.classList.add('contrast');
        } else {
            document.body.classList.remove('contrast');
        };
        localStorage.setItem(name,switchStatus.toString());
    },[switchStatus,name]);
    
    return (
        <div className="switch-container" onClick={()=> setSwitchStatus(switchStatus => !switchStatus)}>
            <label>
                <span>{language === "french" ? frenchLabel : englishLabel} :</span>
                <div className="switch switch-button" aria-checked={switchStatus.toString()} role="switch">
                    <span className="switch_cursor"></span>
                    {switchStatus && <span className="switch_state switch_on" lang="en">ON</span>}
                    {!switchStatus && <span className="switch_state switch_off" lang="en">OFF</span>}
                </div>
            </label>
        </div>
    )
}





