import { useState } from "react";
import BasicButton from "../Components/basic-button.tsx";
import PricesSimulatorPage from "./pricesSimulatorPage.tsx";
import PricesSimulatorEvaluation from "./pricesSimulatorEvaluation.tsx";

export default function PricesSimulator(): React.JSX.Element {

    const [simulation,setSimulation] = useState({
        startSimulation: false,
        understood: false,
        currentPage: 1,
        totalPages: 14,
        referencePrices: {
            design: 5000,
            basicCode: 700,
            blog: 1000,
            autonomy: 600,
            specificFunctionnalities: 500,
            accessibility: 1000,
            accessibilityEvaluation: 500,
            content: 800,
            translation: 400,
            deployment: 300
        },
        referenceTimes: {
            design: 20,
            basicCode: 5,
            blog: 10,
            autonomy: 7,
            specificFunctionnalities: 5,
            accessibility: 10,
            accessibilityEvaluation: 5,
            content: 3,
            translation: 2,
            deployment: 2
        },
        coeffs: {
            design: 5,
            code: 15,
            content: 2,
            deployment: 1
        },
        pages: [
            {
                name: "designNeed",
                pageNumber: 1,
                frenchTitle: "Design",
                englishTitle: "Design",
                frenchQuestion: "Souhaitez-vous une prestation de web design ?",
                englishQuestion: "Do you need a web design service ?",
                current: "No",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Oui",
                        englishLabel: "Yes",
                        nextPage: 2,
                        price: 1,
                        time: 1,
                        accurency: 1
                    },
                    {
                        id: 1,
                        frenchLabel: "Non",
                        englishLabel: "No",
                        nextPage: 4,
                        price: 0,
                        time: 0,
                        accurency: 1
                    }
                ]
            },
            {
                name: "designIdea",
                pageNumber: 2,
                frenchTitle: "Design",
                englishTitle: "Design",
                frenchQuestion: "Avez-une idée du design souhaité ?",
                englishQuestion: "Do you have any idea of the wished design ?",
                current: "I don't know",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Précise",
                        englishLabel: "Accurate",
                        nextPage: 3,
                        price: 0.4,
                        time: 0.6,
                        accurency: 1
                    },
                    {
                        id: 1,
                        frenchLabel: "Vague",
                        englishLabel: "Vague",
                        nextPage: 3,
                        price: 0.6,
                        time: 0.8,
                        accurency: 0.6
                    },
                    {
                        id: 2,
                        frenchLabel: "Je ne sais pas",
                        englishLabel: "I don't know",
                        nextPage: 3,
                        price: 1,
                        time: 1,
                        accurency: 0.4
                    }
                ]
            },
            {
                name: "designIdeaComplexity",
                pageNumber: 3,
                frenchTitle: "Design",
                englishTitle: "Design",
                frenchQuestion: "De quel niveau de complexité est le design souhaité ?",
                englishQuestion: "How complicate is the wished design ?",
                current: "I don't know",
                options: [ 
                    {
                        id: 0,
                        frenchLabel: "Elevé",
                        englishLabel: "High",
                        nextPage: 4,
                        price: 1,
                        time: 1,
                        accurency: 0.2
                    },
                    {
                        id: 1,
                        frenchLabel: "Moyen",
                        englishLabel: "Midle",
                        nextPage: 4,
                        price: 0.4,
                        time: 0.4,
                        accurency: 0.5
                    },
                    {
                        id: 2,
                        frenchLabel: "Bas",
                        englishLabel: "Low",
                        nextPage: 4,
                        price: 0.2,
                        time: 0.2,
                        accurency: 0.8
                    },
                    {
                        id: 3,
                        frenchLabel: "Je ne sais pas",
                        englishLabel: "I don't know",
                        nextPage: 4,
                        price: 0.4,
                        time: 0.4,
                        accurency: 0.5
                    }
                ]
            },
            {
                name: "animations",
                pageNumber: 4,
                frenchTitle: "Animations",
                englishTitle: "Animations",
                frenchQuestion: "Quel niveau d'animations souhaitez-vous ?",
                englishQuestion: "Which level of animations do you want ?",
                current: "I don't know",
                options: [ 
                    {
                        id: 0,
                        frenchLabel: "Bas",
                        englishLabel: "Low",
                        nextPage: 5,
                        price: 1,
                        time: 1,
                        accurency: 1
                    },
                    {
                        id: 1,
                        frenchLabel: "Moyen",
                        englishLabel: "Midle",
                        nextPage: 5,
                        price: 1.1,
                        time: 1.1,
                        accurency: 0.95
                    },
                    {
                        id: 2,
                        frenchLabel: "Elevé",
                        englishLabel: "High",
                        nextPage: 5,
                        price: 1.3,
                        time: 1.3,
                        accurency: 0.85
                    },
                    {
                        id: 3,
                        frenchLabel: "Je ne sais pas",
                        englishLabel: "I don't know",
                        nextPage: 5,
                        price: 1.1,
                        time: 1.1,
                        accurency: 0.9
                    }
                ]
            },
            {
                name: "size",
                pageNumber: 5,
                frenchTitle: "Taille",
                englishTitle: "Size",
                frenchQuestion: "Combien de pages comptera le site ?",
                englishQuestion: "How many pages will have the site ?",
                current: "One",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Une seule",
                        englishLabel: "One",
                        nextPage: 7,
                        price: 1,
                        time: 1,
                        accurency: 1
                    },
                    {
                        id: 1,
                        frenchLabel: "Moins de 10",
                        englishLabel: "Less than 10",
                        nextPage: 6,
                        price: 1.5,
                        time: 1.5,
                        accurency: 1
                    },
                    {
                        id: 2,
                        frenchLabel: "Moins de 20",
                        englishLabel: "Less than 20",
                        nextPage: 6,
                        price: 2,
                        time: 2,
                        accurency: 1
                    },
                    {
                        id: 3,
                        frenchLabel: "Plus de 20",
                        englishLabel: "More than 20",
                        nextPage: 6,
                        price: 3.5,
                        time: 3.5,
                        accurency: 0.5
                    }
                ]
            },
            {
                name: "blog",
                pageNumber: 6,
                frenchTitle: "Blog",
                englishTitle: "Blog",
                frenchQuestion: "Le site doit-il avoir un blog ?",
                englishQestion: "May the site have a blog ?",
                current: "No",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Oui",
                        englishLabel: "Yes",
                        nextPage: 7,
                        price: 1,
                        time: 1,
                        accurency: 0.9
                    },
                    {
                        id: 1,
                        frenchLabel: "Non",
                        englishLabel: "No",
                        nextPage: 7,
                        price: 0,
                        time: 0,
                        accurency: 1
                    }
                ]
            },
            {
                name: "autonomy",
                pageNumber: 7,
                frenchTitle: "Autonomie",
                englishTitle: "Autonomy",
                frenchQuestion: "Quelle quantité de contenus l'administrateur du site doit-il pouvoir modifier de façon autonome ?",
                englishQestion: "How much content must the admin be able to modify by himself ?",
                current: "None",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Beaucoup",
                        englishLabel: "A lot",
                        nextPage: 8,
                        price: 2,
                        time: 2,
                        accurency: 0.6
                    },
                    {
                        id: 1,
                        frenchLabel: "Quelques-uns",
                        englishLabel: "Some",
                        nextPage: 8,
                        price: 1,
                        time: 1,
                        accurency: 0.9
                    },
                    
                    {
                        id: 2,
                        frenchLabel: "Aucun",
                        englishLabel: "None",
                        nextPage: 8,
                        price: 0,
                        time: 0,
                        accurency: 1
                    },
                    {
                        id: 3,
                        frenchLabel: "Je ne sais pas",
                        englishLabel: "I don't know",
                        nextPage: 8,
                        price: 1,
                        time: 1,
                        accurency: 0.5
                    }
                ]
            },
            {
                name: "specificFunctionnalities",
                pageNumber: 8,
                frenchTitle: "Fonctionnalités spécifiques",
                englishTitle: "Specific funtionnalities",
                frenchQuestion: "Le site doit-il proposer des fonctionnalités spécifiques (autres que les fonctionnalités courantes : menus de navigation, moteur de recherche, formulaire de contact) ?",
                englishQestion: "Does the site have some specific funtionnalities (other than the classic ones : navigation menus, search bar, contact form) ?",
                current: "I don't know",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Oui",
                        englishLabel: "Yes",
                        nextPage: 9,
                        price: 1,
                        time: 1,
                        accurency: 1 
                    },
                    {
                        id: 1,
                        frenchLabel: "Non",
                        englishLabel: "No",
                        nextPage: 10,
                        price: 0,
                        time: 0,
                        accurency: 1 
                    },
                    {
                        id: 2,
                        frenchLabel: "Je ne sais pas",
                        englishLabel: "I don't know",
                        nextPage: 10,
                        price: 0,
                        time: 0,
                        accurency: 1 
                    }
                ]
            },
            {
                name: "specificFunctionnalitiesComplexity",
                pageNumber: 9,
                frenchTitle: "Fonctionnalités spécifiques",
                englishTitle: "Specific funtionnalities",
                frenchQuestion: "Comment jugeriez-vous les fonctionnalités spécifiques requises ?",
                englishQestion: "How would you evaluate the requested specific functionnalities ?",
                current: "I don't know",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Complexes",
                        englishLabel: "Complex",
                        nextPage: 10,
                        price: 5,
                        time: 5,
                        accurency: 0.5
                    },
                    {
                        id: 1,
                        frenchLabel: "Moyennement complexes",
                        englishLabel: "Relatively complex",
                        nextPage: 10,
                        price: 3,
                        time: 3,
                        accurency: 0.8 
                    },
                    {
                        id: 2,
                        frenchLabel: "Simples",
                        englishLabel: "Simple",
                        nextPage: 10,
                        price: 2,
                        time: 2,
                        accurency: 0.9 
                    },
                    {
                        id: 3,
                        frenchLabel: "Je ne sais pas",
                        englishLabel: "I don't know",
                        nextPage: 10,
                        price: 2,
                        time: 2,
                        accurency: 0.7 
                    }
                ]
            },
            {
                name: "accessibility",
                pageNumber: 10,
                frenchTitle: "Accessibilité",
                englishTitle: "Accessibility",
                frenchQuestion: "Le site doit-il être accessible ?",
                englishQestion: "Must the site be accessible ?",
                current: "No",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Oui",
                        englishLabel: "Yes",
                        nextPage: 11,
                        price: 1,
                        time: 1,
                        accurency: 0.7 
                    },
                    {
                        id: 1,
                        frenchLabel: "Non",
                        englishLabel: "No",
                        nextPage: 12,
                        price: 0,
                        time: 0,
                        accurency: 1 
                    }
                ]
            },
            {
                name: "accessibilityEvaluation",
                pageNumber: 11,
                frenchTitle: "Accessibilité",
                englishTitle: "Accessibility",
                frenchQuestion: "Avez-vous besoin d'une évaluation de l'accessibilité ?",
                englishQestion: "Do you need an accessibility evaluation ?",
                current: "No",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Oui",
                        englishLabel: "Yes",
                        nextPage: 12,
                        price: 1,
                        time: 1,
                        accurency: 0.9
                    },
                    {
                        id: 1,
                        frenchLabel: "Non",
                        englishLabel: "No",
                        nextPage: 12,
                        price: 0,
                        time: 0,
                        accurency: 1 
                    }
                ]     
            },
            {
                name: "content",
                pageNumber: 12,
                frenchTitle: "Contenu",
                englishTitle: "Content",
                frenchQuestion: "Avez-vous besoin d'une rédaction des contenus ?",
                englishQestion: "Do you need a content writing ?",
                current: "No",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Oui",
                        englishLabel: "Yes",
                        nextPage: 13,
                        price: 1,
                        time: 1,
                        accurency: 0.8 
                    },
                    {
                        id: 1,
                        frenchLabel: "Non",
                        englishLabel: "No",
                        nextPage: 13,
                        price: 0,
                        time: 0,
                        accurency: 1 
                    }
                ]
            },
            {
                name: "translation",
                pageNumber: 13,
                frenchTitle: "Traduction",
                englishTitle: "Translation",
                frenchQuestion: "Avez-vous besoin d'une traduction en anglais des contenus ?",
                englishQestion: "Do you need an english translation of the content ?",
                current: "No",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Oui",
                        englishLabel: "Yes",
                        nextPage: 14,
                        price : 1,
                        time: 1,
                        accurency: 0.8 
                    },
                    {
                        id: 1,
                        frenchLabel: "Non",
                        englishLabel: "No",
                        nextPage: 14,
                        price: 0,
                        time: 0,
                        accurency: 1 
                    }
                ]
            },
            {
                name: "deployment",
                pageNumber: 14,
                frenchTitle: "Déploiement",
                englishTitle: "Deployment",
                frenchQuestion: "Avez-vous besoin d'une mise en ligne du site ?",
                englishQestion: "Do you need a deployment of the site ?",
                current: "No",
                options: [
                    {
                        id: 0,
                        frenchLabel: "Oui",
                        englishLabel: "Yes",
                        nextPage: 15,
                        price: 1,
                        time: 1,
                        accurency: 1,
                    },
                    {
                        id: 1,
                        frenchLabel: "Non",
                        englishLabel: "No",
                        nextPage: 15,
                        price: 0,
                        time: 0,
                        accurency: 1 
                    }
                ]
            }
        ],
        currentEvaluation: {
            price: 0,
            time: 0,
            accurency: 1,
            accurencyCategory: {
                french: "Bonne",
                english: "Good"
            }
        }
    });

    const startSimulation = ()=> {
        setSimulation({...simulation, startSimulation: true});
    };

    const understand = ()=> {
        setSimulation({...simulation, understood: true});
    };

    return (
        <div className="prices-simulator">
            {
                !simulation.startSimulation && 
                    <BasicButton frenchText="Démarrer la simulation" englishText="Start simulation" 
                        onWhiteBackground={true} onClickFunction={startSimulation} />
            
            }
            {
                simulation.startSimulation && !simulation.understood &&
                    <div className="prices-simulator_page">
                       <p>Attention ! Les montant calculés via ce simulateur ne constituent en aucun
                        cas un devis ou une offre de contrat. Ils ne sont donnés qu'à titre
                        purement informatif. Pour toute demande de prestation, contactez-moi via le
                        formulaire, afin que nous puissions échanger plus en détails sur vos besoins. 
                        </p>
                        <BasicButton frenchText="J'ai compris" englishText="I understand" 
                            onWhiteBackground={true} onClickFunction={understand} /> 
                    </div>
            }
            {
                simulation.understood && simulation.currentPage <= simulation.totalPages &&
                    <PricesSimulatorPage 
                        simulation={simulation} setSimulation={setSimulation} />
            }
            {
                simulation.understood &&
                    <PricesSimulatorEvaluation simulation={simulation} />
            }
        </div>
    )
}