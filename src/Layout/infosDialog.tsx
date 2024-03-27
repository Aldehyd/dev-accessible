import {useContext} from 'react';
import CloseButton from "../Components/close-button.tsx";
import LanguageContext from "../Contexts/language-context.tsx";

interface InfosDialogPropsInterface {
    skill: any,
    type: string,
    setDisplayInfoDialog: (display: boolean)=>void
};

export default function InfosDialog({skill,type,setDisplayInfoDialog}: InfosDialogPropsInterface): React.JSX.Element {
    
    const {language} = useContext(LanguageContext);

    return (
        <div ref={infoDialog} style={{top:dialogVerticalPosition,left:dialogLeftPosition}} className="infos-dialog" role='dialog' aria-labelledby='dialog-title'>
                <CloseButton onClickFunction={()=> setDisplayInfoDialog(false)} />
                <div ref={infoDialogTop} className="infos-dialog_top">
                </div>
                <div ref={centerDialog} className="infos-dialog_center">
                    <div ref={dialogContent} className='infos-dialog_content-container'>
                        <div className="infos-dialog_content">
                            <h3 id='dialog-title'>{language === 'french' ? skill.frenchTitle : skill.englishTitle}</h3>
                            <p>{language === 'french' ? skill.frenchDescription : skill.englishDescription}</p>
                            <ul className="infos-dialog_list">
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