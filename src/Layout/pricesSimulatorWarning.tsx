import BasicButton from "../Components/basic-button.tsx";

interface PricesSimulatorWarningPropsInterface {
    simulation: any,
    setSimulation: (simulation: any)=> void
}

export default function PricesSimulatorWarning({simulation,setSimulation}: PricesSimulatorWarningPropsInterface): React.JSX.Element {

    const understand = ()=> {
        setSimulation({...simulation, understood: true});
    };

    return (
        <div className="prices-simulator_page--warning">
            <h2 className="title">Avertissement</h2>
            <p>Les montant calculés via ce simulateur ne constituent en aucun
            cas un devis ou une offre de contrat.</p>
            <p>Ils ne sont donnés qu'à titre purement informatif.</p> 
            <p>Pour toute demande de prestation, contactez-moi via le
            formulaire, afin que nous puissions échanger plus en détails sur vos besoins.</p> 
            <BasicButton frenchText="J'ai compris" englishText="I understand" 
                onWhiteBackground={true} onClickFunction={understand} /> 
        </div>
    )
}