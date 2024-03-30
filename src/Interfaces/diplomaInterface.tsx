export default interface DiplomaInterface {
    id: string,
    frenchTitle: string,
    englishTitle: string,
    list: [
       {
          frenchTitle: string,
          englisTitle : string,
          frenchDate: string,
          englishDate: string,
          frenchInstitute: string,
          englishInstitute: string,
          score: string
       }
    ]
 }