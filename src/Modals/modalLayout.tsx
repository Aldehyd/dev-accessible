import { useContext,useEffect, useRef } from "react";
import ModalContext from "../Contexts/modal-context.tsx";
import LanguageContext from "../Contexts/language-context.tsx";
import CloseButton from "../Components/close-button.tsx";

interface ModalLayoutPropsInterface {
    setDisplay: (display: boolean)=> void,
    frenchTitle: string,
    englishTitle: string,
    children: any
}

export default function ModalLayout({setDisplay,frenchTitle,englishTitle,children}: ModalLayoutPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);
    const {isModalDisplayed,changeIsModalDisplayed} = useContext(ModalContext);

    const modalTop = useRef(null);
    const modalCenter = useRef(null);
    const modalContent = useRef(null);
    const modalBottom = useRef(null);

    const setCenterDialogHeight = ()=> {
        let height = modalContent.current?.offsetHeight;
        const topHeight = modalTop.current?.offsetHeight;
        const bottomHeight = modalTop.current?.offsetHeight;
        if(height + topHeight + bottomHeight > 0.8*window.innerHeight) {
            height = 0.7*window.innerHeight
        }
        modalCenter.current.style.height = height.toString() + 'px';
    };

    useEffect(()=> {
        changeIsModalDisplayed(true);
        modalCenter.current !== null && setCenterDialogHeight();
        return ()=> changeIsModalDisplayed(false)
    },[]);

    return (
        <div className="modal-layout">
            <div className="modal-layout_top" ref={modalTop}>
                <div className="modal-layout_top-focus-trap"></div>
                <h1 className="modal-layout_title">
                    {language === "french" ? frenchTitle : englishTitle}
                </h1>
                <CloseButton onWhiteBackground={true} onClickFunction={()=> setDisplay(false)}/>
            </div>
            <div className="modal-layout_center" ref={modalCenter}>
                <div className="modal-layout_content" ref={modalContent}>
                    {children}
                </div>
                <div className="modal-layout_bottom-focus-trap"></div>
            </div>
            <div className="modal-layout_bottom" ref={modalBottom}></div>
        </div>
    )
}