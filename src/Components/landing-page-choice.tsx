import { useContext } from "react";
import LanguageContext from '../Contexts/language-context.tsx';
import EnvironnementContext from "../Contexts/environnement-context.tsx";

interface LandingPageChoicePropsInterface {
    frenchText: string,
    englishText: string,
    setChoice: (choice: string)=> string
}

export default function LandingPageChoice({frenchText,englishText,setChoice}: LandingPageChoicePropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const {changeEnvironnement} = useContext(EnvironnementContext);

    const onClickFunction = ()=> {
        if(englishText.includes("client")) {
            localStorage.setItem("environnement","client");
            setChoice("client");
            setTimeout(()=>changeEnvironnement("client"),4000);
        } else {
            localStorage.setItem("environnement","recruiter");
            setChoice("recruiter");
            setTimeout(()=>changeEnvironnement("recruiter"),4000);
        };
        setTimeout(()=> {window.location = window.location + "home"},5000);
    };

    return (
        <button type="button" className="landing-page_choice" onClick={()=> onClickFunction()}>
            {language === "french" ? frenchText : englishText}
        </button>
    )
}