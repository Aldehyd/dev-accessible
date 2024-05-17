import { useState, useContext, useEffect } from "react";
import { fetchData } from "../Functions/fetchData.tsx";
import CustomLink from "../Components/custom-link.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import Loader from "../Components/loader.tsx";
import Error from "../Components/error.tsx";

export default function ServicesMain(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const [content,setContent] = useState("");
    const [isContentLoading,setIsContentLoading] = useState<boolean>(true);
    const [error,setError] = useState<boolean>(false);

    useEffect(()=> {
        fetchData('http://localhost:4000/page-content?page=services',setContent,setIsContentLoading,setError);
    },[]);

    return (
        <>
        {isContentLoading && !error && <Loader />}
            {error && <Error frenchMessage="Une erreur est survenue. Veuillez rafraichir la page svp." englishMessage="An error has occured. Please refresh the current page." />}
            {!isContentLoading && !error &&
                <>
                    {content[0]?.content.map(contentUnit => {
                        switch(contentUnit.type) {
                            case 'title':
                                if(contentUnit.options === 2) {
                                    return (language === "french" ? <h2>{contentUnit.frenchContent}</h2> : <h2>{contentUnit.englishContent}</h2>)
                                } else if(contentUnit.options === 3) {
                                    return (language === "french" ? <h3>{contentUnit.frenchContent}</h3> : <h3>{contentUnit.englishContent}</h3>)
                                } else if(contentUnit.options === 4) {
                                    return (language === "french" ? <h4>{contentUnit.frenchContent}</h4> : <h4>{contentUnit.englishContent}</h4>)
                                };
                                break;
                            case 'list':
                                return <ul className={contentUnit.options === "styled" ? "styled-list" : ""}>
                                    {
                                        language === "french" ?
                                            contentUnit.frenchContent.map(line => <li key={contentUnit.frenchContent.indexOf(line)}>{line}</li>)
                                            :
                                            contentUnit.englishContent.map(line => <li key={contentUnit.englishContent.indexOf(line)}>{line}</li>)
                                    }
                                </ul>
                            case 'note':
                                return (
                                    language === "french" ?
                                        <p className="note"><span>{contentUnit.frenchContent[0]}</span><span>{contentUnit.frenchContent[1]}</span></p>
                                        :
                                        <p className="note"><span>{contentUnit.frenchContent[0]}</span><span>{contentUnit.frenchContent[1]}</span></p>
                                )
                            case 'paragraph':
                                return (
                                    language === "french" ?
                                        <p key={contentUnit.id}>{contentUnit.frenchContent}</p>
                                        :
                                        <p key={contentUnit.id}>{contentUnit.englishContent}</p>
                                )
                            case 'link':
                                return <CustomLink frenchText={contentUnit.frenchText} englishText={contentUnit.englishText} route={contentUnit.route} openInNewTab={contentUnit.options === "openInNewTab" ? true : false} />
                            default:
                                break;
                        };
                    })}
                </> 
            }
        </>
    )
}