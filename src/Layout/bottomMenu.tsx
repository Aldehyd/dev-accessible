import BottomMenuLine from "../Components/bottomMenuLine.tsx";
import MainLink from "../Components/main-link.tsx";

interface BottomMenuPropsInterface {
    home?: boolean
}

export default function BottomMenu({home=false}: BottomMenuPropsInterface): React.JSX.Element {

    const classList = `bottom-menu ${home ? "home" : ""}`;

    return (
        <div className={classList}>
            <BottomMenuLine home={home} />
            <MainLink frenchText="Plan du site" englishText="Site map" route="/site-map" />
            <MainLink frenchText="Contact" englishText="Contact" route="/contact" />
            <MainLink frenchText="Mentions légales" englishText="Legal mentions" route="/legal-mentions" />
            <MainLink frenchText="Accessibilité" englishText="Accessibility" route="/accessibility" />
        </div>
    )
}