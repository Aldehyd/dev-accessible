import SimulationPageOptionInterface from './simulationPageOptionInterface.tsx';

export default interface SimulationPageInterface {
    name: string,
    pageNumber: number,
    frenchTitle: string,
    englishTitle: string,
    frenchQuestion: string,
    englishQuestion: string,
    current: number,
    options: SimulationPageOptionInterface[]
}