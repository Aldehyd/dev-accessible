import { useCallback, useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import PricesSimulatorRadioButton from "../Components/prices-simulator-radio-button.tsx";

interface PricesSimulatorRadioButtonGroupProps {
    simulation: any,
    setSimulation: (simulation: any)=> void,
    currentPage: any,
}

export default function PricesSimulatorRadioButtonsGroup({simulation,setSimulation,currentPage} : PricesSimulatorRadioButtonGroupProps): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [checkedButton,setCheckedButton] = useState(currentPage.current);

    const [buttonFocused,setButtonFocused] = useState(currentPage.options.find(option=> option.englishLabel === currentPage.current));

    // const handleKeyDown: (e:KeyboardEvent)=>void = (e)=> {
    //     let index = options?.indexOf(checkedButton);
    //     switch(e.key) {
    //         case "ArrowDown": 
    //             if(index === options?.length-1) {
    //                 index = 0;
    //             } else {
    //                 index++;
    //             };
    //             setCheckedButton(options[index]);
    //             break;
    //         case "ArrowRight": 
    //             if(index === options.length-1) {
    //                 index = 0;
    //             } else {
    //                 index++;
    //             };
    //             setCheckedButton(options[index]);
    //             break;
    //         case "ArrowUp": 
    //             if(index === 0) {
    //                 index = options.length-1;
    //             } else {
    //                 index--;
    //             };
    //             setCheckedButton(options[index]);
    //             break;
    //         case "ArrowLeft": 
    //             if(index === 0) {
    //                 index = options.length-1;
    //             } else {
    //                 index--;
    //             };
    //             setCheckedButton(options[index]);
    //             break;
    //         default:
    //             break;
    //     };
    //     setButtonFocused(options[index]);
    // };

    

    // const updateSimulation = ()=> {
    //     const currentOption = currentPage.options.find(option => option.id === checkedButton);
    //         break;
    //     }
        
    // };

    const updateChoices = useCallback((simulation)=> {
        const designNeed = simulation.pages[0].options.find(option => option.englishLabel === simulation.pages[0].current);
        const designIdea= simulation.pages[1].options.find(option => option.englishLabel === simulation.pages[1].current);
        const designIdeaComplexity = simulation.pages[2].options.find(option => option.englishLabel === simulation.pages[2].current);
        const animations = simulation.pages[3].options.find(option => option.englishLabel === simulation.pages[3].current);
        const size = simulation.pages[4].options.find(option => option.englishLabel === simulation.pages[4].current);
        const blog = simulation.pages[5].options.find(option => option.englishLabel === simulation.pages[5].current);
        const autonomy = simulation.pages[6].options.find(option => option.englishLabel === simulation.pages[6].current);
        const specificFunctionnalities = simulation.pages[7].options.find(option => option.englishLabel === simulation.pages[7].current);
        const specificFunctionnalitiesComplexity = simulation.pages[8].options.find(option => option.englishLabel === simulation.pages[8].current);
        const accessibility = simulation.pages[9].options.find(option => option.englishLabel === simulation.pages[9].current);
        const accessibilityEvaluation = simulation.pages[10].options.find(option => option.englishLabel === simulation.pages[10].current);
        const content = simulation.pages[11].options.find(option => option.englishLabel === simulation.pages[11].current);
        const translation = simulation.pages[12].options.find(option => option.englishLabel === simulation.pages[12].current);
        const deployment = simulation.pages[13].options.find(option => option.englishLabel === simulation.pages[13].current);
    
        computePrice(simulation,designNeed,designIdea,designIdeaComplexity,animations,size,blog,autonomy,specificFunctionnalities,specificFunctionnalitiesComplexity,accessibility,accessibilityEvaluation,content,translation,deployment);
        // computeTime(simulation,designNeed,designIdea,designIdeaComplexity,animations,size,blog,autonomy,specificFunctionnalities,specificFunctionnalitiesComplexity,accessibility,accessibilityEvaluation,content,translation,deployment);
        // computeAccurency(simulation,designNeed,designIdea,designIdeaComplexity,animations,size,blog,autonomy,specificFunctionnalities,specificFunctionnalitiesComplexity,accessibility,accessibilityEvaluation,content,translation,deployment);
    },[]);

    const computePrice = (simulation,designNeed,designIdea,designIdeaComplexity,animations,size,blog,autonomy,specificFunctionnalities,specificFunctionnalitiesComplexity,accessibility,accessibilityEvaluation,content,translation,deploymen)=> {
        const designPrice = designNeed.price * designIdea.price * designIdeaComplexity.price * simulation.referencePrices.design;
        
        const basicPrice = size.price * animations.price * simulation.referencePrices.basic;
        const functionnalitiesPrice = specificFunctionnalities * specificFunctionnalitiesComplexity * simulation.referencePrices.specificFunctionnalities;
        const blogPrice = blog.price * simulation.referencePrices.blog;
        const autonomyPrice = size.price * autonomy.price * simulation.referencePrices.autonomy;
        const accessibilityPrice = (size.price * accessibility.price + specificFunctionnalities.price * specificFunctionnalitiesComplexity.prices/2 ) * simulation.referencePrices.accessibility;
        const accessibilityEvaluationPrice = (size.price * accessibilityEvaluation.price + specificFunctionnalities.price * specificFunctionnalitiesComplexity.prices/2 ) * simulation.referencePrices.accessibilityEvaluation;
        const codePrice = basicPrice + functionnalitiesPrice + blogPrice + autonomyPrice + accessibilityPrice + accessibilityEvaluationPrice;
        
        const contentPrice = content.price * size.price * simulation.referencePrices.content + translation.price * size.price * simulation.referencePrices.translation;

        const deploymentPrice = Math.max(specificFunctionnalities.price * specificFunctionnalitiesComplexity.price + blog.price/2) * simulation.referencePrices.deployment;
    
        return designPrice + codePrice + contentPrice + deploymentPrice;
    };

    useEffect(()=> {
        // updateSimulation(checkedButton);
        updateChoices(simulation);
        setSimulation({...simulation, nextPage: simulation.pages[currentPage.pageNumber-1].options.find(option=> option.englishLabel === simulation.pages[currentPage.pageNumber-1].current).nextPage})
    },[simulation,updateChoices]);

    return(
        <fieldset className="prices-simulator_page_radio-group" 
        // onKeyDown={(e)=>handleKeyDown(e)}
        >
            <ul>
                {
                    currentPage.options.map(option => {
                        return (<PricesSimulatorRadioButton key={option.id} simulation={simulation} 
                            setSimulation={setSimulation} option={option} 
                            checkedButton={checkedButton} setCheckedButton={setCheckedButton} 
                            buttonFocused={buttonFocused} />)
                    })
                }
            </ul>
        </fieldset>
    )
}