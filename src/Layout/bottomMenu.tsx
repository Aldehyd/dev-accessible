import BottomMenuLine from "../Components/bottomMenuLine.tsx";
import MainLink from "../Components/main-link.tsx";

interface BottomMenuPropsInterface {
    home?: boolean
}

export default function BottomMenu({home=false}: BottomMenuPropsInterface): React.JSX.Element {
    return (
        <div className="bottom-menu">
            <BottomMenuLine home={home} />
            <MainLink frenchText="Plan du site" englishText="Site map" route="" />
            <MainLink frenchText="Contact" englishText="Contact" route="" />
            <MainLink frenchText="Accessibilité" englishText="Accessibility" route="" />
        </div>
    )
}