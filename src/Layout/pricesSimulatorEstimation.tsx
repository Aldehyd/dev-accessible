import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

interface PricesSimulatorEvaluationPropsInterface {
    simulation: any,
    currentEstimation: any
}

export default function PricesSimulatorEstimation({simulation,currentEstimation}: PricesSimulatorEvaluationPropsInterface): React.JSX.Element {
    console.log(simulation)
    const {language} = useContext(LanguageContext);

    return (
        <div className="prices-simulator_evaluation">
            <h2>
                {
                    language === "french" ? `Estimation ${simulation.currentPage !== 14 ? "provisoire" : "finale"} :` : `${simulation.currentPage !== 14 ? "Temporary" : "Final"} Estimation`
                }
            </h2>
            <p>
                {
                    language === "french" ? "Prix : " : "Price : "
                }
                <span>{`${currentEstimation.price} €`}</span>
            </p>
            <p>
                {
                    language === "french" ? "Durée : " : "Time : "
                }
                <span>{`${currentEstimation.time} ${language === "french" ? "jours" : "days"}`}</span>
            </p>
            <p>
                {
                    language === "french" ? "Précision de l'estimation : " : "Estimation accurency : "
                }
                <span>
                    {
                        language === "french"?
                            currentEstimation.accurencyCategory.french
                            :
                            currentEstimation.accurencyCategory.english
                    }
                </span>
            </p>
        </div>
    )
}