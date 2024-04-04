
import AchievmentDetailsMain from "../Layout/achievmentDetailsMain.tsx";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import MainTitle from "../Components/main-title.tsx";
import AchievmentsContext from "../Contexts/achievments-context.tsx";
import TopMenu from "../Layout/topMenu.tsx";

export default function AchievmentDetails(): React.JSX.Element {

    const {achievments} = useContext(AchievmentsContext);

    const {achievment} = useParams();
    const currentAchievment = achievments.find(project => project.title === achievment || project.title === `${achievment}.com`);

    return (
        <>
            <header>
                <TopMenu />
            </header>
            <MainTitle frenchText={achievment} englishText={achievment} />
            
            <AchievmentDetailsMain achievment={currentAchievment} />
        </>
        
    )
}