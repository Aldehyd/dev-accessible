import AchievmentsMain from "../Layout/achievmentsMain.tsx";
import { useState, useEffect, useContext } from "react";
import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";
import { fetchData } from "../Functions/fetchData.tsx";
import Error from "../Components/error.tsx";
import Loader from "../Components/loader.tsx";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import MainTitle from "../Components/main-title.tsx";

export default function Achievments(): React.JSX.Element {

    const [achievments,setAchievments] = useState<AchievmentInterface[]>([]);
    
    const [isLoading,setIsLoading] = useState<boolean>(true);
    const [error,setError] = useState<boolean>(false);

    const {changeAchievments} = useContext(AchievmentsContext);

    useEffect(()=> {
        fetchData('http://localhost:4000/cv-achievments',setAchievments,setIsLoading,setError);
    },[]);

    useEffect(()=> {
        !isLoading && !error && changeAchievments(achievments)
    },[isLoading,error,changeAchievments,achievments]);

    return (
        <>
            <header>
                <TopMenu />
            </header>
            <main>
                <MainTitle frenchText="Réalisations" englishText="Achievments"/>
                {isLoading && !error && <Loader />}
                {error && <Error frenchMessage="Une erreur est survenue. Veuillez rafraichir la page svp." englishMessage="An error has occured. Please refresh the current page." />}
                {!isLoading && !error && <AchievmentsMain achievments={achievments} />}
            </main>
        </>
        
    )
}