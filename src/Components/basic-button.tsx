interface BasicButtonPropsInterface {
    text: string,
    disableAbility: boolean,
    disabledStatus: string
}

export default function BasicButton({text,disableAbility=false,disabledStatus="false"}: BasicButtonPropsInterface): React.JSX.Element {
    
    let basicButtonClassNames = `basic-button-container ${disabledStatus==="true" ? "disabled" : ""}`;

    return(
        <div className={basicButtonClassNames}>
            {
            disableAbility ? 
                <button className="basic-button" aria-disabled={disabledStatus}>
                    <span className="basic-button_text">{text}</span>
                </button>
                :
                <button className="basic-button">
                    <span className="basic-button_text">{text}</span>
                </button>
            }
            <div className="basic-button-shadow"></div>
        </div>
    )
}