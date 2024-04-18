import { useContext } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import FormMainMessage from "../Components/formMainMessage.tsx";
import BasicButton from "../Components/basic-button.tsx";

export default function ContactForm(): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const sendMail = ()=> {
        //display temporary message

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
        }
        
        let mailData = {
            userMail : replaceSpecialChars("adressemail@gmail.com"),
            subject: replaceSpecialChars("sujet très intéressant"),
            messageContent: replaceSpecialChars("message très intéressant")
        };

        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mailData)
        };

        fetch('http://localhost:4000/send_mail',options)
        .then(res => {
            console.log("send mail")
            // this.temporaryMessage?.classList.remove('display');
            // if(res.ok) {
            //     this.setSuccessForm();
            // } else {
            //     this.setFailForm();
            // };
        })
        .catch(err => {
            console.log("err : ",err)
            // this.temporaryMessage?.classList.remove('display');
            // this.setFailForm();
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
                <span className="invalid-field-alert" id="mail-invalid-alert">
                    {
                        language === "french" ?
                            "Mail : format incorrect (exemple : jane.doe@gmail.com)"
                            :
                            "Mail : incorrect format (example: jane.doe@gmail.com"
                    }
                </span>
                <input type="email" id="mail" placeholder={language === "french" ? "Exemple : nom.prénom@gmail.com" : "Example : first-name.last-name@gmail.com"}
                    name="email" autoComplete="email" required />
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
                <span className="invalid-field-alert" id="empty-mobject-invalid-alert">
                    {
                        language === "french" ?
                            "Objet : champ vide. Veuillez indiquer un objet."
                            :
                            "Subject : empty field. Please indicate a subject."
                    }
                </span>
                <input type="text" id="subject" maxLength={50} name="subject"
                    placeholder={language === "french" ? "Sujet du message" : "Subject of the message"} />
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
                <span className="invalid-field-alert" id="empty-message-invalid-alert">
                    {
                        language === "french" ?
                            "Message : champ vide. Veuillez indiquer un message."
                            :
                            "Message : empty field. Please write a message."
                    }
                </span>
                <textarea id="messageContent" maxLength={500} name="messageContent" 
                    placeholder={language === "french" ? "Message à envoyer..." : "Message to send..."} required></textarea>
            </p>
            <BasicButton frenchText="Envoyer le message" englishText="Send the message" 
                onClickFunction={sendMail}/>
 

            
            <div className="contact-form_status-box">
                <FormMainMessage role="alert" frenchText="Veuillez corriger les champs invalides svp." 
                    englishText="Please fix invalid fields." />
                <FormMainMessage role="alert" frenchText="Une erreur s'est produite, veuillez réessayer svp." 
                    englishText="An error occured, please try again." />
                <FormMainMessage role="alert" frenchText="Veuillez corriger les champs invalides svp." 
                    englishText="Please fix invalid fields." />
                <FormMainMessage frenchText="Message en cours d'envoi..." 
                    englishText="Sending message..." />
                <FormMainMessage role="success" frenchText="Votre message a été envoyé avec succès !" 
                    englishText="Your message has been successfully sent !" />
            </div>
        </form>
    )
}