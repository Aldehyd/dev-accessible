import { useCallback, useContext, useEffect, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import PricesSimulatorRadioButton from "../Components/prices-simulator-radio-button.tsx";
import SimulationInterface from "../Interfaces/simulationInterface.tsx";
import SimulationPageInterface from "../Interfaces/simulationPageInterface.tsx";
import EstimationInterface from "../Interfaces/estimationInterface.tsx";
import SimulationPageOptionInterface from "../Interfaces/simulationPageOptionInterface.tsx";
interface PricesSimulatorRadioButtonGroupProps {
    simulation: SimulationInterface,
    setSimulation: (simulation: SimulationInterface)=> void,
    currentEstimation: EstimationInterface,
    setCurrentEstimation: (currentEstimation: EstimationInterface)=> void
}

export default function PricesSimulatorRadioButtonsGroup({simulation,setSimulation,currentEstimation,setCurrentEstimation} : PricesSimulatorRadioButtonGroupProps): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [currentPage,setCurrentPage] = useState(simulation.pages.find(page => page.pageNumber === simulation.currentPage));
    
    const [checkedButton,setCheckedButton] = useState(currentPage.current);

    const [buttonFocused,setButtonFocused] = useState(currentPage.options.find(option=> option.id === currentPage.current));

    useEffect(()=> {
        setCurrentPage(simulation.pages.find(page => page.pageNumber === simulation.currentPage));
    },[simulation.pages,simulation.currentPage]);

    useEffect(()=> {
        setCheckedButton(currentPage.current);
    },[currentPage]);

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

    const computePrice = useCallback((designNeed,designIdea,designIdeaComplexity,animations,size,blog,autonomy,specificFunctionnalities,specificFunctionnalitiesComplexity,accessibility,accessibilityEvaluation,content,translation)=> {
        const designPrice = designNeed.price * designIdea.price * designIdeaComplexity.price * simulation.referencePrices.design;
        
        const basicPrice = size.price * animations.price * simulation.referencePrices.basicCode;
        const functionnalitiesPrice = specificFunctionnalities.price * specificFunctionnalitiesComplexity.price * simulation.referencePrices.specificFunctionnalities;
        const blogPrice = blog.price * simulation.referencePrices.blog;
        const autonomyPrice = size.price * autonomy.price * simulation.referencePrices.autonomy;
        const accessibilityPrice = (size.price * accessibility.price + specificFunctionnalities.price * specificFunctionnalitiesComplexity.price/2 ) * simulation.referencePrices.accessibility;
        const accessibilityEvaluationPrice = (size.price * accessibilityEvaluation.price + specificFunctionnalities.price * specificFunctionnalitiesComplexity.price/2 ) * simulation.referencePrices.accessibilityEvaluation;
        
        const contentPrice = content.price * size.price * simulation.referencePrices.content;
        const translationPrice =  translation.price * size.price * simulation.referencePrices.translation;

        const deploymentPrice = Math.max(specificFunctionnalities.price * specificFunctionnalitiesComplexity.price + blog.price/2,1) * simulation.referencePrices.deployment;
       
        let totalPrice = 0;
        if(currentPage.pageNumber < 3) {
            totalPrice = 0;
        } else if(currentPage.pageNumber <= 4) {
            totalPrice = designPrice;
        } else if(currentPage.pageNumber === 5) {
            totalPrice = designPrice + basicPrice;
        } else if(currentPage.pageNumber === 6) {
            totalPrice = designPrice + basicPrice + blogPrice;
        } else if(currentPage.pageNumber === 7) {
            totalPrice = designPrice + basicPrice + blogPrice + autonomyPrice;
        } else if(currentPage.pageNumber <= 9) {
            totalPrice = designPrice + basicPrice + blogPrice + autonomyPrice + functionnalitiesPrice;
        } else if(currentPage.pageNumber === 10) {
            totalPrice = designPrice + basicPrice + blogPrice + autonomyPrice + functionnalitiesPrice + accessibilityPrice;
        } else if(currentPage.pageNumber === 11) {
            totalPrice = designPrice + basicPrice + blogPrice + autonomyPrice + functionnalitiesPrice + accessibilityPrice + accessibilityEvaluationPrice;
        } else if(currentPage.pageNumber === 12) {
            totalPrice = designPrice + basicPrice + blogPrice + autonomyPrice + functionnalitiesPrice + accessibilityPrice + accessibilityEvaluationPrice + contentPrice;
        } else if(currentPage.pageNumber === 13) {
            totalPrice = designPrice + basicPrice + blogPrice + autonomyPrice + functionnalitiesPrice + accessibilityPrice + accessibilityEvaluationPrice + contentPrice + translationPrice;
        } else if(simulation.pages[13].current === 0) {
            totalPrice = designPrice + basicPrice + blogPrice + autonomyPrice + functionnalitiesPrice + accessibilityPrice + accessibilityEvaluationPrice + contentPrice + translationPrice + deploymentPrice;
        } else {
            totalPrice = designPrice + basicPrice + blogPrice + autonomyPrice + functionnalitiesPrice + accessibilityPrice + accessibilityEvaluationPrice + contentPrice + translationPrice;
        };

        return {
            total: Math.round(totalPrice),
            design: Math.round(designPrice),
            code: Math.round(basicPrice + blogPrice + autonomyPrice + functionnalitiesPrice + accessibilityPrice + accessibilityEvaluationPrice),
            content: Math.round(contentPrice + translationPrice),
            deployment: (simulation.pages[13].current === 0 ? Math.round(deploymentPrice) : 0)
        }
    },[setCurrentEstimation,currentPage.pageNumber]);

    const computeTime = useCallback((designNeed,designIdea,designIdeaComplexity,animations,size,blog,autonomy,specificFunctionnalities,specificFunctionnalitiesComplexity,accessibility,accessibilityEvaluation,content,translation) => {
        const designTime = designNeed.time * designIdea.time * designIdeaComplexity.time * simulation.referenceTimes.design;
        
        const basicTime = size.time * animations.time * simulation.referenceTimes.basicCode;
        const functionnalitiesTime = specificFunctionnalities.time * specificFunctionnalitiesComplexity.time * simulation.referenceTimes.specificFunctionnalities;
        const blogTime = blog.time * simulation.referenceTimes.blog;
        const autonomyTime = size.time * autonomy.time * simulation.referenceTimes.autonomy;
        const accessibilityTime = (size.time * accessibility.time + specificFunctionnalities.time * specificFunctionnalitiesComplexity.time/2 ) * simulation.referenceTimes.accessibility;
        const accessibilityEvaluationTime = (size.time * accessibilityEvaluation.time + specificFunctionnalities.time * specificFunctionnalitiesComplexity.time/2 ) * simulation.referenceTimes.accessibilityEvaluation;
        
        const contentTime = content.time * size.time * simulation.referenceTimes.content;
        const translationTime =  translation.time * size.time * simulation.referenceTimes.translation;

        const deploymentTime = Math.min(Math.max(specificFunctionnalities.time * specificFunctionnalitiesComplexity.time + blog.time/2,1) * simulation.referenceTimes.deployment,5);
    
        let totalTime = 0;
        if(currentPage.pageNumber < 3) {
            totalTime = 0;
        } else if(currentPage.pageNumber <= 4) {
            totalTime = designTime;
        } else if(currentPage.pageNumber === 5) {
            totalTime = designTime + basicTime;
        } else if(currentPage.pageNumber === 6) {
            totalTime = designTime + basicTime + blogTime;
        } else if(currentPage.pageNumber === 7) {
            totalTime = designTime + basicTime + blogTime + autonomyTime;
        } else if(currentPage.pageNumber <= 9) {
            totalTime = designTime + basicTime + blogTime + autonomyTime + functionnalitiesTime;
        } else if(currentPage.pageNumber === 10) {
            totalTime = designTime + basicTime + blogTime + autonomyTime + functionnalitiesTime + accessibilityTime;
        } else if(currentPage.pageNumber === 11) {
            totalTime = designTime + basicTime + blogTime + autonomyTime + functionnalitiesTime + accessibilityTime + accessibilityEvaluationTime;
        } else if(currentPage.pageNumber === 12) {
            totalTime = designTime + basicTime + blogTime + autonomyTime + functionnalitiesTime + accessibilityTime + accessibilityEvaluationTime + contentTime;
        } else if(currentPage.pageNumber === 13) {
            totalTime = designTime + basicTime + blogTime + autonomyTime + functionnalitiesTime + accessibilityTime + accessibilityEvaluationTime + contentTime + translationTime;
        } else if(simulation.pages[13].current === 0) {
            totalTime = designTime + basicTime + blogTime + autonomyTime + functionnalitiesTime + accessibilityTime + accessibilityEvaluationTime + contentTime + translationTime + deploymentTime;
        } else {
            totalTime = designTime + basicTime + blogTime + autonomyTime + functionnalitiesTime + accessibilityTime + accessibilityEvaluationTime + contentTime + translationTime;
        };

        return {
            total: Math.round(totalTime),
            design: Math.round(designTime),
            code: Math.round(basicTime + blogTime + autonomyTime + functionnalitiesTime + accessibilityTime + accessibilityEvaluationTime),
            content: Math.round(contentTime + translationTime),
            deployment: (simulation.pages[13].current === 0 ? Math.round(deploymentTime) : 0)
        }

    },[setCurrentEstimation,currentPage.pageNumber]);

    interface computeFunctionsParametersInterface {
        designNeed: SimulationPageOptionInterface,
        designIdea: SimulationPageOptionInterface,
        designIdeaComplexity: SimulationPageOptionInterface,
        animations: SimulationPageOptionInterface,
        size: SimulationPageOptionInterface,
        blog: SimulationPageOptionInterface,
        autonomy: SimulationPageOptionInterface,
        specificFunctionnalities: SimulationPageOptionInterface,
        specificFunctionnalitiesComplexity: SimulationPageOptionInterface,
        accessibility: SimulationPageOptionInterface,
        accessibilityEvaluation: SimulationPageOptionInterface,
        content: SimulationPageOptionInterface,
        translation: SimulationPageOptionInterface
    }

    const computeAccurency = useCallback((designNeed,designIdea,designIdeaComplexity,animations,size,blog,autonomy,specificFunctionnalities,specificFunctionnalitiesComplexity,accessibility,accessibilityEvaluation,content,translation) => {
        
        const deploymentTime = Math.min(Math.max(specificFunctionnalities.time * specificFunctionnalitiesComplexity.time + blog.time/2,1) * simulation.referenceTimes.deployment,5);

        let totalAccurency = 1;
        if(currentPage.pageNumber === 1) {
            totalAccurency = 1;
        } else if(currentPage.pageNumber === 2) {
            totalAccurency = designNeed.accurency * designIdea.accurency;
        } else if(currentPage.pageNumber === 3) {
            totalAccurency = designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency;
        } else if(currentPage.pageNumber <= 4) {
            totalAccurency = designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency;
        } else if(currentPage.pageNumber === 5) {
            totalAccurency = ((designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency) * simulation.coeffs.design + (size.accurency * animations.accurency) * simulation.coeffs.code)/ (simulation.coeffs.design + simulation.coeffs.code);
        } else if(currentPage.pageNumber === 6) {
            totalAccurency = ((designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency) * simulation.coeffs.design + (size.accurency * animations.accurency * blog.accurency) * simulation.coeffs.code)/ (simulation.coeffs.design + simulation.coeffs.code);
        } else if(currentPage.pageNumber === 7) {
            totalAccurency = ((designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency) * simulation.coeffs.design + (size.accurency * animations.accurency *  blog.accurency * autonomy.accurency) * simulation.coeffs.code)/ (simulation.coeffs.design + simulation.coeffs.code);
        } else if(currentPage.pageNumber <= 9) {
            totalAccurency = ((designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency) * simulation.coeffs.design + (size.accurency * animations.accurency *  blog.accurency * autonomy.accurency * specificFunctionnalitiesComplexity.accurency) * simulation.coeffs.code)/ (simulation.coeffs.design + simulation.coeffs.code);
        } else if(currentPage.pageNumber === 10) {
            totalAccurency = ((designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency) * simulation.coeffs.design + (size.accurency * animations.accurency *  blog.accurency * autonomy.accurency * specificFunctionnalitiesComplexity.accurency * accessibility.accurency) * simulation.coeffs.code)/ (simulation.coeffs.design + simulation.coeffs.code);
        } else if(currentPage.pageNumber === 11) {
            totalAccurency = ((designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency) * simulation.coeffs.design + (size.accurency * animations.accurency *  blog.accurency * autonomy.accurency * specificFunctionnalitiesComplexity.accurency * accessibility.accurency * accessibilityEvaluation.accurency) * simulation.coeffs.code)/ (simulation.coeffs.design + simulation.coeffs.code);
        } else if(currentPage.pageNumber === 12) {
            totalAccurency = ((designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency) * simulation.coeffs.design + (size.accurency * animations.accurency *  blog.accurency * autonomy.accurency * specificFunctionnalitiesComplexity.accurency * accessibility.accurency * accessibilityEvaluation.accurency) * simulation.coeffs.code + (content.accurency) * simulation.coeffs.content)/ (simulation.coeffs.design + simulation.coeffs.code + simulation.coeffs.content);
        } else if(currentPage.pageNumber === 13) {
            totalAccurency = ((designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency) * simulation.coeffs.design + (size.accurency * animations.accurency *  blog.accurency * autonomy.accurency * specificFunctionnalitiesComplexity.accurency * accessibility.accurency * accessibilityEvaluation.accurency) * simulation.coeffs.code + (content.accurency * translation.accurency) * simulation.coeffs.content)/ (simulation.coeffs.design + simulation.coeffs.code + simulation.coeffs.content);
        } else if(simulation.pages[13].current === 0) {
            totalAccurency = ((designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency) * simulation.coeffs.design + (size.accurency * animations.accurency *  blog.accurency * autonomy.accurency * specificFunctionnalitiesComplexity.accurency * accessibility.accurency * accessibilityEvaluation.accurency) * simulation.coeffs.code + (content.accurency * translation.accurency) * simulation.coeffs.content + (1-deploymentTime/10) * simulation.coeffs.deployment)/ (simulation.coeffs.design + simulation.coeffs.code + simulation.coeffs.content + simulation.coeffs.deployment);
        } else {
            totalAccurency = ((designNeed.accurency * designIdea.accurency * designIdeaComplexity.accurency) * simulation.coeffs.design + (size.accurency * animations.accurency *  blog.accurency * autonomy.accurency * specificFunctionnalitiesComplexity.accurency * accessibility.accurency * accessibilityEvaluation.accurency) * simulation.coeffs.code + (content.accurency * translation.accurency) * simulation.coeffs.content)/ (simulation.coeffs.design + simulation.coeffs.code + simulation.coeffs.content);
        };
        
        return totalAccurency;
    },[setCurrentEstimation,currentPage.pageNumber]);

    const updateChoices = useCallback(()=> {
        const designNeed = simulation.pages[0].options.find(option => option.id === simulation.pages[0].current);
        const designIdea= simulation.pages[1].options.find(option => option.id === simulation.pages[1].current);
        const designIdeaComplexity = simulation.pages[2].options.find(option => option.id === simulation.pages[2].current);
        const animations = simulation.pages[3].options.find(option => option.id === simulation.pages[3].current);
        const size = simulation.pages[4].options.find(option => option.id === simulation.pages[4].current);
        const blog = simulation.pages[5].options.find(option => option.id === simulation.pages[5].current);
        const autonomy = simulation.pages[6].options.find(option => option.id === simulation.pages[6].current);
        const specificFunctionnalities = simulation.pages[7].options.find(option => option.id === simulation.pages[7].current);
        const specificFunctionnalitiesComplexity = simulation.pages[8].options.find(option => option.id === simulation.pages[8].current);
        const accessibility = simulation.pages[9].options.find(option => option.id === simulation.pages[9].current);
        const accessibilityEvaluation = simulation.pages[10].options.find(option => option.id === simulation.pages[10].current);
        const content = simulation.pages[11].options.find(option => option.id === simulation.pages[11].current);
        const translation = simulation.pages[12].options.find(option => option.id === simulation.pages[12].current);
        const deployment = simulation.pages[13].options.find(option => option.id === simulation.pages[13].current);
    
        const price = computePrice(designNeed,designIdea,designIdeaComplexity,animations,size,blog,autonomy,specificFunctionnalities,specificFunctionnalitiesComplexity,accessibility,accessibilityEvaluation,content,translation);
        const time = computeTime(designNeed,designIdea,designIdeaComplexity,animations,size,blog,autonomy,specificFunctionnalities,specificFunctionnalitiesComplexity,accessibility,accessibilityEvaluation,content,translation);
        const accurency = computeAccurency(designNeed,designIdea,designIdeaComplexity,animations,size,blog,autonomy,specificFunctionnalities,specificFunctionnalitiesComplexity,accessibility,accessibilityEvaluation,content,translation);
    
        let accurencyCategory = {
            french: "Elevée",
            english: "High"
        };
        if(accurency >= 0.8) {
            accurencyCategory = {
                french: "Elevée",
                english: "High"
            };
        } else if(accurency >=0.5) {
            accurencyCategory = {
                french: "Moyenne",
                english: "Midle"
            };
        } else if(accurency >= 0.3) {
            accurencyCategory = {
                french: "Basse",
                english: "Low"
            };
        } else {
            accurencyCategory = {
                french: "Très basse",
                english: "Very low"
            };
        };

        setCurrentEstimation({...currentEstimation, price: price, time: time, accurency: accurency, accurencyCategory: accurencyCategory});
    },[computePrice,computeTime,computeAccurency,simulation.pages]);

    useEffect(()=> {
        let newSimulation = simulation;
        if(currentPage) {
            newSimulation.pages[currentPage.pageNumber-1].current = checkedButton;
            console.log(checkedButton)
            newSimulation.nextPage = currentPage.options.find(option => option.id === checkedButton)?.nextPage;
        } 
        
        // setSimulation({...simulation,newSimulation});
        setSimulation({...simulation, nextPage: newSimulation.nextPage, pages: newSimulation.pages});
    },[checkedButton]);

    useEffect(()=> {
        console.log("update choices")
        updateChoices();
    },[simulation,updateChoices])

    return(
        <fieldset className="prices-simulator_page_radio-group" 
        // onKeyDown={(e)=>handleKeyDown(e)}
        >
            <ul>
                {
                    currentPage.options.map(option => {
                        return (<PricesSimulatorRadioButton key={option.id}  
                             option={option} 
                            checkedButton={checkedButton} setCheckedButton={setCheckedButton} 
                            buttonFocused={buttonFocused} />)
                    })
                }
            </ul>
        </fieldset>
    )
}