import { achievments } from "../Datas/achievments.tsx";
import AchievmentsMain from "../Layout/achievmentsMain.tsx";
import AnimationToggleButton from "../Components/animation-toggle-button.tsx";
import LanguageSelect from "../Components/language-select.tsx";
import Switch from "../Components/switch.tsx";
import RadioButtonGroup from "../Components/radio-button.tsx";
import {handleContrastedThemeSwitch} from "../Functions/handleContrastedThemeSwitch.tsx";
import {handleMainColor} from "../Functions/handleMainColor.tsx";
import {colorsRadioButtonsData} from "../Datas/colorsRadioButtonsData.tsx";

export default function Achievments(): React.JSX.Element {
    return (
        <>
            <AnimationToggleButton />
            <LanguageSelect />
            <Switch name="contrasted-theme" frenchLabel="Thème contrasté" englishLabel="Contrasted theme" onSwitchFunction={handleContrastedThemeSwitch} />
            <RadioButtonGroup name="color" frenchLegend="Couleur" englishLegend="Color" radioButtonsData={colorsRadioButtonsData} handleChoice={handleMainColor} />
            <AchievmentsMain achievments={achievments} />
        </>
        
    )
}