import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import SimulationInterface from "../Interfaces/simulationInterface.tsx";
import EstimationInterface from "../Interfaces/estimationInterface.tsx";

interface PricesSimulatorEvaluationPropsInterface {
    simulation: SimulationInterface,
    currentEstimation: EstimationInterface
}

export default function PricesSimulatorEstimation({simulation,currentEstimation}: PricesSimulatorEvaluationPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const estimationAccurencyClassList = `prices-simulator_evaluation_accurency ${currentEstimation.accurencyCategory.english === "High" ? "high" :""} ${currentEstimation.accurencyCategory.english === "Midle" ? "midle" :""} ${currentEstimation.accurencyCategory.english === "Low" ? "low" :""} ${currentEstimation.accurencyCategory.english === "Very low" ? "very-low" :""}`;

    return (
        <div className="prices-simulator_evaluation">
            <h2>
                {
                    language === "french" ? `Estimation ${simulation.currentPage !== 15 ? "provisoire" : "finale"} :` : `${simulation.currentPage !== 14 ? "Temporary" : "Final"} Estimation`
                }
            </h2>
            <p>
                {
                    language === "french" ? "Prix : " : "Price : "
                }
                <span>{`${currentEstimation.price.total} €`}</span>
            </p>
            <p>
                {
                    language === "french" ? "Durée : " : "Time : "
                }
                <span>{`${currentEstimation.time.total} ${language === "french" ? "jours" : "days"}`}</span>
            </p>
            <p>
                {
                    language === "french" ? "Précision de l'estimation : " : "Estimation accurency : "
                }
                <span className={estimationAccurencyClassList}>
                    {
                        language === "french"?
                            currentEstimation.accurencyCategory.french
                            :
                            currentEstimation.accurencyCategory.english
                    }
                </span>
            </p>
            {
                simulation.currentPage === 15 &&
                    <div className="prices-simulator_evaluation_details">
                        <h3>
                            {
                                language === "french" ? "Détails :" : "Details :"
                            }
                        </h3>
                        <p>{"Design : " + currentEstimation.price.design + " € - " + currentEstimation.time.design + (language === "french" ? " jours" : " days")}</p>
                        <p>{"Code : " + currentEstimation.price.code + " € - " + currentEstimation.time.code + (language === "french" ? " jours" : " days")}</p>
                        <p>{(language === "french" ? "Contenu : " : "Content : ") + currentEstimation.price.content + " € - " + currentEstimation.time.content + (language === "french" ? " jours" : " days")}</p>
                        <p>{(language === "french" ? "Déploiement : " : "Déployment : ") + currentEstimation.price.deployment + " € - " + currentEstimation.time.deployment + (language === "french" ? " jours" : " days")}</p>
                    </div>
            }
        </div>
    )
}