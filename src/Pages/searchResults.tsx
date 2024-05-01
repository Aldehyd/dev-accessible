import { useContext, useEffect, useState } from "react";
import ModalContext from "../Contexts/modal-context.tsx";
import ModalDarkBackground from "../Components/modal-dark-background.tsx";
import AccessibilitySettingsModal from "../Modals/AccessibilitySettingsModal.tsx";
import TopMenu from "../Layout/topMenu.tsx";
import MainTitle from "../Components/main-title.tsx";
import BackLink from "../Components/back-link.tsx";
import BottomMenu from "../Layout/bottomMenu.tsx";
import LanguageModal from "../Modals/LanguageModal.tsx";
import MainMenuModal from '../Modals/mainMenuModal.tsx';
import AccessibilityAnalysisInfosModal from "../Modals/accessibilityAnalysisInfosModal.tsx";
import SearchResultsMain from "../Layout/searchResultsMain.tsx";
import Loader from "../Components/loader.tsx";
import Error from "../Components/error.tsx";

export default function SearchResults(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);
    const [isMainMenuExpanded,setIsMainMenuExpanded] = useState<boolean>(false);
    const [isAccessibilityAnalysisInfosModalDisplayed,setIsAccessibilityAnalysisInfosModalDisplayed] = useState<boolean>(false);

    const [query,setQuery] = useState<string>("");
    const [isSearching,setIsSearching] = useState<boolean>(true);
    const [isError,setIsError] = useState<boolean>(false);
    const [results,setResults] = useState<any>([]);

    useEffect(()=> {
        let params = new URLSearchParams(document.location.search);
        let query = params.get("query");
        let language = params.get("language");
        let environnement = params.get("environnement");
        setQuery(query);

        const queryObject = {
            query: query,
            language: language,
            environnement: environnement
        };

        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body : JSON.stringify(queryObject)
        };

        fetch('https://dev-accessible.com/search',options)
        .then(res => {
            if(res.ok) {
                return res.json();
            };
        })
        .then(data => {
            setIsSearching(false);
            if(data) {
                setResults(JSON.parse(data.results));
            } else {
                setIsError(true);
                setIsSearching(false);
            };
        })
        .catch(err => {
            setIsError(true);
            setIsSearching(false);
            console.log(err)
        })

    },[]);

    return (
        <>
            {isModalDisplayed && <ModalDarkBackground />}
            {isLanguageModalDisplayed && <LanguageModal setDisplay={setIsLanguageModalDisplayed} />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            {isAccessibilityAnalysisInfosModalDisplayed && <AccessibilityAnalysisInfosModal setDisplay={setIsAccessibilityAnalysisInfosModalDisplayed} />}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed}
                    setLanguageModalDisplay={setIsLanguageModalDisplayed}
                    setAccessibilityAnalysisModalDisplay={setIsAccessibilityAnalysisInfosModalDisplayed} />
            </header>
            <MainMenuModal isExpanded={isMainMenuExpanded} setIsExpanded={setIsMainMenuExpanded} />
            <main>
                <BackLink />
                <MainTitle frenchText="Résultats" englishText="Results" />
                {
                    isSearching && !isError && <Loader search={true} />
                }
                {
                    isError && <Error frenchMessage="Une erreur s'est produite..." englishMessage="An error occured..." />
                }
                {
                    !isSearching && !isError && <SearchResultsMain results={results} query={query} />
                }
            </main>
            <footer>
                <BottomMenu />
            </footer>
        </>
    )
}