import CloseButton from "../Components/close-button.tsx";

export default function FullScreenModal({children,closeFunction}: any): React.JSX.Element {
    return (
        <div className="full-screen-modal">
            <CloseButton onClickFunction={closeFunction}/>
            {children}
        </div>
    )
}