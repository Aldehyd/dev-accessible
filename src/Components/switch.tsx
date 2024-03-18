import { useContext, useState, useEffect } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface SwitchPropsInterface {
    name: string,
    frenchLabel: string,
    englishLabel: string
}

export default function Switch({name,frenchLabel,englishLabel}: SwitchPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [switchStatus,setSwitchStatus] = useState<boolean>(false);

    const handleKeyDown : (e: KeyboardEvent) => void = (e)=> {
        switch(e.key) {
            case ' ':
                setSwitchStatus(switchStatus => !switchStatus);
                break;
            case 'Enter':
                setSwitchStatus(switchStatus => !switchStatus);
                break;
            default:
                break;
        }
    }

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
            <label id="contrast-switch-label">{language === "french" ? frenchLabel : englishLabel} :</label>
            <div className="switch switch-button" tabIndex="0" aria-checked={switchStatus.toString()} 
                role="switch" aria-labelledby="contrast-switch-label" onKeyDown={(e)=> handleKeyDown(e)}>
                <span className="switch_cursor"></span>
                {switchStatus && <span className="switch_state switch_on" lang="en">ON</span>}
                {!switchStatus && <span className="switch_state switch_off" lang="en">OFF</span>}
            </div>
        </div>
    )
}





