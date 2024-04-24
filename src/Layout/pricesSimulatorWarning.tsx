import { useContext } from "react";
import BasicButton from "../Components/basic-button.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import SimulationInterface from "../Interfaces/simulationInterface.tsx";

interface PricesSimulatorWarningPropsInterface {
    simulation: SimulationInterface,
    setSimulation: (simulation: SimulationInterface)=> void
}

export default function PricesSimulatorWarning({simulation,setSimulation}: PricesSimulatorWarningPropsInterface): React.JSX.Element {

    const{language} = useContext(LanguageContext);

    const understand = ()=> {
        setSimulation({...simulation, understood: true});
    };

    return (
        <div className="prices-simulator_page--warning">
            <h2 className="title">
                {
                    language === "french" ? "Avertissement" : "Warning"
                }
            </h2>
            <p>
                {
                    language === "french" ?
                        "Les montant calculés via ce simulateur ne constituent en aucun cas un devis ou une offre de contrat."
                        :
                        "The estimation computed by the simulator are not a contract proposition."
                }        
            </p>
            <p>
                {
                    language === "french" ? 
                        "Ils ne sont donnés qu'à titre purement informatif."
                        :
                        "They are juste for information."
                }
            </p> 
            <p>
                {
                    language === "french" ?
                        "Pour toute demande de prestation, contactez-moi via le formulaire, afin que nous puissions échanger plus en détails sur vos besoins."
                        :
                        "For any order, please contact me with the form so we can talk about your detailled needs."
                }
            </p> 
            <BasicButton frenchText="J'ai compris" englishText="I understand" 
                onWhiteBackground={true} onClickFunction={understand} /> 
        </div>
    )
}