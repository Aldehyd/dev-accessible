import { useContext, useRef, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import FormMainMessage from "../Components/formMainMessage.tsx";
import BasicButton from "../Components/basic-button.tsx";
import MessageInterface from "../Interfaces/messageInterface.tsx";
import FormStatusInterface from "../Interfaces/formStatusInterface.tsx";

export default function ContactForm(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const mailInput = useRef(null);

    const [message,setMessage] = useState<MessageInterface>({mail: "",subject: "",body: ""});
    const [status,setStatus] = useState<FormStatusInterface>({invalid: {mail:false,subject:false,body:false}, sending: false,error: false,sent: false})

    const handleChange = (property,e) => {
        setMessage({...message, [property]: e.target.value})
    };

    const checkFields = ()=> {

        let temporaryInvalid = {
            mail: false,
            subject: false,
            body: false
        };

        if(message.mail.length === 0 || mailInput?.current?.matches("input:invalid") || message.subject.length === 0 || message.body.length === 0) {
            if(message.mail.length === 0 || mailInput?.current?.matches("input:invalid")) { 
                temporaryInvalid.mail = true;
            } else {
                temporaryInvalid.mail = false;
            };
            if(message.subject.length === 0) {
                temporaryInvalid.subject = true;
            } else {
                temporaryInvalid.subject = false;
            };
            if(message.body.length === 0) {
                temporaryInvalid.body = true;
            } else {
                temporaryInvalid.body = false;
            };
            setStatus({sending: false, error: false, sent: false, invalid: temporaryInvalid});
        } else {
            setStatus({sending: false, error: false, sent: false, invalid: {mail: false, subject: false,body: false}});
            sendMail();
        };
    };

    const sendMail = ()=> {
        setStatus({invalid: {mail:false,subject:false,body:false}, sending: true,error: false,sent: false});
        // encode fields values for security
        const replaceSpecialChars = (text: string | undefined) => {
            interface mapInterface {
                [key: string]: string;
            }
            const map: mapInterface = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text?.replace(/[&<>"']/g, function(m) { return map[m]; });
        };
        
        let mailData = {
            userMail : replaceSpecialChars(message.mail),
            subject: replaceSpecialChars(message.subject),
            messageContent: replaceSpecialChars(message.body)
        };

        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mailData)
        };

        fetch('/send_mail',options)
        .then(res => {
            if(res.ok) {
                setStatus({invalid: {mail:false,subject:false,body:false}, sending: false,error: false,sent: true});
                setMessage({mail: "", subject: "", body:""});
            } else {
                setStatus({invalid: {mail:false,subject:false,body:false}, sending: false,error: true,sent: false});
            };
        })
        .catch(err => {
            setStatus({invalid: {mail:false,subject:false,body:false}, sending: false,error: true,sent: false});
        })
    };

    return (
        <form className="contact-form" method="post" action="/send_mail" onSubmit={e => e.preventDefault()}>
            <p className="contact-form_required-fields-mention">
                {
                    language === "french" ?
                        "Tous les champs sont obligatoires."
                        :
                        "All the fields must be completed."
                }
            </p>
            <p className="contact-form_line contact-form_line--mail">
                <label htmlFor="mail">
                    {
                        language === "french" ?
                            "Adresse mail : (Format attendu : adresse@domaine.extension)"
                            :
                            "Mail : (Expected format : adress@domain.extension)"
                    }
                </label>
                {
                    status.invalid.mail &&
                        <span className="invalid-field-alert" id="mail-invalid-alert">
                            {
                                language === "french" ?
                                    "Mail : format incorrect (exemple : jane.doe@gmail.com)"
                                    :
                                    "Mail : incorrect format (example: jane.doe@gmail.com"
                            }
                        </span>
                }
                <input ref={mailInput} type="email" id="mail" placeholder={language === "french" ? "Exemple : nom.prénom@gmail.com" : "Example : first-name.last-name@gmail.com"}
                    name="email" autoComplete="email" onChange={e => handleChange("mail",e)} value={message.mail} 
                    onInvalid={e => e.preventDefault()} required />
            </p>
            <p className="contact-form_line contact-form_line--mail">
                <label htmlFor="subject">
                    {
                        language === "french" ?
                            "Objet : (maximum 50 caractères)"
                            :
                            "Subject : (maximum 50 characters)"
                    }
                </label>
                {
                    status.invalid.subject &&
                        <span className="invalid-field-alert" id="empty-mobject-invalid-alert">
                            {
                                language === "french" ?
                                    "Objet : champ vide. Veuillez indiquer un objet."
                                    :
                                    "Subject : empty field. Please indicate a subject."
                            }
                        </span>
                }
                <input type="text" id="subject" maxLength={50} name="subject" placeholder={language === "french" ? "Sujet du message" : "Subject of the message"}
                    onChange={e => handleChange("subject",e)} value={message.subject} 
                    onInvalid={e => e.preventDefault()} required />
            </p>
            <p className="contact-form_line">
                <label htmlFor="messageContent">
                    {
                        language === "french" ?
                            "Message : (maximum 500 caractères)"
                            :
                            "Message : (maximum 500 characters"
                    }
                </label>
                {
                    status.invalid.body &&
                        <span className="invalid-field-alert" id="empty-message-invalid-alert">
                            {
                                language === "french" ?
                                    "Message : champ vide. Veuillez indiquer un message."
                                    :
                                    "Message : empty field. Please write a message."
                            }
                        </span>
                }
                <textarea id="messageContent" maxLength={500} name="messageContent" 
                    placeholder={language === "french" ? "Message à envoyer..." : "Message to send..."} 
                    onChange={e => handleChange("body",e)} value={message.body}
                    onInvalid={e => e.preventDefault()} required></textarea>
            </p>
            <BasicButton frenchText="Envoyer le message" englishText="Send the message" 
                onClickFunction={checkFields}/>
 

            {
                (status.error || status.invalid.mail || status.invalid.subject || status.invalid.body || status.sending || status.sent) &&
                    <div className="contact-form_status-box">
                        {
                            status.error &&
                                <FormMainMessage role="alert" frenchText="Une erreur s'est produite, veuillez réessayer svp." 
                                englishText="An error occured, please try again." />
                        }
                        {
                            (status.invalid.mail || status.invalid.subject || status.invalid.body) &&
                                <FormMainMessage role="alert" frenchText="Veuillez corriger les champs invalides svp." 
                                englishText="Please fix invalid fields." />
                        }
                        {
                            status.sending &&
                                <FormMainMessage frenchText="Message en cours d'envoi..." 
                                    englishText="Sending message..." />
                        }
                        {
                            status.sent && 
                                <FormMainMessage role="success" frenchText="Votre message a été envoyé avec succès !" 
                                    englishText="Your message has been successfully sent !" />
                        }
                    </div>
            }
        </form>
    )
}