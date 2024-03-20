export const handleLetterSpacingSwitch = (status: boolean) => {
    if(status) {
        document.body.classList.add('letter-spacing');
    } else {
        document.body.classList.remove('letter-spacing');
    };
};