import image from './dyskredy-preview.png';
import AnimationToggleButton from "./animation-toggle-button.tsx";
import Switch from "./switch.tsx";
import BasicButton from "./basic-button.tsx";
import RadioButtonGroup from "../Layout/RadioButtonsGroup.tsx";
import { fontsRadioButtonsData } from "../Datas/fontsRadioButtonsData.tsx";
import { handleFont } from "../Functions/handleFont.tsx";
import {colorsRadioButtonsData} from "../Datas/colorsRadioButtonsData.tsx";
import { handleMainColor } from "../Functions/handleMainColor.tsx";
import LanguageSelect from "./language-select.tsx";
import SpinButton from "./spin-button.tsx";
import {handleContrastedThemeSwitch} from "../Functions/handleContrastedThemeSwitch.tsx"
import {handleParagraphHeightSwitch} from "../Functions/handleParagraphHeightSwitch.tsx"
import {handleLineHeightSwitch} from "../Functions/handleLineHeightSwitch.tsx"
import {handleWordSpacingSwitch} from "../Functions/handleWordSpacingSwitch.tsx"
import {handleLetterSpacingSwitch} from "../Functions/handleLetterSpacingSwitch.tsx"
import { handleKeyDown } from "../Functions/fontSizeSpinButton/handleKeyDown.tsx";
import {increase} from "../Functions/fontSizeSpinButton/increase.tsx";
import {decrease} from "../Functions/fontSizeSpinButton/decrease.tsx";
import {setFontSize} from "../Functions/fontSizeSpinButton/setFontSize.tsx";
import AccessibilityAnalysisIndicator from "./accessibility-analysis-indicator.tsx";
import SearchBar from "./search-bar.tsx";
import BurgerMenuButton from "./burger-menu-button.tsx";
import AccessibilitySettingsButton from "./accessibility-settings-button.tsx";
import MainLink from "./main-link.tsx";
import BasicPicture from "./basic-picture.tsx";
import MainTitle from './main-title.tsx';

