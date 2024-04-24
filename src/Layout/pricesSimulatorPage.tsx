import { useContext, useEffect, useState } from "react";
import BasicButton from "../Components/basic-button.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import PricesSimulatorRadioButtonsGroup from "./pricesSimulatorRadioButtonsGroup.tsx";
import SimulationInterface from "../Interfaces/simulationInterface.tsx";
import EstimationInterface from "../Interfaces/estimationInterface.tsx";

interface PricesSimulatorPagePropsInterface {
    simulation: SimulationInterface,
    setSimulation: (simulation: SimulationInterface)=> void,
    currentEstimation: EstimationInterface,
    setCurrentEstimation: (currentEstimation: EstimationInterface)=> void
}

export default function PricesSimulatorPage({simulation,setSimulation,currentEstimation,setCurrentEstimation}: PricesSimulatorPagePropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const [page,setPage] = useState(simulation.pages.find(page => page.pageNumber === simulation.currentPage));
    
    useEffect(()=> {
        setPage(simulation.pages.find(page => page.pageNumber === simulation.currentPage));
    },[simulation.pages,simulation.currentPage]);

    const previousFunction = ()=> {
        let previousPage = 1;
        switch(simulation.currentPage) {
            case 2:
                previousPage = 1;
                break;
            case 3:
                previousPage = 2;
                break;
            case 4:
                if(simulation.pages[0].current === 1) {
                    previousPage = 1;
                } else {
                    previousPage = 3;
                };
                break;
            case 5:
                previousPage = 4;
                break;
            case 6:
                previousPage = 5;
                break;
            case 7:
                if(simulation.pages[4].current === 0) {
                    previousPage = 5;
                } else {
                    previousPage = 6;
                };
                break;
            case 8:
                previousPage = 7;
                break;
            case 9:
                previousPage = 8;
                break;
            case 10:
                if(simulation.pages[7].current === 1) {
                    previousPage = 8;
                } else {
                    previousPage = 9;
                };
                break;
            case 11:
                previousPage = 10;
                break;
            case 12:
                if(simulation.pages[9].current === 1) {
                    previousPage = 10;
                } else {
                    previousPage = 11;
                };
                break;
            case 13:
                previousPage = 12;
                break;
            case 14:
                previousPage = 13;
                break;
            default:
                break;
        };
        setSimulation({...simulation,currentPage: previousPage});
    };

    const nextFunction = ()=> {
        setSimulation({...simulation,currentPage: simulation.nextPage});
    };

    return (
        <div className="prices-simulator_page">
            <h2 className="prices-simulator_page_title">
                {
                    language === "french" ? page?.frenchTitle : page?.englishTitle
                }
            </h2>
            <p>
            {
                    language === "french" ? page?.frenchQuestion : page?.englishQuestion
                }
            </p>
            <div className="prices-simulator_page_radio-buttons-container">
                <PricesSimulatorRadioButtonsGroup currentPage={page} 
                    simulation={simulation} setSimulation={setSimulation}
                    currentEstimation={currentEstimation} setCurrentEstimation={setCurrentEstimation} />
            </div>
            <div className="prices-simulator_page_buttons-container">
                {
                    simulation.currentPage !== 1 &&
                        <BasicButton frenchText="Précédent" englishText="Previous" 
                            onWhiteBackground={true} onClickFunction={previousFunction} />
                }
                {
                    <BasicButton frenchText={simulation.currentPage === simulation.totalPages ? "Terminé" : "Suivant"} englishText={simulation.currentPage === simulation.totalPages ? "Finished" : "Next"} onWhiteBackground={true}
                        onClickFunction={nextFunction} />
                }
            </div>
        </div>
    )
}