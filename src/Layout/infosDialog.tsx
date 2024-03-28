import {useContext, useRef, useState, useEffect} from 'react';
import CloseButton from "../Components/close-button.tsx";
import LanguageContext from "../Contexts/language-context.tsx";

interface InfosDialogPropsInterface {
    skill: any,
    type: string,
    setDisplayInfoDialog: (display: boolean)=>void,
    buttonElement: any
};

export default function InfosDialog({skill,type,setDisplayInfoDialog,buttonElement}: InfosDialogPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    const centerDialog = useRef(null);
    const dialogContent = useRef(null);
    const infoDialog = useRef(null);
    const infoDialogTop = useRef(null);
    const infoDialogBottom = useRef(null);

    const [dialogVerticalPosition,setDialogVerticalPosition] = useState(0);
    const [dialogLeftPosition,setDialogLeftPosition] = useState(0);

    const setCenterDialogHeight = ()=> {
        const height = dialogContent.current?.offsetHeight;
        centerDialog.current.style.height = height.toString() + 'px';
    };

    const setDialogPositionFunc = (button)=> {
        const viewportHeight = document.documentElement.clientHeight;
        const dialogHeight = dialogContent.current?.offsetHeight + infoDialogTop.current?.offsetHeight + infoDialogBottom.current?.offsetHeight;
        const buttonTop = button.getBoundingClientRect().top;
        const buttonHeight = button.offsetHeight;
        
        if(buttonTop+buttonHeight/2 > viewportHeight/2) {
            setDialogVerticalPosition(-dialogHeight);
        } else {
            setDialogVerticalPosition(buttonHeight);
        };
    };

    const setDialogLeftPositionFunc = ()=> {
            let viewportWidth = document.documentElement.clientWidth;
            let containerLeft = buttonElement.current.getBoundingClientRect().left;
            let infoDialogRight = infoDialog.current?.getBoundingClientRect().right
            
            if(infoDialogRight < viewportWidth) {
                setDialogLeftPosition(0);
            } else {
                setDialogLeftPosition(viewportWidth - infoDialog.current?.offsetWidth - containerLeft);
            };  
    };

    useEffect(()=> {
        dialogContent.current !== null && setCenterDialogHeight();
        infoDialog.current !== null && setDialogLeftPositionFunc();
        infoDialog.current !== null && setDialogPositionFunc(buttonElement.current);
    });

    return (
        <div ref={infoDialog} style={{top:dialogVerticalPosition,left:dialogLeftPosition}} className="infos-dialog" role='dialog' aria-labelledby='infos-dialog_title'>
                <CloseButton onClickFunction={()=> setDisplayInfoDialog(false)} />
                <div ref={infoDialogTop} className="infos-dialog_top">
                </div>
                <div ref={centerDialog} className="infos-dialog_center">
                    <div ref={dialogContent} className='infos-dialog_content-container'>
                        <div className="infos-dialog_content">
                            <p id='infos-dialog_title' className='infos-dialog_title'>{language === 'french' ? skill.frenchTitle : skill.englishTitle}</p>
                            <p className="infos-dialog_subtitle">{language === 'french' ? skill.frenchDescription : skill.englishDescription}</p>
                            <ul>
                                {
                                type === "technology" && 
                                    <div key={skill.id} className="projects-list_list-item">
                                        <p>{language === "french" ? "Utilisé dans les projets suivants" : "Used in following projects"} :</p>
                                        <ul className="infos-dialog_list">
                                            {skill.projects.map(project => {
                                            return <li key={project.index}>{project}</li>
                                            })}
                                        </ul>
                                    </div>
                                }
                                {
                                    type === "diploma" && skill.list.map(listItem =>
                                        <li key={listItem.id} className="projects-list_list-item">
                                            <dl>
                                                <dt>{language === "french" ? "Titre" : "Title"} :</dt>
                                                <dd>{language === 'french' ? listItem.frenchTitle : listItem.englishTitle}</dd>

                                                <dt>Date :</dt>
                                                <dd>{language === 'french' ? listItem.frenchDate : listItem.englishDate}</dd>

                                                <dt>{language === 'french' ? "Organisme de formation" : "Formation institute"} :</dt>
                                                <dd>{language === "french" ? listItem.frenchInstitute : listItem.englishInstitute}</dd>
                                                
                                                {listItem.score && 
                                                    <>
                                                        <dt>Score :</dt>
                                                        <dd>{listItem.score}</dd>
                                                    </>
                                                }   
                                            </dl>
                                        </li>)
                                }   
                                {
                                    type === "language" && skill.list.map(listItem =>
                                        <li key={listItem.id} className="projects-list_list-item">
                                            <dl>
                                                <dt>{language === "french" ? "Niveau" : "Level"} :</dt>
                                                <dd>{language === 'french' ? listItem.frenchLevel : listItem.englishLevel}</dd>
                                                
                                                {listItem.score && 
                                                    <>
                                                        <dt>Score :</dt>
                                                        <dd>{listItem.score}</dd>
                                                    </>
                                                }   
                                            </dl>
                                        </li>)
                                } 
                            </ul>
                        </div>
                    </div>
                </div>
                <div ref={infoDialogBottom} className="infos-dialog_bottom"></div>
        </div>
    )
}