
export const handleKeyDown = (e:KeyboardEvent,input,setCurrentValue,minValue: number,maxValue: number,effectFunction)=> {
    if(e.key !=='Tab' && e.key !=='Delete' && e.key !=='Backspace' && e.key !=='Escape' && e.key !=='ArrowDown' && e.key !=='ArrowRight' && e.key !=='ArrowLeft' && e.key !=='ArrowUp' && e.key !=='PageUp' && e.key !=='PageDown' && e.key !=='Home' && e.key !=='End'&& e.key !=='Enter' && e.key !=='0' && e.key !=='1' && e.key !=='2' && e.key !=='3' && e.key !=='4' && e.key !=='5' && e.key !=='6' && e.key !=='7' && e.key !=='8' && e.key !=='9') {
        e.preventDefault();
    } else {
        switch(e.key) {
            case 'ArrowUp':
                if(input.current.value < 200) {
                    if(input.current.value >= 100) {
                        input.current.value++;
                    } else {
                        input.current.value = 100;
                    };
                } else {
                    input.current.value = 200;
                };
                effectFunction(input);
                break;
            case 'ArrowDown':
                if(input.current.value > 100) {
                    if(input.current.value <= 200) {
                        input.current.value--;
                    } else {
                        input.current.value = 200;
                    };
                } else {
                    input.current.value = 100;
                };
                effectFunction(input);
                break;
            case 'PageUp':
                e.preventDefault();
                if(input.current.value <= 190) {
                    if(input.current.value >=100) {
                        input.current.value += 10;
                    } else {
                        input.current.value = 100;
                    };
                } else if(input.current.value > 190) {
                    input.current.value = 200;
                };
                effectFunction(input);
                break;
            case 'PageDown':
                e.preventDefault();
                if(input.current.value >= 110) {
                    if(input.current.value <= 200) {
                        input.current.value -= 10;
                    } else {
                        input.current.value = 200;
                    };
                } else if(input.current.value < 110) {
                    input.current.value = 100;
                };
                effectFunction(input);
                break;
            case 'Home':
                e.preventDefault();
                input.current.value = 100;
                effectFunction(input);
                break;
            case 'End':
                e.preventDefault();
                input.current.value = 200;
                effectFunction(input);
                break;    
            case 'Enter':
                if(input.current?.value > maxValue ) {
                    input.current.value = maxValue;
                } else if (input.current.value < minValue) {
                    input.current.value = minValue;
                };
                effectFunction(input);
                break;
            default:
                break;
        };
    };
    setCurrentValue(input.current.value);
}