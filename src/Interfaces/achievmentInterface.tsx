import PictureInterface from "../Interfaces/pictureInterface.tsx";

export default interface AchievmentInterface {
    id: number,
    title: string,
    websiteLink: string,
    githubLink: string,
    imageName: string,
    frenchAlt: string,
    englishAlt: string,
    frenchType: string,
    englishType: string,
    frenchNeed: string,
    englishNeed: string,
    year: string,
    developmentTools: string[],
    technologies: {
        frontEnd: string[],
        backEnd: string[],
        dataBase : string[]
    },
    accessibility: {
        score: number,
        frenchNonCompliance: string[],
        englishNonCompliance: string[]
    },
    frenchFonctionnalities: string[],
    englishFonctionnalities: string[],
    design: {
        frenchWork: string[],
        englishWork: string[],
        tools: string[]
    },
    frenchDeployment: string,
    englishDeployment: string,
    frenchComments: string,
    englishComents: string,
    pictures: PictureInterface[],
    privacyPolicy?: {
        frenchCollect: string,
        englishCollect: string,
        ownerName: string,
        ownerAdress: string,
        frenchCourt: string,
        englishCourt: string,
        mail: string,
        frenchLegalAction: string,
        englishLegalAction: string,
        frenchPolicyChanges: string,
        englishPolicyChanges: string,
        frenchNewConsent: string,
        englishNewConsent: string,
        lastChangeDate: string,
    }
}