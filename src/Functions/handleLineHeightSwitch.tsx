export const handleLineHeightSwitch = (status: boolean) => {
    if(status) {
        document.body.classList.add('line-height');
    } else {
        document.body.classList.remove('line-height');
    };
};