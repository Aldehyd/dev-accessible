import BottomMenuLine from "../Components/bottomMenuLine.tsx";
import CustomLink from "../Components/custom-link.tsx";

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
                        <CustomLink frenchText="Contact" englishText="Contact" route="/contact" />
                        <CustomLink frenchText="Plan du site" englishText="Site map" route="/site-map" />
                        <CustomLink frenchText="Mentions légales" englishText="Legal mentions" route="/legal-mentions" />
                        <CustomLink frenchText="Confidentialité" englishText="Privacy" route="/privacy-policy" />
                        <CustomLink frenchText="Accessibilité" englishText="Accessibility" route="/accessibility" />
                    </>
                    :
                    <>
                        <CustomLink frenchText="Mentions légales" englishText="Legal mentions" route="/legal-mentions" />
                        <CustomLink frenchText="Plan du site" englishText="Site map" route="/site-map" />
                        <CustomLink frenchText="Contact" englishText="Contact" route="/contact" />
                        <CustomLink frenchText="Confidentialité" englishText="Privacy" route="/privacy-policy" />
                        <CustomLink frenchText="Accessibilité" englishText="Accessibility" route="/accessibility" />
                    </>
            }
        </div>
    )
}