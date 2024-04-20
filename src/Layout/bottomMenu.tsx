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
            {
                home ?
                    <>
                        <MainLink frenchText="Contact" englishText="Contact" route="/contact" />
                        <MainLink frenchText="Plan du site" englishText="Site map" route="/site-map" />
                        <MainLink frenchText="Mentions légales" englishText="Legal mentions" route="/legal-mentions" />
                        <MainLink frenchText="Confidentialité" englishText="Privacy" route="/privacy-policy" />
                        <MainLink frenchText="Accessibilité" englishText="Accessibility" route="/accessibility" />
                    </>
                    :
                    <>
                        <MainLink frenchText="Mentions légales" englishText="Legal mentions" route="/legal-mentions" />
                        <MainLink frenchText="Plan du site" englishText="Site map" route="/site-map" />
                        <MainLink frenchText="Contact" englishText="Contact" route="/contact" />
                        <MainLink frenchText="Confidentialité" englishText="Privacy" route="/privacy-policy" />
                        <MainLink frenchText="Accessibilité" englishText="Accessibility" route="/accessibility" />
                    </>
            }
        </div>
    )
}