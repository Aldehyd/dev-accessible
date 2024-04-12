import {useContext, useState} from 'react';
import ModalContext from '../Contexts/modal-context.tsx';
import ModalDarkBackground from '../Components/modal-dark-background.tsx';
import AccessibilitySettingsModal from '../Modals/AccessibilitySettingsModal.tsx';
import TopMenu from '../Layout/topMenu.tsx';
import BackLink from '../Components/back-link.tsx';
import MainTitle from '../Components/main-title.tsx';
import MainLink from '../Components/main-link.tsx';
import BottomMenu from '../Layout/bottomMenu.tsx';

export default function Achievments(): React.JSX.Element {

    const {isModalDisplayed} = useContext(ModalContext);
    const [isAccessibilitySettingsModalDisplayed,setIsAccessibilitySettingsModalDisplayed] = useState<boolean>(false);

    return (
        <>
            {isModalDisplayed && <ModalDarkBackground />}
            {isAccessibilitySettingsModalDisplayed && <AccessibilitySettingsModal setDisplay={setIsAccessibilitySettingsModalDisplayed} />}
            <header>
                <TopMenu setAccessibilityModalDisplay={setIsAccessibilitySettingsModalDisplayed} />
            </header>
            <main>
                <BackLink />
                <MainTitle frenchText="Pourquoi l'accessibilité ?" englishText="Why accessibility ?" />
                <h2>Accessibilité numérique :</h2>
                <quote>L’accessibilité numérique consiste à rendre les contenus et services numériques compréhensibles et utilisables par les personnes en situation de handicap.</quote>
                <p>L'accessibilité numérique :</p>
                <ul>
                    <li>permet d'inclure un nombre plus important d'utilisateurs</li>
                    <li>améliore l'expérience de tous les utilisateurs</li>
                    <li>améliore le référencement</li>
                    <li>est une obligation légale dans de nombreux cas</li>
                </ul>
                <MainLink frenchText="Qui est concerné par l'obligation ?" englishText="Who is concerned by obligation ?" route="https://accessibilite.numerique.gouv.fr/obligations/champ-application/" />
                <h2>Référentiel Général d'Amélioration de l'Accessibilité</h2>
                <p>En France, l'accessibilité d'une application web est évaluée selon les 106 critères du RGAA.</p>
                <p>Un site est accessible quand il atteint un score de 100% de conformité.</p>
                <MainLink frenchText="Voir les critères" englishText="See criterias" route="https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/" />
            </main>
            <footer>
                <BottomMenu />
            </footer>
        </>
    )
}