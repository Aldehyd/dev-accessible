import { useContext, useEffect, useState } from "react";
import BasicButton from "../Components/basic-button.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import PricesSimulatorRadioButtonsGroup from "./pricesSimulatorRadioButtonsGroup.tsx";

interface PricesSimulatorPagePropsInterface {
    simulation: any,
    setSimulation: (simulation: any)=> void
}

export default function PricesSimulatorPage({simulation,setSimulation}: PricesSimulatorPagePropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const [page,setPage] = useState(simulation.pages.find(page => page.pageNumber === simulation.currentPage));

    useEffect(()=> {
        setPage(simulation.pages.find(page => page.pageNumber === simulation.currentPage));
    },[simulation.pages,simulation.currentPage]);

    const previousFunction = ()=> {
        //calculer previous page regarding to simulation 
        setSimulation({...simulation,currentPage: simulation.previousPage});
    };

    const nextFunction = ()=> {
        setSimulation({...simulation,currentPage: simulation.nextPage});
    };

    return (
        <div className="prices-simulator_page">
            <h2 className="prices-simulator_page_title">
                {
                    language === "french" ? page.frenchTitle : page.englishTitle
                }
            </h2>
            <p>
            {
                    language === "french" ? page.frenchQuestion : page.englishQuestion
                }
            </p>
            <div className="prices-simulator_page_radio-buttons-container">
                <PricesSimulatorRadioButtonsGroup currentPage={page}
                    simulation={simulation} setSimulation={setSimulation} />
            </div>
            <div className="prices-simulator_page_buttons-container">
                {
                    simulation.currentPage !== 1 &&
                        <BasicButton frenchText="Précédent" englishText="Previous" 
                            onWhiteBackground={true} onClickFunction={previousFunction} />
                }
                {
                    simulation.currentPage !== simulation.numberOfPages &&
                        <BasicButton frenchText="Suivant" englishText="Next" onWhiteBackground={true}
                            onClickFunction={nextFunction} />
                }
            </div>
        </div>
    )
}