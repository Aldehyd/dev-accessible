export const handleFont : (checkedButton: string)=> void = (checkedButton)=> {
    switch(checkedButton) {
        case "default":
            document.body.classList.remove('open-dyslexic');
            break;
        case "open-dyslexic":
            document.body.classList.add('open-dyslexic');
            break;
        default:
            break;
    };
}