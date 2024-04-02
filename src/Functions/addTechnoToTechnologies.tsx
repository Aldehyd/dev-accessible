import AchievmentInterface from "../Interfaces/achievmentInterface.tsx";

export const addTechnoToTechnologies : (technosType: string, technologies: {id: string, frenchTitle: string, englishTitle: string, projects: string[]}[],achievments: AchievmentInterface[])=>void = (technosType,technologies,achievments) => {
    for(let achievment of achievments) {
        for(let techno of achievment.technologies[technosType]) {
            let isAlreadyInTechnologies = false;
            for(let technology of technologies) {
                if(technology.englishTitle === techno) {
                    isAlreadyInTechnologies = true;
                };
            };
            if(!isAlreadyInTechnologies) {
                technologies.push({id: techno, frenchTitle: techno, englishTitle: techno, projects: [achievment.title]});
            } else {
                let technologyToModify = technologies.find(tech => tech.id === techno);
                technologyToModify?.projects.push(achievment.title);
            };
        };
    };
};