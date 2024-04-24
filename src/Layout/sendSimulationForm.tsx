import { useContext, useRef, useState } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import FormMainMessage from "../Components/formMainMessage.tsx";
import BasicButton from "../Components/basic-button.tsx";
import MessageInterface from "../Interfaces/messageInterface.tsx";
import PricesSimulatorStatusFormStatusInterface from "../Interfaces/pricesSimulatorFormStatusInterface.tsx";

interface SendSimulationFormPropsInterface {
    simulation: any,
}

export default function SendSimulationForm({simulation}: SendSimulationFormPropsInterface): React.JSX.Element {

    const {language} = useContext(LanguageContext);

    const mailInput = useRef(null);

    const resumeSimulation = (simulation)=> {
        let resumedSimulation: string[] = [];
        let htmlResumedSimulation: string = "<ul>";
        for(let page of simulation.pages) {
            const question = page.frenchQuestion + " " + page.options.find(option => option.id === page.current).frenchLabel;
            resumedSimulation = [...resumedSimulation,question];
        };
        for(let line of resumedSimulation) {
            htmlResumedSimulation = htmlResumedSimulation + `<li>${line}</li>`;
        };
        htmlResumedSimulation = htmlResumedSimulation + "</ul>"
        return htmlResumedSimulation;
    }

    const [message,setMessage] = useState({mail: "",simulation: resumeSimulation(simulation),body: ""});
    const [status,setStatus] = useState<PricesSimulatorStatusFormStatusInterface>({invalid: false, link: false,sending: false,error: false,sent: false})

    const handleChange = (property,e) => {
        setMessage({...message, [property]: e.target.value})
    };

    const checkFields = ()=> {
        if(mailInput?.current?.matches("input:invalid")) {
            setStatus({sending: false, error: false, sent: false, link: false, invalid: true});
        } else {
            checkLinks();
        };
    };

    const checkLinks = ()=> {
        const regex1 = /(?<!lien-autorise:|allowed-link:)https?:\/\/\w+-?\w+\.\w+/ig;
        const regex2 = /(?<!lien-autorise:(?:https?:\/\/)?|allowed-link:(?:https?:\/\/)?)www\.\w+-?\w+\.\w+/ig;

        if(message.body.match(regex1) !== null || message.body.match(regex2) !== null) {
            setStatus({sending: false, error: false, sent: false, link: true, invalid: false});
        } else {
            setStatus({sending: true, error: false, sent: false, link: false, invalid: false});
            sendMail();
        };
    };

    const sendMail = ()=> {
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

        const removeAllowedLinksMentions = (text: string | undefined) => {
            const englishRemoved = text?.replace("allowed-link:","");
            const frenchRemoved = englishRemoved?.replace("lien-autorise:","");
            return frenchRemoved
        };
       
        let mailData = {
            userMail : removeAllowedLinksMentions(replaceSpecialChars(message.mail)),
            simulation: message.simulation,
            messageContent: removeAllowedLinksMentions(replaceSpecialChars(message.body))
        };
        
        const options = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(mailData)
        };

        fetch('http://localhost:4000/send_simulation',options)
        .then(res => {
            if(res.ok) {
                setStatus({invalid: false, link: false, sending: false,error: false,sent: true});
                setMessage({mail: "", body:""});
            } else {
                setStatus({invalid: false, link: false, sending: false,error: true,sent: false});
            };
        })
        .catch(err => {
            setStatus({invalid: false, link : false, sending: false,error: true,sent: false});
        })
    };

    return (
        <>
            <p>
                {
                    language === "french" ? 
                        "Si vous souhaitez échanger sur les résultats de cette simulation, vous pouvez me les envoyer via le formulaire ci-dessous :"
                        :
                        "If you want to talk more about these results, you can send them to me with the following form :"
                } 
            </p>
            <form className="contact-form" method="post" action="/send_simulation" onSubmit={e => e.preventDefault()}>
                <p className="contact-form_mention">
                    {
                        language === "french" ?
                            "Les champs précédés d'un astérisque sont obligatoires."
                            :
                            "Fields preceded by an asterisk are required."
                    }
                </p>
                <p className="contact-form_mention">
                    {
                        language === "french" ?
                            "Les liens ne sont pas autorisés."
                            :
                            "Links are forbidden."
                    }
                </p>
                <p className="contact-form_line contact-form_line--mail">
                    <label htmlFor="mail">
                        {
                            language === "french" ?
                                "Adresse mail* : (Format attendu : adresse@domaine.extension)"
                                :
                                "Mail* : (Expected format : adress@domain.extension)"
                        }
                    </label>
                    {
                        status.invalid &&
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
                        onInvalid={e => e.preventDefault()} className={status.invalid ? "invalid" : ""} required />
                </p>
                <p className="contact-form_line">
                    <label htmlFor="messageContent">
                        {
                            language === "french" ?
                                "Commentaires: (maximum 500 caractères)"
                                :
                                "Comment : (maximum 500 characters)"
                        }
                    </label>
                    <textarea id="messageContent" maxLength={500} name="messageContent" 
                        placeholder={language === "french" ? "Commentaires..." : "Comment..."} 
                        onChange={e => handleChange("body",e)} value={message.body}></textarea>
                </p>
                <BasicButton frenchText="Envoyer la simulation" englishText="Send the simulation" 
                    onClickFunction={checkFields} onWhiteBackground={true} />
    

                {
                    (status.link || status.error || status.invalid || status.sending || status.sent) &&
                        <div className="contact-form_status-box">
                            {
                                status.link &&
                                    <FormMainMessage role="alert" frenchText="Veuillez supprimer les liens svp." 
                                    englishText="Please remove links." />
                            }
                            {
                                status.error &&
                                    <FormMainMessage role="alert" frenchText="Une erreur s'est produite, veuillez réessayer svp." 
                                    englishText="An error occured, please try again." />
                            }
                            {
                                status.invalid &&
                                    <FormMainMessage role="alert" frenchText="Veuillez corriger les champs invalides svp." 
                                    englishText="Please fix invalid field." />
                            }
                            {
                                status.sending &&
                                    <FormMainMessage frenchText="Simulation en cours d'envoi..." 
                                        englishText="Sending message..." />
                            }
                            {
                                status.sent && 
                                    <FormMainMessage role="success" frenchText="Votre simulation a été envoyée avec succès !" 
                                        englishText="Your message has been successfully sent !" />
                            }
                        </div>
                }
            </form>
        </>
    )
}