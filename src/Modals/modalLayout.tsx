import { useContext,useEffect } from "react";
import ModalContext from "../Contexts/modal-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import CloseButton from "../Components/close-button.tsx";

export default function ModalLayout({children}): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const {isModalDisplayed,changeIsModalDisplayed} = useContext(ModalContext);

    useEffect(()=> {
        changeIsModalDisplayed(true);
        return ()=> changeIsModalDisplayed(false)
    },[]);

    return (
        <div className="modal modal--accessibility-settings">
            <div className="modal_top-focus-trap"></div>
            <CloseButton onClickFunction={()=> changeIsModalDisplayed(false)}/>
            {children}
            <div className="modal_bottom-focus-trap"></div>
        </div>
    )
}