
export const handleContrastedThemeSwitch = (status: boolean) => {
    if(status) {
        document.body.classList.add('contrast');
        document.body.classList.remove('purple');
    } else {
        document.body.classList.remove('contrast');

        const savedStatus = localStorage.getItem('color');
        if(savedStatus === "purple") {
            document.body.classList.add('purple');
        };
    };
};