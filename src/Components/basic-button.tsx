
export default function BasicButton({text,disableAbility=false,disabledStatus="false"}): React.JSX.Element {
    
    let basicButtonClassNames = `basic-button-container ${disabledStatus==="true" ? "disabled" : ""}`;

    return(
        <div className={basicButtonClassNames}>
            {
            disableAbility ? 
                <button className="basic-button" aria-disabled={disabledStatus}>{text}</button>
                :
                <button className="basic-button">{text}</button>
            }
            <div className="basic-button-shadow"></div>
        </div>
    )
}