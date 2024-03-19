export const setFontSize = (input)=> {
    document.documentElement.style.fontSize = `${input.current.value/100*62.5}%`;
}