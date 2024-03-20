export const handleParagraphHeightSwitch = (status: boolean) => {
    if(status) {
        document.body.classList.add('paragraph-height');
    } else {
        document.body.classList.remove('paragraph-height');
    };
};