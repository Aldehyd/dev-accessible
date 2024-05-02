import CustomLink from "../Components/custom-link.tsx";

export default function WhyAccessibilityMain(): React.JSX.Element {
    return (
        <>
            <h2>Accessibilité numérique :</h2>
            <q>L’accessibilité numérique consiste à rendre les contenus et services numériques compréhensibles et utilisables par les personnes en situation de handicap.</q>
            <p>En France, 1 utilisateur d'internet sur 5 est en situation de handicap.</p>
            <p>L'accessibilité numérique :</p>
            <ul className="styled-list">
                <li>permet d'inclure un nombre plus important d'utilisateurs</li>
                <li>améliore l'expérience de tous les utilisateurs</li>
                <li>améliore le référencement</li>
                <li>est une obligation légale dans de nombreux cas</li>
            </ul>
            <h2>Qui est concerné par l'obligation d'accessibilité ?</h2>
            <ul>
                <li>1 - Les personnes morales de droit public ;</li>
                <li>2 - Les personnes morales de droit privé délégataires d’une mission de service 
                    public, ainsi que celles créées pour satisfaire spécifiquement des besoins 
                    d’intérêt général ayant un caractère autre qu’industriel ou commercial et dont :
                Soit l’activité est financée majoritairement par une ou plusieurs personnes 
                mentionnées aux 1° et 3° et au présent 2° ;
                Soit la gestion est soumise à leur contrôle ;
                Soit plus de la moitié des membres de l’organe d’administration, de direction 
                ou de surveillance sont désignés par elles ;</li>
                <li>3 - Les personnes morales de droit privé constituées par une ou plusieurs 
                    des personnes mentionnées aux 1° et 2° pour satisfaire spécifiquement des 
                    besoins d’intérêt général ayant un caractère autre qu’industriel ou commercial ;</li>
                <li>4 - Les entreprises à compter d’un seuil de chiffre d’affaires de 250 millions 
                    d’euros calculé pour chaque personne sur la base de la moyenne du chiffre 
                    d’affaires annuel réalisé en France des trois derniers exercices comptables 
                    clos antérieurement à l’année considérée.</li>
            </ul>
            <p className="note">
                <span>A noter</span><span>A partir de juin 2025, l'obligation sera étendue à toutes 
                    les entreprises privées de plus de 10 salariés et générant un chiffre d'affaire 
                    supérieur à 2 millions d'euros.</span> 
            </p>
            <h2>Comment est évaluée l'accessibilité ?</h2>
            <p>En France, l'accessibilité d'une application web est évaluée selon les 106 critères 
                du RGAA (Référentiel Général d'Amélioration de l'Accessibilité).</p>
            <p>Un site est considéré accessible quand il atteint un score de 100% de conformité
                avec ces critères.</p>
            <CustomLink frenchText="Lien vers le RGAA" englishText="RGAA link" route="https://accessibilite.numerique.gouv.fr/" />
        </>
    )
}