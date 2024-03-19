import { Component, createRef } from "react";
import LanguageContext from "../Contexts/language-context.tsx";
import BasicButton from "./basic-button.tsx";

export default class SpinButton extends Component {

    constructor(props,frenchLabel: string,englishLabel: string,minValue: number = 0,maxValue: number = 100,defaultValue: number = 0,inputUnit: string, maxInputLength: number = 3, handleKeyDown) {
        super(props);
        this.input = createRef()
        this.state = {
            currentValue : 100,
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleInputValue = this.handleInputValue.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    static contextType = LanguageContext;

    handleKeyDown(e) {
        if(e.key !=='Tab' && e.key !=='Delete' && e.key !=='Backspace' && e.key !=='Escape' && e.key !=='ArrowDown' && e.key !=='ArrowRight' && e.key !=='ArrowLeft' && e.key !=='ArrowUp' && e.key !=='PageUp' && e.key !=='PageDown' && e.key !=='Home' && e.key !=='End'&& e.key !=='Enter' && e.key !=='0' && e.key !=='1' && e.key !=='2' && e.key !=='3' && e.key !=='4' && e.key !=='5' && e.key !=='6' && e.key !=='7' && e.key !=='8' && e.key !=='9') {
            e.preventDefault();
        } else {
            switch(e.key) {
                case 'ArrowUp':
                    if(this.input.current.value < 200) {
                        if(this.input.current.value >= 100) {
                            this.input.current.value++;
                        } else {
                            this.input.current.value = 100;
                        };
                    } else {
                        this.input.current.value = 200;
                    };
                    this.setFontSize();
                    break;
                case 'ArrowDown':
                    if(this.input.current.value > 100) {
                        if(this.input.current.value <= 200) {
                            this.input.current.value--;
                        } else {
                            this.input.current.value = 200;
                        };
                    } else {
                        this.input.current.value = 100;
                    };
                    this.setFontSize();
                    break;
                case 'PageUp':
                    e.preventDefault();
                    if(this.input.current.value <= 190) {
                        if(this.input.current.value >=100) {
                            this.input.current.value += 10;
                        } else {
                            this.input.current.value = 100;
                        };
                    } else if(this.input.current.value > 190) {
                        this.input.current.value = 200;
                    };
                    this.setFontSize();
                    break;
                case 'PageDown':
                    e.preventDefault();
                    if(this.input.current.value >= 110) {
                        if(this.input.current.value <= 200) {
                            this.input.current.value -= 10;
                        } else {
                            this.input.current.value = 200;
                        };
                    } else if(this.input.current.value < 110) {
                        this.input.current.value = 100;
                    };
                    this.setFontSize();
                    break;
                case 'Home':
                    e.preventDefault();
                    this.input.current.value = 100;
                    this.setFontSize();
                    break;
                case 'End':
                    e.preventDefault();
                    this.input.current.value = 200;
                    this.setFontSize();
                    break;    
                case 'Enter':
                    this.handleInputValue();
                    break;
                default:
                    break;
            };
        };
        this.setState({currentValue : this.input.current.value});
    }   
    handleInputValue() {
        if(this.input.current.value > 200 ) {
            this.input.current.value = 200;
        } else if (this.input.current.value < 100) {
            this.input.current.value = 100;
        };
        this.setFontSize();
    }
    increase() {
        if(this.input.current.value < 200) {
            if(this.input.current.value < 100) {
                this.input.current.value = 100;
            } else if(this.input.current.value < 125) {
                this.input.current.value = 125;
            } else if(this.input.current.value < 150) {
                this.input.current.value = 150;
            } else if(this.input.current.value < 175) {
                this.input.current.value = 175;
            } else {
                this.input.current.value = 200;
            };
        this.setState({currentValue: this.input.current.value});
        this.setFontSize();
        };
    }
    decrease() {
        if(this.input.current.value > 100) {
            if(this.input.current.value > 200) {
                this.input.current.value = 200;
            } else if(this.input.current.value > 175) {
                this.input.current.value = 175;
            } else if(this.input.current.value > 150) {
                this.input.current.value = 150;
            } else if(this.input.current.value > 125) {
                this.input.current.value = 125;
            } else {
                this.input.current.value = 100;
            };
            this.setState({currentValue: this.input.current.value});
            this.setFontSize();
        };
    }
    setFontSize() {
        document.documentElement.style.fontSize = `${this.input.current.value/100*62.5}%`;
    }
    handleChange(e) {
        this.input.current.value = e.target.value;
        this.setState({currentValue: e.target.value});
    }

    render() {
        const {language} = this.context;
    
        return(
            <div className="font-size-spin-button-container">
                <label id="spin-button-label">{language === "french" ? this.props.frenchLabel : this.props.englishLabel} : </label>
                <div className="spin-button-container">
                    <BasicButton text="-" tabIndex="-1" disableAbility={true} disabledStatus={this.state.currentValue <= this.props.minValue ? "true" : "false"} onWhiteBackground={true} onClickFunction={this.decrease} />
                    <span className="input-container">  
                        <input type="text" ref={this.input} onChange={(e)=> this.handleChange(e)} onKeyDown={(e)=> this.handleKeyDown(e)} maxLength={this.props.maxInputLength} className="spin-button_input" role="spinbutton" defaultValue={this.props.defaultValue} aria-valuenow={this.state.currentValue} aria-valuemin={this.props.minValue} aria-valuemax={this.props.maxValue} aria-valuetext={this.state.currentValue + "%"} aria-invalid={this.state.currentValue > this.props.maxValue || this.state.currentValue < this.props.minValue ? "true" : "false"} aria-labelledby="spin-button-label" />
                    </span>
                    <BasicButton text="+" tabIndex="-1" disableAbility={true} disabledStatus={this.state.currentValue >= this.props.maxValue ? "true" : "false"} onWhiteBackground={true} onClickFunction={this.increase} />
                </div>
            </div>
        )
    }
}