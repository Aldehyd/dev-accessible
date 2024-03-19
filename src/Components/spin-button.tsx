import { Component, createRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";

export default class SpinButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temporaryValue: 100,
            currentValue : 100,
            input : createRef()
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.setFontSize = this.setFontSize.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    static contextType = LanguageContext;

    handleKeyDown(e) {
        if(e.key !=='Tab' && e.key !=='Delete' && e.key !=='Backspace' && e.key !=='Escape' && e.key !=='ArrowDown' && e.key !=='ArrowRight' && e.key !=='ArrowLeft' && e.key !=='ArrowUp' && e.key !=='PageUp' && e.key !=='PageDown' && e.key !=='Home' && e.key !=='End'&& e.key !=='Enter' && e.key !=='0' && e.key !=='1' && e.key !=='2' && e.key !=='3' && e.key !=='4' && e.key !=='5' && e.key !=='6' && e.key !=='7' && e.key !=='8' && e.key !=='9') {
            e.preventDefault();
        } else {
            switch(e.key) {
                case 'ArrowUp':
                    if(this.state.currentValue < 200) {
                        if(this.state.currentValue >= 100) {
                            this.setState({currentValue : this.state.currentValue+1});
                        } else {
                            this.setState({currentValue : 100});
                        };
                    } else {
                        this.setState({currentValue : 200});
                    };
                    break;
                case 'ArrowDown':
                    if(this.state.currentValue > 100) {
                        if(this.state.currentValue <= 200) {
                            this.setState({currentValue : this.state.currentValue-1});
                        } else {
                            this.setState({currentValue : 200});
                        };
                    } else {
                        this.setState({currentValue : 100});
                    };
                    break;
                case 'PageUp':
                    e.preventDefault();
                    if(this.state.currentValue <= 190) {
                        if(this.state.currentValue >=100) {
                            this.setState({currentValue : this.state.currentValue +=10});
                        } else {
                            this.setState({currentValue : 100});
                        };
                    } else if(this.state.currentValue > 190) {
                        this.setState({currentValue : 200});
                    };
                    break;
                case 'PageDown':
                    e.preventDefault();
                    if(this.state.currentValue >= 110) {
                        if(this.state.currentValue <= 200) {
                            this.setState({currentValue : this.state.currentValue -=10});
                        } else {
                            this.setState({currentValue : 200});
                        };
                    } else if(this.state.currentValue < 110) {
                        this.setState({currentValue : 100});
                    };
                    break;
                case 'Home':
                    e.preventDefault();
                    this.setState({currentValue : 100});
                    break;
                case 'End':
                    e.preventDefault();
                    this.setState({currentValue : 200});
                    break;    
                case 'Enter':
                    this.handleInputValue();
                    break;
                default:
                    break;
            };
        };
    }
    handleInputValue() {
        console.log(this.state.temporaryValue)
        if(this.state.temporaryValue > 200 ) {
            this.setState({currentValue : 200});
        } else if (this.state.temporaryValue < 100) {
            this.setState({currentValue : 100});
        } else {
            this.setState({currentValue: this.state.temporaryValue});
        };
    }
    increase() {
        if(this.state.currentValue < 100) {
            this.setState({currentValue : 100});
        } else if(this.state.currentValue < 125) {
            this.setState({currentValue : 125});
        } else if(this.state.currentValue < 150) {
            this.setState({currentValue : 150});
        } else if(this.state.currentValue < 175) {
            this.setState({currentValue : 175});
        } else {
            this.setState({currentValue : 200});
        };
    }
    decrease() {
        if(this.state.currentValue > 200) {
            this.setState({currentValue : 200});
        } else if(this.state.currentValue > 175) {
            this.setState({currentValue : 175});
        } else if(this.state.currentValue > 150) {
            this.setState({currentValue : 150});
        } else if(this.state.currentValue > 125) {
            this.setState({currentValue : 125});
        } else {
            this.setState({currentValue : 100});
        };
    }
    setFontSize() {
        document.documentElement.style.fontSize = `${this.state.currentValue/100*62.5}%`;
    }
    handleChange(e) {
        console.log(e.target.value)
        this.setState({temporaryValue: parseInt(e.target.value)});
    }

    componentDidUpdate() {
        this.setFontSize();
        console.log(this.state.temporaryValue,this.state.currentValue)
    }

    render() {
        const {language} = this.context;

        return(
            <div className="font-size-spin-button-container">
                <label id="font-size-spin-button-label">{language === "french" ? "Taille de la police" : "Font size"} : </label>
                <div className="spin-button-container">
                    <button tabIndex="-1" className="spin-button_button spin-button_button--decrease" 
                        aria-disabled={this.state.currentValue <= 100 ? "true" : "false"} onClick={()=>this.decrease()}>-</button>
                    <span className="input-container">  
                        <input type="text" ref="input" onChange={(e)=> this.handleChange(e)} onKeyDown={(e)=> this.handleKeyDown(e)} maxLength="3" className="spin-button_input" role="spinbutton" value={this.state.currentValue} aria-valuenow={this.state.currentValue} aria-valuemin="100" aria-valuemax="200" aria-valuetext={this.state.currentValue + "%"} aria-invalid={this.state.currentValue >200 || this.state.currentValue <100 ? "true" : "false"} aria-labelledby="font-size-spin-button-label" />
                    </span>
                    <button tabIndex="-1" className="spin-button_button spin-button_button--increase" 
                        aria-disabled={this.state.currentValue >= 200 ? "true" : "false"} onClick={()=>this.increase()}>+</button>
                </div>
            </div>
        )
    }
}