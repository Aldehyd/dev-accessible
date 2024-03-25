import CloseButton from "../Components/close-button.tsx";

export default function FullScreenModal({children}: any): React.JSX.Element {
    return (
        <div className="full-screen-modal">
            <CloseButton />
            {children}
        </div>
    )
}