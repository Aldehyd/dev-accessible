import Error from '../Components/error.tsx';
import MainLink from '../Components/main-link.tsx';
import AchievmentsSeparator from '../Components/achievments-separator.tsx';

interface SearchResultsMainPropsInterface {
    results: any,
    query: string
}

export default function SearchResultsMain({results,query}: SearchResultsMainPropsInterface): React.JSX.Element {
   
    const noResult = (results)=> {
        for(let result of results) {
            if(result.lines.length > 0) {
                return false
            } else if(result.paragraphs.length > 0) {
                return false
            };   
        };
        return true
    };

    return (
        <>
            <p className="search-results_subtitle">{`Résultats de la recherche : "${query}"`}</p>
            {
                noResult(results) ?
                    <Error frenchMessage="Aucun résultat..." englishMessage="No result..." />
                    :
                    <div>
                        {
                            results.map(result => {
                                return(
                                    <>
                                        <>
                                            {
                                                result.lines.length > 0 &&
                                                    result.lines.map(line => {
                                                        return(
                                                            <>
                                                                <div className="search-results_result">
                                                                    <h2>{result.title}</h2>
                                                                    <p key={line.index}>{line}</p>
                                                                    <MainLink frenchText="Lire plus..." englishText="Read more..." route={"/"+result.link} />
                                                                </div>      
                                                                <AchievmentsSeparator />
                                                            </>
                                                        )
                                                    })
                                            }
                                        </>
                                        <>
                                            {
                                                result.paragraphs.length > 0 &&
                                                    result.paragraphs.map(paragraph => {
                                                        return(
                                                            <>
                                                                <div className="search-results_result">
                                                                    <h2>{result.title}</h2>
                                                                    <p key={paragraph.index}>{paragraph}</p>
                                                                    <MainLink frenchText="Lire plus..." englishText="Read more..." route={"/"+result.link} />
                                                                </div>     
                                                                <AchievmentsSeparator />
                                                            </> 
                                                        )
                                                    })
                                            }
                                        </>
                                        
                                    </>
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}