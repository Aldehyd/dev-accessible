import { useContext, useRef, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function SearchBar(): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const input = useRef(null);

    const [isSearching,setIsSearching] = useState<boolean>(false);

    const classList = `search-bar-container ${isSearching ? 'searching' : ''}`;

    const handleKeyDown = (e: KeyboardEvent)=> {
        switch(e.key) {
            case ' ':
                e.preventDefault();
                break;
            case 'Enter': 
                this.launchSearch();
                break;
            default:
                break;
        };
    };

    const launchSearch = ()=> {
        if(input.current?.value.length > 0) {
            setIsSearching(true);
            setTimeout(()=> setIsSearching(false),1000);
            // this.analyseSearchWords(this.input.value);
        };
    };

    return(
        <div className={classList}>
            <span className="input-container">
                <input type="text" placeholder={language === "french" ? "Rechercher..." : "Search..."}
                 maxLength="26" onKeyDown={(e)=> handleKeyDown(e)} ref={input} />
            </span>
            <button type="button" className="search-button" 
                aria-label={language === "french" ? "Rechercher" : "Search"}
                onClick={()=> launchSearch()}>
                <span className="circle"></span>
                <span className="rectangle"></span>
            </button>
        </div>
    )
}