export default function Components(): React.JSX.Element {

    return(
        <div className="components-layout">
            <div className="components-layout_animation-toggle-buttons-container">
                <AnimationToggleButton />
            </div>
            <div className="components-layout_switches-container">
                <Switch name="contrasted-theme" frenchLabel="Thème contrasté" englishLabel="Contrasted theme" onSwitchFunction={handleContrastedThemeSwitch} />
            </div>
            <div className="components-layout_switches-container">
                <Switch name="paragraphHeight" frenchLabel="Espacements entre paragraphes renforcés" englishLabel="Increased paragraph height" onSwitchFunction={handleParagraphHeightSwitch} />
            </div>
            <div className="components-layout_switches-container">
                <Switch name="lineHeight" frenchLabel="Espacements entre lignes renforcés" englishLabel="Increased line height" onSwitchFunction={handleLineHeightSwitch} />
            </div>
            <div className="components-layout_switches-container">
                <Switch name="wordSpacing" frenchLabel="Espacements entre mots renforcés" englishLabel="Increased word spacing" onSwitchFunction={handleWordSpacingSwitch} />
            </div>
            <div className="components-layout_switches-container">
                <Switch name="letterSpacing" frenchLabel="Espacements entre lettres renforcés" englishLabel="Increased letter spacing" onSwitchFunction={handleLetterSpacingSwitch} />
            </div>
            <div className="components-layout_radio-buttons">
                <RadioButtonGroup name="color" frenchLegend="Couleur" englishLegend="Color" radioButtonsData={colorsRadioButtonsData} handleChoice={handleMainColor} />
            </div>
            <div className="components-layout_radio-buttons">
                <RadioButtonGroup name="font" frenchLegend="Police" englishLegend="Font" radioButtonsData={fontsRadioButtonsData} handleChoice={handleFont} />
            </div>
            <div className="components-layout_buttons-container">
                <BasicButton frenchText="Bouton basique" englishText="Basic button" />
                <BasicButton frenchText="Bouton basique activé" englishText="Basic button active" disableAbility={true} />
                <BasicButton frenchText="Bouton basique désactivé" englishText="Basic button desactived" disableAbility={true} disabledStatus="true" />
            </div>
            <div className="white-background">
                    <BasicButton frenchText="Bouton sur fond blanc" englishText="Button on white bg" onWhiteBackground={true}  />
                </div>
            <div className="components-layout_radio-buttons">
                <LanguageSelect />
            </div>
            <div className="components-layout_radio-buttons">
                <SpinButton name="fontSize" frenchLabel="Taille de la police" englishLabel="Font size" minValue={100} maxValue={200} defaultValue={100} handleKeyDown={handleKeyDown} increase={increase} decrease={decrease} effectFunction={setFontSize} />
            </div>
            <div className="components-layout_paragraphs">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos consequuntur, pariatur consequatur quo excepturi libero distinctio molestias laborum animi eaque blanditiis, molestiae minima necessitatibus possimus rerum, dolorem a aspernatur error!
                Culpa est reiciendis nam voluptates ut distinctio? Qui ducimus rem aspernatur quibusdam perspiciatis repellat quos, voluptas explicabo eos voluptatum fugiat. Nam unde harum dolore ab corrupti dolores! Ea, praesentium dolor!
                Ipsum pariatur perferendis libero error dolorem fuga voluptates deleniti ut sapiente quasi eius omnis eum ea sint, nulla culpa exercitationem eos itaque, deserunt dolorum modi fugiat. Odio eius vel pariatur.
                Impedit repudiandae, ad facere natus neque atque, fugiat praesentium quasi eius tenetur laudantium odit nobis ipsa sequi, deserunt adipisci facilis quos fuga corrupti. Dolorum vitae corrupti laudantium quo nihil tempore.
                Voluptatem consequuntur nisi facilis culpa quidem ipsam ad quo vero repellendus sequi, dolore dicta, delectus quibusdam cum? Saepe ullam eveniet aliquid soluta, ab, tempore dolorum voluptatum doloremque aut dolores alias!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi commodi, quasi doloremque similique vitae qui veritatis repellendus soluta eum. Saepe iure laudantium consequatur sed dignissimos, vel recusandae nam veniam quas.
                Quisquam qui aperiam labore nam atque consectetur id provident dolor voluptatum delectus accusantium ipsam natus, ipsum excepturi nemo ut magni distinctio consequuntur perferendis quo odio. Optio ducimus corrupti facere nulla.
                Et nihil distinctio accusantium, doloribus, quam atque eligendi iure ea vel esse suscipit illum aut modi ut voluptatem consectetur alias velit natus corrupti aperiam tenetur ex minima iste eum. Mollitia.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia aliquam, itaque, ipsa mollitia doloremque cum suscipit exercitationem, cupiditate omnis consequatur vero eum voluptates! Voluptates asperiores assumenda beatae fugit unde voluptatem.
                Incidunt dolorem voluptatibus at, vero, quidem fuga ea hic perferendis quae modi nostrum ex necessitatibus eius id odio. Neque minus delectus incidunt atque voluptatibus, labore porro voluptatem aspernatur illo tempore.</p>
            </div>
            <div className="components-layout_radio-buttons">
                <AccessibilityAnalysisIndicator />
            </div>
            <div className="components-layout_radio-buttons">
                <SearchBar />
            </div>
            <div className="components-layout_radio-buttons">
                <BurgerMenuButton />
            </div>
            <div className="components-layout_radio-buttons">
                <AccessibilitySettingsButton />
            </div>
            <div className="components-layout_radio-buttons">
                <MainLink frenchText="lien principal" englishText="main link" route="../" />
            </div>
            <div className="components-layout_pictures">
                <BasicPicture image={image} frenchAlt="très beau site" englishAlt="beautiful website" />
            </div>
            <div className="components-layout_buttons-container">
                <MainTitle frenchText="titre principal" englishText="main title" />
                <MainTitle frenchText="titre accueil" englishText="home title" home={true} />
            </div>
        </div>
    )
}