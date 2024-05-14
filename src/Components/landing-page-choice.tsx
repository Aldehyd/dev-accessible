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
            setChoice("client");
            if(document.body.classList.contains("animations") && window.matchMedia('(min-width: 650px)').matches) {
                setTimeout(()=> changeEnvironnement("client"),4000);
            } else {
                changeEnvironnement("client");
            };
        } else {
            setChoice("recruiter");
            if(document.body.classList.contains("animations") && window.matchMedia('(min-width: 650px)').matches) {
                setTimeout(()=> changeEnvironnement("recruiter"),4000);
            } else {
                changeEnvironnement("recruiter");
            };
        };
        if(document.body.classList.contains("animations") && window.matchMedia('(min-width: 650px)').matches) {
            setTimeout(()=> {navigate("/home")},5000);
        } else {
            navigate("/home");
        };
    };

    return (
        <button type="button" className="landing-page_choice" onClick={()=> onClickFunction()}>
            {language === "french" ? frenchText : englishText}
        </button>
    )
}