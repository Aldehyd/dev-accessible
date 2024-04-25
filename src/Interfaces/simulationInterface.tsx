import SimulationPageInterface from "./simulationPageInterface.tsx";

export default interface SimulationInterface {
    startSimulation: boolean,
    understood: boolean,
    currentPage: number,
    nextPage: number,
    totalPages: number,
    referencePrices: {
        design: number,
        basicCode: number,
        blog: number,
        autonomy: number,
        specificFunctionnalities: number,
        accessibility: number,
        accessibilityEvaluation: number,
        content: number,
        translation: number,
        deployment: number
    },
    referenceTimes: {
        design: number,
        basicCode: number,
        blog: number,
        autonomy: number,
        specificFunctionnalities: number,
        accessibility: number,
        accessibilityEvaluation: number,
        content: number,
        translation: number,
        deployment: number
    },
    coeffs: {
        design: number,
        code: number,
        content: number,
        deployment: number
    },
    pages: SimulationPageInterface[],
}
