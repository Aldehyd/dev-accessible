import { useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface CheckboxPropsInterface {
    frenchText: string,
    englishText: string,
    filterArray: string[],
    setFilterArray: (array: string[])=>void
}

export default function CheckBox({frenchText,englishText,filterArray,setFilterArray}: CheckboxPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const [checked,setChecked] = useState<boolean>(false);

    useEffect(()=> {
        if(filterArray.includes(englishText)) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    },[filterArray,englishText]);

    const handleClick = ()=> {
        if(filterArray.includes(englishText)) {
            const index = filterArray.indexOf(englishText);
            filterArray.splice(index,1);
            setFilterArray([...filterArray])
        } else {
            setFilterArray([...filterArray,englishText]);
        };
    };

    return (
        <li className="checkbox-line" onClick={()=> handleClick()}>
            <span className="checkbox" role="checkbox" aria-checked={checked ? "true": "false"} tabIndex={0}>
                {language === "french" ? frenchText : englishText}
            </span>
            <span className="checkbox-background"></span>
            <span className="checkbox-background-text" aria-hidden="true">
                {language === "french" ? frenchText : englishText}
            </span>
        </li>
    )
}