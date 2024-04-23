
interface PricesSimulatorEvaluationPropsInterface {
    simulation: any
}

export default function PricesSimulatorEvaluation({simulation}: PricesSimulatorEvaluationPropsInterface): React.JSX.Element {
    return (
        <div className="prices-simulator_evaluation">
            <p>Prix : <span>{`${simulation.currentEvaluation.price} €`}</span></p>
            <p>Durée : <span>{`${simulation.currentEvaluation.time} jours`}</span></p>
            <p>Précision de l'estimation : <span>{simulation.currentEvaluation.accurencyCategory.french}</span></p>
        </div>
    )
}