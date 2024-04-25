import SimulationInterface from '../Interfaces/simulationInterface.tsx';

export const initialSimulation: SimulationInterface = {
    startSimulation: false,
    understood: false,
    currentPage: 1,
    nextPage: 2,
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
        deployment: 200
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
            current: 1,
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
            frenchQuestion: "Avez-vous une idée du design souhaité ?",
            englishQuestion: "Do you have any idea of the wished design ?",
            current: 2,
            options: [
                {
                    id: 0,
                    frenchLabel: "Une idée précise",
                    englishLabel: "An accurate idea",
                    nextPage: 3,
                    price: 0.4,
                    time: 0.6,
                    accurency: 1
                },
                {
                    id: 1,
                    frenchLabel: "Une vague idée",
                    englishLabel: "A vague idea",
                    nextPage: 3,
                    price: 0.6,
                    time: 0.8,
                    accurency: 0.6
                },
                {
                    id: 2,
                    frenchLabel: "Aucune",
                    englishLabel: "None",
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
            frenchQuestion: "Comment qualifieriez-vous le design souhaité ?",
            englishQuestion: "How complicate is the wished design ?",
            current: 3,
            options: [ 
                {
                    id: 0,
                    frenchLabel: "Complexe",
                    englishLabel: "Complex",
                    nextPage: 4,
                    price: 1,
                    time: 1,
                    accurency: 0.2
                },
                {
                    id: 1,
                    frenchLabel: "Courant",
                    englishLabel: "Common",
                    nextPage: 4,
                    price: 0.4,
                    time: 0.4,
                    accurency: 0.5
                },
                {
                    id: 2,
                    frenchLabel: "Minimaliste",
                    englishLabel: "Minimalist",
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
            frenchQuestion: "Quelles animations souhaitez-vous ?",
            englishQuestion: "Which level of animations do you want ?",
            current: 3,
            options: [ 
                {
                    id: 0,
                    frenchLabel: "Complexes",
                    englishLabel: "Complex",
                    nextPage: 5,
                    price: 1.3,
                    time: 1.3,
                    accurency: 0.85
                },
                {
                    id: 1,
                    frenchLabel: "Courantes",
                    englishLabel: "Common",
                    nextPage: 5,
                    price: 1.1,
                    time: 1.1,
                    accurency: 0.95
                },
                {
                    id: 2,
                    frenchLabel: "Minimalistes",
                    englishLabel: "Minimalists",
                    nextPage: 5,
                    price: 1,
                    time: 1,
                    accurency: 1
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
            current: 0,
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
            englishQuestion: "May the site have a blog ?",
            current: 1,
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
            frenchQuestion: "Quelle quantité de contenus souhaitez-vous pouvoir modifier de façon autonome ?",
            englishQuestion: "How much content would you like to be able to modify by yourself ?",
            current: 3,
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
            frenchQuestion: "Le site doit-il proposer des fonctionnalités spécifiques (autres que les fonctionnalités courantes comme les menus de navigation, moteur de recherche, formulaire de contact) ?",
            englishQuestion: "Does the site have some specific funtionnalities (other than the classic ones such as navigation menus, search bar, contact form) ?",
            current: 1,
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
                }
            ]
        },
        {
            name: "specificFunctionnalitiesComplexity",
            pageNumber: 9,
            frenchTitle: "Fonctionnalités spécifiques",
            englishTitle: "Specific funtionnalities",
            frenchQuestion: "Comment jugeriez-vous les fonctionnalités spécifiques requises ?",
            englishQuestion: "How would you evaluate the requested specific functionnalities ?",
            current: 3,
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
            englishQuestion: "Must the site be accessible ?",
            current: 1,
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
            englishQuestion: "Do you need an accessibility evaluation ?",
            current: 1,
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
            englishQuestion: "Do you need a content writing ?",
            current: 1,
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
            englishQuestion: "Do you need an english translation of the content ?",
            current: 1,
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
            englishQuestion: "Do you need a deployment of the site ?",
            current: 1,
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
};
