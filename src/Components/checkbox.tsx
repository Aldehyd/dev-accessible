import { useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface CheckboxPropsInterface {
    frenchText: string,
    englishText: string,
    onCheckedFunction?: ()=>void,
    onUnCheckedFunction?: ()=>void
}

export default function CheckBox({frenchText,englishText,onCheckedFunction,onUnCheckedFunction}: CheckboxPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [checked,setChecked] = useState<boolean>(false);

    // useEffect(()=> {
    //     checked ? onCheckedFunction() : onUnCheckedFunction();
    // },[checked,onCheckedFunction,onUnCheckedFunction]);

    return (
        <li className="checkbox-line" onClick={()=> setChecked(checked => !checked)}>
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