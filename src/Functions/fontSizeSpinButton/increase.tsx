export const increase = (input,setCurrentValue,effectFunction)=> {
    if(input.current.value < 200) {
        if(input.current.value < 100) {
            input.current.value = 100;
        } else if(input.current.value < 125) {
            input.current.value = 125;
        } else if(input.current.value < 150) {
            input.current.value = 150;
        } else if(input.current.value < 175) {
            input.current.value = 175;
        } else {
            input.current.value = 200;
        };
    setCurrentValue(input.current.value);
    effectFunction(input);
    };
}