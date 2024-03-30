export default interface LanguageInterface {
    id: string,
    frenchTitle: string,
    englishTitle: string,
    list: [
        {
            frenchLevel: string,
            englishLevel: string,
            score: string
        }
    ]
}