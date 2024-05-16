import { useState, useEffect } from "react";
import { fetchData } from "../Functions/fetchData.tsx";
import Loader from "../Components/loader.tsx";
import Error from "../Components/error.tsx";

export default function AccessibilityMain(): React.JSX.Element {

    const [content,setContent] = useState("");
    const [isContentLoading,setIsContentLoading] = useState<boolean>(true);
    const [error,setError] = useState<boolean>(false);

    useEffect(()=> {
        fetchData('http://localhost:4000/page-content?page=accessibility',setContent,setIsContentLoading,setError);
    },[]);

    return (
        <>
            {isContentLoading && !error && <Loader />}
            {error && <Error frenchMessage="Une erreur est survenue. Veuillez rafraichir la page svp." englishMessage="An error has occured. Please refresh the current page." />}
            {!isContentLoading && !error &&
                <p>{content[0]?.content[0].frenchContent}</p>
            }
        </>
    )
}