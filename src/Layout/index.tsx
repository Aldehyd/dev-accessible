import Carousel from "./carousel.tsx";
import firstImage from './dyskredy-preview.png';
import secondImage from './guitare-color.JPG';
import thirdImage from './guitare.JPG';
import fourthImage from './wood.JPG';
import fifthImage from './stick.JPG';
import AnimationToggleButton from '../Components/animation-toggle-button.tsx';
import {handleContrastedThemeSwitch} from '../Functions/handleContrastedThemeSwitch.tsx';
import Switch from '../Components/switch.tsx';
import RadioButtonGroup from "./RadioButtonsGroup.tsx";
import { handleMainColor } from "../Functions/handleMainColor.tsx";
import { colorsRadioButtonsData } from "../Datas/colorsRadioButtonsData.tsx";
import LanguageSelect from '../Components/language-select.tsx';
import SpinButton from '../Components/spin-button.tsx';
import {increase} from '../Functions/fontSizeSpinButton/increase.tsx';
import {decrease} from '../Functions/fontSizeSpinButton/decrease.tsx';
import {handleKeyDown} from '../Functions/fontSizeSpinButton/handleKeyDown.tsx';
import {setFontSize} from '../Functions/fontSizeSpinButton/setFontSize.tsx';
import ShortcutModifier from "./shortcutModifier.tsx";
import ShortcutModifiersSection from "./shortcutModifiersSection.tsx";
import VideoPlayer from "./videoPlayer.tsx";

export default function Layouts(): React.JSX.Element {

    const pictures = [
        {
            id: 0,
            element: firstImage,
            frenchAlt: "très beau site",
            englishAlt: "beautiful website"
        },
        {
            id: 1,
            element: secondImage,
            frenchAlt: "guitare couleur",
            englishAlt: "color guitar"
        },
        {
            id: 2,
            element: thirdImage,
            frenchAlt: "guitare",
            englishAlt: "guitar"
        },
        {
            id: 3,
            element: fourthImage,
            frenchAlt: "copeaux",
            englishAlt: "wooden pieces"
        },
        {
            id: 4,
            element: fifthImage,
            frenchAlt: "manche de guitare",
            englishAlt: "guitar stick"
        }
    ];

    return(
        <div className="components-layout">
            <AnimationToggleButton />
            <LanguageSelect />
            <Switch name="contrasted-theme" frenchLabel="Thème contrasté" englishLabel="Contrasted theme" onSwitchFunction={handleContrastedThemeSwitch} />
            <RadioButtonGroup name="color" frenchLegend="Couleur" englishLegend="Color" radioButtonsData={colorsRadioButtonsData} handleChoice={handleMainColor} />
            <SpinButton name="fontSize" frenchLabel="Taille de la police" englishLabel="Font size" minValue={100} maxValue={200} defaultValue={100} handleKeyDown={handleKeyDown} increase={increase} decrease={decrease} effectFunction={setFontSize} />
            <Carousel pictures={pictures} />
            <ShortcutModifiersSection />
            <VideoPlayer video={video} />
        </div>
    )
}