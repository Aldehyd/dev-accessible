import ModalLayout from "./modalLayout.tsx";

interface AccessibilitySettingsModalPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function AccessibilitySettingsModal({setDisplay}: AccessibilitySettingsModalPropsInterface): React.JSX.Element {
    return (
        <ModalLayout setDisplay={setDisplay} frenchTitle="Réglages d'accessibilité" englishTitle="Accessibility settings">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ullam eaque at magni voluptatibus odit explicabo dolor. Nuum, dignissimos deltatum culpa natus, rem dolorem nobis itaque!
            lor sit amet consectetur adipisicing elit. Laborum ullam eaque at magni voluptatibus odit explicabo dolor. Nuum, dignissimos deltatum culpa natus, rem dolore
            </p>
        </ModalLayout>
    )
}