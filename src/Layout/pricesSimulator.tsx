import { useState } from "react";
import BasicButton from "../Components/basic-button.tsx";
import PricesSimulatorPage from "./pricesSimulatorPage.tsx";
import PricesSimulatorEstimation from "./pricesSimulatorEstimation.tsx";
import PricesSimulatorProgressBar from "../Components/pricesSimulatorProgressBar.tsx";
import PricesSimulatorWarning from "./pricesSimulatorWarning.tsx";
import { initialEstimation } from "../Datas/initialEstimation.tsx";
import { initialSimulation } from "../Datas/initialSimulation.tsx";

export default function PricesSimulator(): React.JSX.Element {

    const [simulation,setSimulation] = useState(initialSimulation);
    const [currentEstimation,setCurrentEstimation] = useState(initialEstimation);

    const startSimulation = ()=> {
        setSimulation({...simulation, startSimulation: true});
    };

    const startSimulationAgain = ()=> {
        setSimulation({...initialSimulation, startSimulation: true});
    };

    return (
        <div className="prices-simulator">
            {
                !simulation.startSimulation && 
                    <BasicButton frenchText="Démarrer la simulation" englishText="Start simulation" 
                        onWhiteBackground={true} onClickFunction={startSimulation} />
            
            }
            {
                simulation.startSimulation && !simulation.understood &&
                    <PricesSimulatorWarning simulation={simulation} setSimulation={setSimulation} />
            }
            {
                simulation.understood && 
                    <PricesSimulatorProgressBar simulation={simulation} />
            }
            {
                simulation.understood && simulation.currentPage <= simulation.totalPages &&
                    <PricesSimulatorPage 
                        simulation={simulation} setSimulation={setSimulation}
                        currentEstimation={currentEstimation} setCurrentEstimation={setCurrentEstimation} />
            }
            {
                simulation.understood &&
                    <PricesSimulatorEstimation simulation={simulation} currentEstimation={currentEstimation} />
            }
            {
                simulation.currentPage === 15 &&
                <BasicButton frenchText="Relancer une simulation" englishText="Start a new simulation" 
                    onWhiteBackground={true} onClickFunction={startSimulationAgain} />
            }
        </div>
    )
}