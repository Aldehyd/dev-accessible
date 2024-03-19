export const decrease = (input,setCurrentValue,effectFunction)=> {
    if(input.current.value > 100) {
        if(input.current.value > 200) {
            input.current.value = 200;
        } else if(input.current.value > 175) {
            input.current.value = 175;
        } else if(input.current.value > 150) {
            input.current.value = 150;
        } else if(input.current.value > 125) {
            input.current.value = 125;
        } else {
            input.current.value = 100;
        };
        setCurrentValue(input.current.value);
        effectFunction(input);
    };
}