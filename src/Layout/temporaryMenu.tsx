import MainLink from "../Components/main-link.tsx";

export default function TemporaryMenu(): React.JSX.Element {
    return (
        <nav>
            <ul className="temporary-menu">
                <li>
                    <MainLink frenchText="Qui suis-je" englishText="Who am I" route="/who-am-i" />
                </li>
                <li>
                    <MainLink frenchText="CV" englishText="CV" route="/cv" />
                </li>
                <li>
                    <MainLink frenchText="Réalisations" englishText="Achievments" route="/achievments" />
                </li>
                <li>
                    <MainLink frenchText="Pourquoi l'accessibilité ?" englishText="Why accessibility ?" route="/why-accessibility" />
                </li>
                {/* <li>
                    <MainLink frenchText="Tarifs" englishText="Prices" route="/prices" />
                </li> */}
            </ul>
        </nav>
    )
}