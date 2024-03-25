import AnimationToggleButton from "../Components/animation-toggle-button.tsx";
import LanguageSelect from "../Components/language-select.tsx";
import Switch from "../Components/switch.tsx";
import RadioButtonGroup from "../Components/radio-button.tsx";
import {handleContrastedThemeSwitch} from "../Functions/handleContrastedThemeSwitch.tsx";
import {handleMainColor} from "../Functions/handleMainColor.tsx";
import {colorsRadioButtonsData} from "../Datas/colorsRadioButtonsData.tsx";
import AchievmentDetailsMain from "../Layout/achievmentDetailsMain.tsx";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default function AchievmentDetails(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const {achievment} = useParams();

    return (
        <>
            <AnimationToggleButton />
            <LanguageSelect />
            <Switch name="contrasted-theme" frenchLabel="Thème contrasté" englishLabel="Contrasted theme" onSwitchFunction={handleContrastedThemeSwitch} />
            <RadioButtonGroup name="color" frenchLegend="Couleur" englishLegend="Color" radioButtonsData={colorsRadioButtonsData} handleChoice={handleMainColor} />
            <h1>{achievment}</h1>
            {/* <AchievmentDetailsMain achievments={achievment} /> */}
        </>
        
    )
}