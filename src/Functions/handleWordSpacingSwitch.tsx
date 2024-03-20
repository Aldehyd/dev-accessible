export const handleWordSpacingSwitch = (status: boolean) => {
    if(status) {
        document.body.classList.add('word-spacing');
    } else {
        document.body.classList.remove('word-spacing');
    };
};