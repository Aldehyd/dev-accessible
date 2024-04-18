
export default interface FormStatusInterface {
    invalid: {
        mail: boolean,
        subject: boolean,
        body: boolean,
    },
    sending: boolean,
    sent: boolean,
    error: boolean
}