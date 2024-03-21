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
            <Carousel pictures={pictures} />
        </div>
    )
}