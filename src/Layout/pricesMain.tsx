import PricesSimulator from "./pricesSimulator.tsx";

export default function PricesMain(): React.JSX.Element {
    return (
        <>
            <p>Pour une prestation de freelance sur une mission, mon TJM est de 400€ H.T.</p>
            <p>Les prestations de communication visuelle (logos, bannières, photos, vidéos,
                motion design) variant fortement en fonction des besoins, les prix s'évaluent 
                au cas par cas.
            </p>
            <p>Pour une création de site internet, vous pouvez utiliser le simulateur ci-dessous
                pour avoir une idée de mes tarifs.
            </p>
            <p>Je peux également vous proposer un forfait global incluant la création de votre site
                et votre communication visuelle.
            </p>
            <p>N'hésitez pas à me contacter pour en discuter.</p>
            <PricesSimulator />
        </>
    );
};