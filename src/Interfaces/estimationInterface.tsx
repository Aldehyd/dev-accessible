export default interface EstimationInterface {
    price: {
        total: number,
        design: number,
        code: number,
        content: number,
        deployment: number
    },
    time: {
        total: number,
        design: number,
        code: number,
        content: number,
        deployment: number
    },
    accurency: number,
    accurencyCategory: {
        french: string,
        english: string
    }
}