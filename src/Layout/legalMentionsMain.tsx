import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";


export default function LegalMentionsMain(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    return (
        <>
            <h2>Identification</h2>
            <ul>
                <li>Identité : LABAT Hugues EI, 2 bd Vauban 66210 Mont-Louis</li>
                <li>Numéro d'immatriculation : 978328334</li>
                <li>Mail : contact@dev-accessible.com</li>
                <li>Hébergeur du site : HOSTINGER INTERNATIONAL LTD, 61 Lordou Vironos Street, 
                    6023 Larnaca, Chypre, https://www.hostinger.fr/contact.</li>
            </ul>
            <h2>Conditions Générales de Vente</h2>
            <p>Entrée en vigueur : 1er avril 2024</p>
            <h3>1. Objet</h3>
            <p>La société LABAT Hugues EI (ci-après : la « Société ») est une société de développement 
                web qui propose à ses clients professionnels ou particuliers diverses prestations de 
                type création de sites internet, hébergement de sites internet, prises de vue 
                (photos et vidéos), réalisation de logos et motion design (ci-après : les « Services »).</p>
            <p>Les présentes conditions générales s’appliquent sans restriction ni réserve à toute 
                commande de Services auprès de la Société.</p>
            <p>Elles ont pour objet de définir les modalités et conditions de fourniture des Services 
                au bénéficedu client identifié dans le(s) devis visé(s) à l’article 2 (ci-après : le 
                « Client »). Elles constituent, avec le(s) devis (ci-après : le « Devis »), un 
                ensemble contractuel indissociable (ci-après : le « Contrat »). En cas de 
                contradiction, les dispositions du (des) Devis prévalent sur les présentes conditions 
                générales. En cas de contradiction entre différents Devis, le document le
                plus récent prévaut sur les plus anciens.</p>
            <h3>2. Commande des Services et acceptation des conditions générales</h3>
            <p>Les Services peuvent être commandés par email à l'adresse: contact@dev-accessible.com. 
                La Société adressera au Client un récapitulatif de la commande de Services ainsi que
                 le prix correspondant (ci-après le « Devis »).</p>
            <p>Sauf mention contraire dans le Devis, celui-ci constitue une offre de vente valable 
                pendant 1(un) mois calendaire à compter de son envoi. A défaut de validation par le 
                Client dans ce délai, l’offre de vente sera caduque. Le Client qui souhaite accepter 
                l’offre doit ainsi valider le Devis dans le délai ci-dessus par tout moyen écrit utile. 
                Cette validation emporte acceptation des présentes conditions générales.</p>
            <p>L’annexe au Devis, si applicable, détaillera la proposition commerciale 
                d’accompagnement conformément aux modalités convenues entre les parties.</p>
            <h3>3. Description des Services</h3>
            <h4>3.1. Création d'un site internet</h4>
            <p>Les Services fournis par la Société sont intégralement détaillés dans le Devis et ses
                 éventuelles annexes.</p>
            <p>Les prestations relatives à la création, la maintenance ou l’hébergement de site 
                internet sont plus précisément détaillées dans le Devis correspondant.</p>
            <p>Le Devis et ses annexes préciseront les modalités de fourniture et de livraison des 
                prestations, ce que le Client reconnaît et accepte.</p>
            <p>La livraison du site internet ne doit pas être confondue avec sa mise en ligne 
                effective, laquelle dépend de la collaboration et la validation effective du Client.</p>
            <p>La Société pourra s’exonérer de sa responsabilité en cas d’absence de collaboration, 
                faute, négligence du Client ou encore en cas de force majeure.</p>
            <p>Il appartient au Client de porter à la connaissance de la Société, dès la signature du 
                Devis, toutes les informations relatives à ses besoins. Postérieurement à l’émission 
                du Devis, le Client ne pourra pas revenir sur ses choix et/ou faire évoluer la portée
                 des Services sans l’accord écrit de la Société.</p>
            <p>A compter de la livraison d’un site internet, le Client disposera d’un délai ferme de 
                14 (quatorze) jours pour formuler toute réserve au regard des spécificités convenues 
                dans le Devis. A défaut de réserves formulées dans ce délai, le Client sera considéré 
                comme avoir tacitement accepté la livraison du site.</p>
            <p>En cas de nécessité, la Société se réserve la possibilité de limiter ou de suspendre 
                l’accès au site internet du Client pour procéder à toute opération de maintenance 
                et/ou d’amélioration. Dans cette hypothèse, la Société s’engage à informer à l’avance 
                le Client de ces opérations de maintenance et/ou d’amélioration, dans un délai 
                raisonnable, par tous moyens utiles.</p>
            <h4>3.2. Mise en accessibilité d'un site internet</h4>
            <p>Si effectivement souscrite par le Client, la Société s'engage à rendre accessible le 
                site concerné, c'est à dire à rendre le site conforme au RGAA (Référentiel Général 
                d'Amélioration de l'Accessibilité) dans sa version effective à la date de livraison 
                du site internet ou de réalisation de la prestation.</p>
            <p>La conformité au RGAA s'entend comme la conformité à l'intégralité des critères fixés 
                par le référentiel.</p>
            <p>Certains critères du RGAA étant sujets à interprétation, des évaluations conduites par 
                différents prestataires sont susceptibles d'aboutir à des taux de conformité différents. 
                A ce titre, la Société ne peut garantir un taux de conformité de 100% dans le cadre 
                d'une évaluation menée par un prestataire tiers.</p>
            <p>La société s'engage néanmoins à assurer un taux de conformité maximal au regard de 
                l'état de l'art et de la marge d'interprétation des critères.</p>
            <p>La mise en accessibilité d'un site internet ne doit pas être confondue avec 
                l'évaluation de l'accessibilité d'un site, les deux constituant des prestations 
                séparées.</p>
            <p>La souscription par le Client d'une mise en accessibilité d'un site internet ne vaut 
                pas engagement de la part de la Société à produire une évaluation de l'accessibilité
                 du site concerné.</p>
            <h4>3.3. Evaluation de l'accessibilité d'un site internet</h4>
            <p>L'évaluation de l'accessibilité d'un site internet ne doit pas être confondue avec 
                la mise en accessibilité d'un site, les deux constituant des prestations séparées.</p>
            <p>Si effectivement souscrite par le Client, l'évaluation d'accessibilité conduira 
                nécessairement à la production d'une déclaration d'accessibilité, permettant d'attester auprès des autorités compétentes
                de la conformité du site internet à la réglementation en vigueur.</p>
            <p>Cette déclaration respectera la forme fixée par la réglementation et sera intégré au 
                site internet via une page dédiée.</p>
            <p>En souscrivant à cette prestation, le Client reconnaît être informé de ses obligations 
                légales concernant la déclaration d'accessibilité figurant sur son site internet, 
                lesquelles sont :</p>
            <ul className="styled-list">
                <li>réalisation d'une nouvelle évaluation d'accessibilité donnant lieu à une mise à 
                    jour de la  déclaration d'accessibilité 18 (dix-huit) mois après la date de 
                    publication d'une nouvelle version du Référentiel Général d'Amélioration de 
                    l'Accessibilité</li>
                <li>réalisation d'une nouvelle évaluation d'accessibilité donnant lieu à une mise à 
                    jour de la déclaration d'accessibilité en cas de modification substantielle ou de 
                    refonte du site concené</li>
                <li>réalisation d'une nouvelle évaluation d'accessibilité donnant lieu à une mise à 
                    jour de la déclaration d'accessibilité 3 (trois) ans après la date de publication 
                    de la déclaration</li>
            </ul>
            <p>Le Client reconnaît être informé que la souscription à une prestation d'évaluation de 
                l'accessibilité d'un site internet n'implique en aucun cas la mise à jour de la 
                déclaration si les critères cités précédemment venaient à être remplis.</p>
            <p>Le cas échéant, le site internet devra faire l'objet d'une nouvelle évaluation de 
                l'accessibilité, laquelle constituera une prestation distincte entraînant l'émission 
                d'un nouveau devis.</p>
            <h4>3.4. Hébergement</h4>
            <p>Si effectivement souscrit par le Client, la Société s’engage à assurer, dans les termes 
                d’une obligation de moyens, l’hébergement du site internet du Client conformément 
                aux usages de la profession et à l’état de l’art, par un prestataire d’hébergement
                professionnel, exerçant son activité conformément aux usages de la profession et 
                à l’état de l’art.</p>
            <p>Dans ce cadre, la Société s’engage à fournir au Client des capacités de stockage et de
            traitement suffisantes dans le cadre des Services, conformément aux usages de la 
            profession et à l’état de l’art.</p>
            <p>La Société s’engage à mettre en œuvre l’ensemble des moyens techniques, conformes à 
                l’état de l’art, nécessaires pour assurer la sécurité et l’accès aux Services, portant 
                sur la protection et la surveillance des infrastructures, le contrôle de l’accès 
                physique et/ou immatériel auxdites infrastructures, ainsi que sur la mise en œuvre 
                des mesures de détection, de prévention et de récupération pour protéger les serveurs 
                d’actes malveillants.</p>
            <p>La Société s’engage également à prendre toutes précautions utiles, au regard de la 
                nature des données et des risques présentés par les traitements automatisés de données 
                mis en œuvre pour les besoins des Services, pour préserver la sécurité des données, et 
                notamment empêcher qu’elles soient déformées, endommagées ou que des tiers non 
                autorisés y aient accès.</p>
            <p>En cas de dysfonctionnement ou de panne, la Société fera ses meilleurs efforts pour 
                remettre en ligne, sous 72H, le site internet du Client. A ce titre, la Société 
                utilisera la dernière sauvegarde connue et viable.</p>
            <p>Si le Client n’a pas souscrit à l’hébergement du site par la Société, celui-ci sera 
                responsable du site internet ainsi livré et la Société n’assurera pas de sauvegarde 
                ou de maintenance de sécurité.</p>
            <p>Dans ce cas, il sera de la responsabilité du Client de fournir à la Société les codes 
                d’accès relatifs à l’hébergement tiers souscrit (et au nom de domaine) afin de 
                permettre à la Société de réaliser les Services. A défaut, la Société ne sera pas en 
                mesure de réaliser les Services, ce que le Client reconnaît et accepte.</p>
            <h4>3.5. Maintenance corrective</h4>
            <p>Dans le cas d'une création de site internet, la Société s’engage, pendant une durée de 
                6 (six) mois à compter de la date de mise de livraison du site, à corriger les 
                anomalies relevées sur le site internet du Client, entendues comme un bogue ou 
                dysfonctionnement de celui-ci (ci-après : les « Anomalies »).</p>
            <p>Les Anomalies se répartissent en trois catégories :</p>
            <dl>
                <dt>« Anomalie Majeure » :</dt>
                <dd>Anomalie rendant impossible l’utilisation totale du site internet ;</dd>
                <dt>« Anomalie Moyenne » :</dt>
                <dd>Anomalie diminuant l’utilisation du site internet en empêchant l’utilisation de 
                    certaines fonctionnalités essentielles ;</dd>
                <dt>« Anomalie Mineure » :</dt>
                <dd>Anomalie mettant le Client dans l’impossibilité d’utiliser une ou plusieurs 
                    fonctionnalités non essentielles du site internet.</dd>
            </dl>
            <p>Le Client pourra remonter à la Société, par tous moyens convenus entre les Parties, 
                toutes les Anomalies en s’efforçant de donner le maximum d’informations, notamment les 
                difficultés rencontrées et les circonstances dans lesquelles elles sont intervenues, 
                de nature à permettre à la Société de caractériser l’incident. La réception de cette 
                notification vaut signalement d’une Anomalie.</p>
            <p>La Société procèdera alors au diagnostic de l’Anomalie, en vérifiant notamment si elle 
                a pour origine le site internet et, le cas échéant, procédera à la qualification de 
                l’Anomalie en Anomalie Majeure, Moyenne ou Mineure. Le Prestataire informera le Client 
                par tous moyens des résultats de ce diagnostic dans les meilleurs délais (ci-après : 
                la « Date du Diagnostic »).</p>
            <p>S’il s’avère que l’Anomalie a pour origine le site internet, la Société s’engage 
                à mobiliser les moyens nécessaires pour la corriger dans les délais suivants :</p>
            <ul className="styled-list">
                <li>Anomalie Majeure : dans les 48 heures suivant la Date du Diagnostic ;</li>
                <li>Anomalie Moyenne : dans les 10 jours suivant la Date du Diagnostic ;</li>
                <li>Anomalie Mineure : dans les 30 jours suivant la Date du Diagnostic.</li>
            </ul>
            <p>Ces délais s’effectuent dans le cadre des plages d’intervention de la Société, à 
                savoir entre 9H et 18H pendant les jours ouvrés. Un jour ouvré s’entend d’une période 
                ininterrompue de 9 (neuf) heures, du lundi au vendredi, entre 9H et 18H.</p>
            <p>Une fois l’Anomalie définitivement corrigée, la Société adressera au Client un compte 
                rendu écrit de son intervention, par tous moyens. La date d’envoi de ce compte rendu 
                constitue sa date de fin de l’intervention.</p>
            <p>Par ailleurs, il est rappelé que la responsabilité de la Société ne saurait en aucun 
                cas être engagée en cas de perte de données ou d’informations au cours des opérations
                 de maintenance et/ou d’évolution, sauf fautes directement et strictement imputables 
                 à la Société.</p>
            <p>Il appartient ainsi au Client de mettre en œuvre toutes les mesures nécessaires pour 
                assurer la sauvegarde et l’intégrité de ses propres données.</p>
            <h4>3.6. Autres Services</h4>
            <p>Selon les termes du Devis, la Société peut également assurer d’autres prestations de 
                type communication visuelle (logo, maquettes, photos, vidéos, motion design).</p>
            <h3>4. Durée des Services</h3>
            <p>Selon les Services souscrits, les tarifs sont reproduits dans le Devis correspondant.</p>
            <p>Pour les prestations d’hébergement, les services peuvent être souscrits sous forme 
                d’abonnement.</p>
            <p>Le cas échéant, l’abonnement débute au jour de la signature du Devis, sous réserve du 
                paiement du prix conformément à l’article « Conditions financières », pour une durée 
                initiale indiquée sur le Devis (ci-après : la « Période Initiale »).</p>
            <p>Par défaut et en l’absence d’indication contraire dans le Devis, la Période Initiale 
                de l’abonnement est d’un (1) an.</p>
            <p>Il se renouvelle ensuite tacitement, pour des périodes successives de même durée que 
                la Période Initiale (ci-après désignées, avec la Période Initiale, les « Périodes »), 
                de date à date, sauf mention contraire dans le devis ou dénonciation effectuée par la 
                Société ou par le Client au plus tard trois (3) mois avant la fin de la Période 
                concernée.</p>
            <h3>5. Conditions financières</h3>
            <h4>5.1.Prix des Services</h4>
            <p>Les prix des Services sont indiqués sur le Devis.</p>
            <p>Sauf mention contraire, ils sont exprimés en Euros et hors taxes.</p>
            <p>La Société se réserve le droit, à sa libre discrétion et selon des modalités dont elle 
                sera seule juge, de proposer des offres promotionnelles, des réductions de prix ou 
                des forfaits.</p>
            <h4>5.2.Modalités de paiement des Services</h4>
            <p>Sauf mention contraire dans le Devis, le Service de création d'un site internet est 
                payable comme suit :</p>
            <p>- 30% d'acompte au moment de la signature du devis</p>
            <p>- 70% restants à la date de livraison du site</p>
            <p>Pour rappel, la mise en ligne du site constitue une prestation distincte facturée à part.</p>
            <p>Sauf mention contraire dans le Devis, les autres Services sont payables à leurs dates de 
                livraison.</p>
            <p>Les services d’hébergement sont facturés au prix indiqué sur le Devis et font 
                l’objet d’un règlement en amont de la prestation souhaitée.</p>
            <p>Le paiement du prix des Services sur abonnement s’effectue par virement bancaire ou 
                prélèvement automatique.</p>
            <p>Le Client garantit à la Société qu'il dispose des autorisations nécessaires pour 
                utiliser le mode de paiement choisi. Il s’engage à prendre les mesures nécessaires 
                afin que le prélèvement automatique du prix du Forfait puisse être effectué.</p>
            <h3>6. Droit de rétractation</h3>
            <p>Dans le cas où :</p>
            <p>- le Client est un particulier,</p>
            <p>- le Client est un professionnel, qu’il remplit les conditions prévues à l’article L221-3 du
            Code de la consommation et que la souscription des Services par le Client remplit les
            critères d’un contrat hors établissement au sens de l’article L221-1 du Code de la
            consommation,</p>
            <p>le Client dispose d’un droit de rétractation, pendant un délai de 14 (quatorze) jours 
                à compter de la validation du Devis.</p>
            <p>Il peut exercer ce droit en adressant à la Société par mail à contact@dev-accessible.com 
                avant l’expiration du délai susvisé, une déclaration dénuée d’ambiguïté, exprimant sa 
                volonté de se rétracter.
            Si le Client a demandé à ce que les Services commencent avant l’expiration du délai de
            rétractation, en cochant la case à cet effet dans le Devis, il peut exercer son droit de 
            rétractationdans le délai et selon les modalités susvisées. Il sera dans ce cas redevable 
            envers la Société du prix des Services, calculé au prorata pour la durée écoulée jusqu’à 
            la communication de sa décision de se rétracter à la Société.</p>
            <h3>7. Obligations et responsabilité du Client</h3>
            <p>Sans préjudice des autres obligations prévues au Contrat, le Client s’engage à respecter 
                les obligations qui suivent :</p>
            <p>Le Client s’engage à collaborer activement et étroitement avec la Société, 
                    notamment dans le cadre de la réalisation d’un site internet et dans la définition 
                    de ses besoins. A ce titre, il lui appartient d’exprimer ses besoins par tous 
                    moyens afin de les porter effectivement à la connaissance de la Société lors de 
                    la conclusion des présentes.</p>
            <p>Le Client s’engage à fournir à la Société tous les documents, éléments, données et
            informations nécessaires à la réalisation des Services. Plus généralement le Client 
            s’engage à coopérer activement avec la Société en vue de la bonne exécution du Contrat.</p>
            <p>Le Client est seul responsable des documents, éléments, données, informations, 
            images et contenus divers qu’il fournit à la Société. Il garantit à la Société qu’il est 
            habilité à lui fournir ces documents, éléments, données, informations et qu’il
            dispose de tous les droits et autorisations nécessaires à leur exploitation dans le cadre 
            des Services. Il est également seul responsable de leur exactitude, de leur sincérité et 
            de leur exhaustivité.</p>
            <p>A ce titre et si applicable, le Client doit fournir un libre accès aux locaux qui 
                    feront l’objet des Services et à tenir immédiatement informée la Société de tout 
                    évènement de nature à affecter la bonne exécution des Services. En conséquence, le 
                    Client s’engage à mettre à la disposition de la Société les locaux concernés dans 
                    un état tel que la Société ou son personnel puisse exécuter les Services dans des 
                    conditions normales.</p>
            <p>Le Client est seul responsable du respect des lois et règlements applicables à son 
                    activité et notamment du respect des mentions légales éventuellement imposées par 
                    ceux-ci. En conséquence, le Client ne pourra en aucun cas rechercher la 
                    responsabilité ou la garantie de la Société à ce titre.</p>
            <p>Le Client est seul responsable de l’usage qu’il fait des produits ou Services 
                    éventuellement commandés. Il lui appartient de vérifier l’adéquation des produits 
                    à ses besoins spécifiques préalablement à l’achat desdits produits.En conséquence, 
                    le Client reste seul responsable de ses décisions, relations, de son image de
                    marque et de ses communications à l’égard des tiers.</p>
            <p>Il appartient au Client de mettre à jour régulièrement son site internet afin qu’il
                     soit en conformité avec la réglementation applicable (mention légale, 
                     politique de confidentialité, etc.). La responsabilité de la Société ne pourra en 
                     aucun cas être recherchée à ce titre. Il garantit en conséquence à la Société 
                     qu’il dispose de tous les droits et autorisations nécessaires.</p>
            <p>Le client autorise expressément la Société à citer le nom du service web développé 
                    ou hébergé, et ce dans le cadre de sa propre politique de communication. Il accepte
                     également que le nom de la Société ainsi qu'un lien vers son site internet soient 
                     présents sur le site livré et s'engage à les conserver jusqu'à la prochaine
                    refonte du site.</p>
            <p>Le Client déclare avoir reçu de la Société, préalablement à la signature des 
                    présentes, tous conseils, instructions et précisions qui lui sont nécessaires 
                    pour souscrire au présent Contrat en toute connaissance de cause, et qu’il a, 
                    préalablement aux présentes, suffisamment échangé avec la Société pour s’assurer 
                    que le site internet correspond à ses attentes, besoins et contraintes.</p>
            <p>Plus généralement, le Client s’engage à coopérer activement avec la Société et 
                    à l’informer de toutes difficultés liées à ce qui précède.</p>
            <h3>8. Obligations et responsabilité de la Société</h3>
            <p>Sans préjudice des autres obligations prévues au Contrat, la Société s’engage à 
                respecter les obligations qui suivent :</p>
                <p>La Société s’engage à fournir les Services avec diligence et selon les règles de 
                    l’art.</p>
                <p>La Société ne pourra être tenue pour responsable de l'inexécuton ou du retard dans
            l’exécuton des Services du fait de circonstances qui lui sont extérieures ou d'un cas de force
            majeure.</p>
                <p>La Société ne pourra en aucun cas voir sa responsabilité engagée au titre des 
                    sauvegardes de sites internet, notamment en cas d’évènement ou anomalie hors de 
                    son contrôle et ayant donné lieu à une remise en ligne dudit site internet.</p>
                <p>La Société s’engage, dans l’accomplissement des Services, à respecter les lois et
                     règlements en vigueur et à ne pas porter atteinte à l’ordre public.</p>
                <p>La responsabilité suscepible d’être encourue par la Société au titre des
            présentes est expressément limitée aux seuls dommages directs subis par le Client et ne
            pourra excéder le montant total du prix payé par celui-ci au titre des Services concernés
             et tel qu’indiqué dans le Devis.</p>
            <h3>9. Propriété intellectuelle relative aux Services</h3>
            <p>Les droits de propriété intellectuelle afférents aux développements réalisés par la 
                Société en exécution des Services, sont cédés au Client de façon pleine et entière, 
                au fur et à mesure de leur livraison, sous réserve du paiement des Services 
                correspondants dans les conditions définies à l’article « Conditions financières ».</p>
            <p>Cette cession est consentie, à titre exclusif, pour toute la durée légale du droit 
                d’auteur, pour le monde entier et aux fins d’exploitation des développements par 
                reproduction et représentation publique sur tous supports et/ou réseaux et par tous 
                moyens, existants ou à venir, prévisibles ou imprévisibles, sans restriction ni 
                réserve, par le Client ou toute personne de son choix.</p>
            <p>Elle comporte également le droit de traduire, arranger, modifier, transformer, adapter 
                et/ou corriger lesdits Développements, seul ou avec la collaboration d’une tierce 
                personne, de les réutiliser totalement ou partiellement, de les incorporer dans ou 
                fusionner avec tout autre logiciel ou œuvre de l’esprit, ainsi que de transférer à 
                des tiers l’usage ou la propriété de tout ou partie des droits présentement cédés.</p>
            <p>Il est rappelé que le Contrat n'affecte en rien les droits de propriété intellectuelle 
                préexistants de chacune des Parties.</p>
            <p>Les systèmes, logiciels, structures, infrastructures, bases de données, marques, labels,
            certifications et contenus de toute nature exploités par la Société dans le cadre de son activité et
            communiqués au Client en vue de la réalisation des Services sont protégés par tous droits de
            propriété intellectuelle ou droits des producteurs de bases de données en vigueur.</p>
            <p>Tous désassemblages, décompilations, décryptages, extractions, réutilisations, copies et plus
            généralement, tous actes de reproduction, représentation, diffusion et utilisation de l’un
            quelconque de ces éléments préexistants, en tout ou patie, lorsque ces actes ne sont pas rendus
            nécessaires par l’exécution du Contrat, ou qu’ils n’ont pas été préalablement autorisés par la
            Société sont strictement interdits.</p>
            <h3>10. Confidentialité</h3>
            <p>Chaque partie s’engage à garder strictement confidentiels les documents, éléments, données et
            informations de l’autre partie dont elle serait destinataire qui seront expressément identifiés par
            l’autre partie comme étant confidentiels. S’agissant de la Société, les parties conviennent d’ores
            et déjà expressément que cette obligation de confidentialité couvre les données à caractère
            personnel que la Société sera amenée à traiter pour le Client dans le cadre des Services.</p>
            <h3>11. Prise d’effet du contrat</h3>
            <p>Le contrat est réputé conclu à la date de réception par la Société du devis daté, signé, lu et 
                approuvé par le client.</p>
            <p>Sauf mention contraire dans le Devis, les prestations démarrent à l'issue du délai 
                légal de rétractation de 14 (quatorze) jours suite à la signature du Devis.
            </p>
            <p>Sauf mention contraire dans le Devis, dans le cas d'une création de site internet, la 
                prestation démarre à la date de réception par la Société de l'acompte de 30% du montant 
                de ce Service.
            </p>
            <h3>12. Compétence juridique</h3>
            <p>Le présent contrat est régi par la Loi Française.</p>
            <p>Tout litige relatif à l’interprétation ou à l’exécution des présentes conditions générales 
                relève de la compétence exclusive du Tribunal de Commerce de Perpignan (66).</p>
        </>
    )
}