import EstimationInterface from "../Interfaces/estimationInterface.tsx";

export const initialEstimation: EstimationInterface = {
    price: {
        total: 0,
        design: 0,
        code: 0,
        content: 0,
        deployment: 0
    },
    time: {
        total: 0,
        design: 0,
        code: 0,
        content: 0,
        deployment: 0
    },
    accurency: 1,
    accurencyCategory: {
        french: "Bonne",
        english: "Good"
    }
};