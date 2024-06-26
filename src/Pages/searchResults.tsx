import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
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
import BurgerMenuButton from "../Components/burger-menu-button.tsx";
import Accessibot from "../Components/accessibot.tsx";
import AccessibotPlatform from "../Components/accessibot-platform.tsx";
import AccessibilityAnalysisWarningContext from "../Contexts/accessibility-analysis-warning-context.tsx";
import AccessibilityAnalysisModal from "../Modals/accessibilityAnalysisModal.tsx";

export default function SearchResults(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const {accessibilityAnalysisWarning,changeAccessibilityAnalysisWarning} = useContext(AccessibilityAnalysisWarningContext);

    const [isAccessibilityAnalysisModalDisplayed,setIsAccessibilityAnalysisModalDisplayed] = useState<boolean>(false);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);
    const [isLanguageModalDisplayed,setIsLanguageModalDisplayed] = useState<boolean>(false);
    const [isMainMenuExpanded,setIsMainMenuExpanded] = useState<boolean>(false);
    const [isAccessibilityAnalysisInfosModalDisplayed,setIsAccessibilityAnalysisInfosModalDisplayed] = useState<boolean>(false);

    const [query,setQuery] = useState<string>("");
    const [isSearching,setIsSearching] = useState<boolean>(true);
    const [isError,setIsError] = useState<boolean>(false);
    const [results,setResults] = useState<any>([]);

    const {state} = useLocation();

    useEffect(()=> {
        const {query} = state;
        const {language} = state;
        const {environnement} = state;
        setQuery(query);

        const options = {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        };

        fetch(`https://dev-accessible.com/search?language=${language}&environnement=${environnement}&query=${query}`,options)
        .then(res => {
            if(res.ok) {
                return res.json();
            };
        })
        .then(data => {
            setIsSearching(false);
            if(data) {
                setResults(data);
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

    useEffect(()=> {
        console.log(results)
    },[results])
    return (
        <>
            {isModalDisplayed && <ModalDarkBackground />}
            {isAccessibilityAnalysisModalDisplayed && <AccessibilityAnalysisModal setDisplay={setIsAccessibilityAnalysisModalDisplayed} />}
            {isLanguageModalDisplayed && <LanguageModal setDisplay={setIsLanguageModalDisplayed} />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            {isAccessibilityAnalysisInfosModalDisplayed && <AccessibilityAnalysisInfosModal setDisplay={setIsAccessibilityAnalysisInfosModalDisplayed} />}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed}
                    setLanguageModalDisplay={setIsLanguageModalDisplayed}
                    setAccessibilityAnalysisModalDisplay={setIsAccessibilityAnalysisInfosModalDisplayed} />
            </header>
            <BurgerMenuButton isExpanded={isMainMenuExpanded} setIsExpanded={setIsMainMenuExpanded} />
            <MainMenuModal isExpanded={isMainMenuExpanded} setIsExpanded={setIsMainMenuExpanded} />
            <Accessibot setDisplay={setIsAccessibilityAnalysisModalDisplayed} />
            <AccessibotPlatform />
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