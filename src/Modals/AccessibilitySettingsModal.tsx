import ModalLayout from "./modalLayout.tsx";
import Switch from '../Components/switch.tsx';
import RadioButtons from '../Layout/RadioButtonsGroup.tsx';
import SpinButton from "../Components/spin-button.tsx";
import { handleContrastedThemeSwitch } from "../Functions/handleContrastedThemeSwitch.tsx";
import {setFontSize} from "../Functions/fontSizeSpinButton/setFontSize.tsx";
import {decrease} from "../Functions/fontSizeSpinButton/decrease.tsx";
import {increase} from "../Functions/fontSizeSpinButton/increase.tsx";
import {handleKeyDown} from "../Functions/fontSizeSpinButton/handleKeyDown.tsx";
import { handleFont } from "../Functions/handleFont.tsx";
import {handleParagraphHeightSwitch} from "../Functions/handleParagraphHeightSwitch.tsx";
import {handleLineHeightSwitch} from "../Functions/handleLineHeightSwitch.tsx";
import {handleWordSpacingSwitch} from "../Functions/handleWordSpacingSwitch.tsx";
import {handleLetterSpacingSwitch} from "../Functions/handleLetterSpacingSwitch.tsx"
import { colorsRadioButtonsData } from "../Datas/colorsRadioButtonsData.tsx";
import { fontsRadioButtonsData } from "../Datas/fontsRadioButtonsData.tsx";
import { handleMainColor } from "../Functions/handleMainColor.tsx";
import { useEffect, useState } from "react";
interface AccessibilitySettingsModalPropsInterface {
    setDisplay: (display: boolean)=> void
}

export default function AccessibilitySettingsModal({setDisplay}: AccessibilitySettingsModalPropsInterface): React.JSX.Element {

    const [isColorChoicePossible,setIsColorChoicePossible] = useState<boolean>(true);

    useEffect(()=> {
        if(document.body.classList.contains('contrast')) {
            setIsColorChoicePossible(false);
        } else {
            setIsColorChoicePossible(true);
        };
    },[setIsColorChoicePossible]);

    return (
        <ModalLayout setDisplay={setDisplay} frenchTitle="Réglages d'accessibilité" englishTitle="Accessibility settings">
            <Switch name="contrast" frenchLabel="Mode contrasté" englishLabel="Contrasted mode" onSwitchFunction={handleContrastedThemeSwitch} />
            {isColorChoicePossible && <RadioButtons name="color" frenchLegend="Couleur principale" englishLegend="Main color" radioButtonsData={colorsRadioButtonsData} handleChoice={handleMainColor} />}
            <SpinButton name="fontSize" frenchLabel="Taille de la police" englishLabel="Font size" minValue={100} maxValue={200} defaultValue={100} handleKeyDown={handleKeyDown} increase={increase} decrease={decrease} effectFunction={setFontSize} />
            <RadioButtons name="font" frenchLegend="Police" englishLegend="Font" radioButtonsData={fontsRadioButtonsData} handleChoice={handleFont} />
            <Switch name="paragraphHeight" frenchLabel="Espacements entre paragraphes renforcés" englishLabel="Increased paragraph height" onSwitchFunction={handleParagraphHeightSwitch} />
            <Switch name="lineHeight" frenchLabel="Espacements entre lignes renforcés" englishLabel="Increased line height" onSwitchFunction={handleLineHeightSwitch} />
            <Switch name="wordSpacing" frenchLabel="Espacements entre mots renforcés" englishLabel="Increased word spacing" onSwitchFunction={handleWordSpacingSwitch} />
            <Switch name="letterSpacing" frenchLabel="Espacements entre lettres renforcés" englishLabel="Increased letter spacing" onSwitchFunction={handleLetterSpacingSwitch} />
   
        </ModalLayout>
    )
}