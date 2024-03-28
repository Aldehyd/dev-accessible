import AnimationToggleButton from "../Components/animation-toggle-button.tsx";
import LanguageSelect from "../Components/language-select.tsx";
import Switch from "../Components/switch.tsx";
import RadioButtonGroup from "../Layout/RadioButtonsGroup.tsx";
import { handleContrastedThemeSwitch } from "../Functions/handleContrastedThemeSwitch.tsx";
import { colorsRadioButtonsData } from "../Datas/colorsRadioButtonsData.tsx";
import { handleMainColor } from "../Functions/handleMainColor.tsx";
import CVComponent from "../Layout/cvComponent.tsx";

export default function CV(): React.JSX.Element {
    return (
        <>
            <header>
                <AnimationToggleButton />
                <LanguageSelect />
                <Switch name="contrasted-theme" frenchLabel="Thème contrasté" englishLabel="Contrasted theme" onSwitchFunction={handleContrastedThemeSwitch} />
                <RadioButtonGroup name="color" frenchLegend="Couleur" englishLegend="Color" radioButtonsData={colorsRadioButtonsData} handleChoice={handleMainColor} />
            </header>
                
            <main className="cv">
                <CVComponent />
            </main>
        </>
    )
}