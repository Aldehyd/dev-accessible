import AnimationToggleButton from "./animation-toggle-button.tsx";
import Switch from "./switch.tsx";
import BasicButton from "./basic-button.tsx";
import RadioButtonGroup from "../Layout/RadioButtonsGroup.tsx";
import { fontsRadioButtonsData } from "../Datas/fontsRadioButtonsData.tsx";
import { handleFont } from "../Functions/handleFont.tsx";
import {colorsRadioButtonsData} from "../Datas/colorsRadioButtonsData.tsx";
import { handleMainColor } from "../Functions/handleMainColor.tsx";
import LanguageSelect from "./language-select.tsx";

export default function Components(): React.JSX.Element {
    return(
        <div className="components-layout">
            <div className="components-layout_animation-toggle-buttons-container">
                <AnimationToggleButton />
            </div>
            <div className="components-layout_switches-container">
                <Switch name="contrasted-theme" frenchLabel="Thème contrasté" englishLabel="Contrasted theme" />
            </div>
            <div className="components-layout_radio-buttons">
                <RadioButtonGroup name="color" frenchLegend="Couleur" englishLegend="Color" radioButtonsData={colorsRadioButtonsData} handleChoice={handleMainColor} />
            </div>
            <div className="components-layout_radio-buttons">
                <RadioButtonGroup name="font" frenchLegend="Police" englishLegend="Font" radioButtonsData={fontsRadioButtonsData} handleChoice={handleFont} />
            </div>
            <div className="components-layout_buttons-container">
                <BasicButton text="Bouton basique" />
                <BasicButton text="Bouton basique activé" disableAbility={true} />
                <BasicButton text="Bouton basique désactivé" disableAbility={true} disabledStatus="true" />
            </div>
            <div className="components-layout_radio-buttons">
                <LanguageSelect />
            </div>
        </div>
    )
}