import Error from '../Components/error.tsx';
import CustomLink from '../Components/custom-link.tsx';
import AchievmentsSeparator from '../Components/achievments-separator.tsx';

interface SearchResultsMainPropsInterface {
    results: any,
    query: string
}

export default function SearchResultsMain({results,query}: SearchResultsMainPropsInterface): React.JSX.Element {

    return (
        <>
            <p className="search-results_subtitle">{`Résultats de la recherche : "${query}"`}</p>
            {
                results.length === 0 ?
                    <Error frenchMessage="Aucun résultat..." englishMessage="No result..." />
                    :
                    <div>
                        {
                            results.map(result => {
                                return(
                                    <>
                                        <div className="search-results_result">
                                            <h2>{result.page}</h2>
                                            <p key={result.index}>{result.content}</p>
                                            <CustomLink frenchText="Lire plus..." englishText="Read more..." route={"/"+result.link} />
                                        </div>      
                                        <AchievmentsSeparator />
                                    </>
                                )
                            })
                        } 
                    </div>
            }
        </>
    )
}