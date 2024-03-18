export const handleMainColor : (checkedButton: string)=> void = (checkedButton)=> {
    switch(checkedButton) {
        case "blue":
            document.body.classList.remove('purple');
            break;
        case "purple":
            document.body.classList.add('purple');
            break;
        default:
            break;
    };
}