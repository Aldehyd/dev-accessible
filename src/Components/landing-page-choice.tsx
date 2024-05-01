import { useContext } from "react";
import LanguageContext from '../Contexts/language-context.tsx';
import EnvironnementContext from "../Contexts/environnement-context.tsx";
import { useNavigate } from "react-router-dom";

interface LandingPageChoicePropsInterface {
    frenchText: string,
    englishText: string,
    setChoice: (choice: string)=> string
}

export default function LandingPageChoice({frenchText,englishText,setChoice}: LandingPageChoicePropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const navigate = useNavigate();

    const {changeEnvironnement} = useContext(EnvironnementContext);

    const onClickFunction = ()=> {
        if(englishText.includes("client")) {
            // localStorage.setItem("environnement","client");
            setChoice("client");
            if(document.body.classList.contains("animations")) {
                setTimeout(()=> changeEnvironnement("client"),4000);
            } else {
                changeEnvironnement("client");
            };
        } else {
            // localStorage.setItem("environnement","recruiter");
            setChoice("recruiter");
            if(document.body.classList.contains("animations")) {
                setTimeout(()=> changeEnvironnement("recruiter"),4000);
            } else {
                changeEnvironnement("recruiter");
            };
        };
        if(document.body.classList.contains("animations")) {
            // setTimeout(()=> {window.location = window.location + "home"},5000);
            setTimeout(()=> {navigate("/home")},5000);
        } else {
            // window.location = window.location + "home";
            navigate("/home");
        };
    };

    return (
        <button type="button" className="landing-page_choice" onClick={()=> onClickFunction()}>
            {language === "french" ? frenchText : englishText}
        </button>
    )
}