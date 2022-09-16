import "../pages/SearchForm.css";
import React, {Component} from "react";

class Range extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minValue: 0,
            maxValue: 20000,
            step: 10,
            firstValue: 0,
            secondValue: 20000
        };
        this.handleChange = this.handleChange.bind(this);
        this.constants = {
            onePercent: this.state.maxValue / 100
        }
    }

    componentWillMount() {
        this.setState({firstValue: this.state.minValue, secondValue: this.state.maxValue});
    }


    handleChange(name, e) {
        let value = e.target.value;

        let progress = document.getElementById("progress");
        if (name === "second") {
            if (parseInt(this.state.firstValue) < parseInt(value)) {
                this.setState({secondValue: value});
                const rightDiff = this.state.maxValue - parseInt(value);
                const leftDiff = this.state.firstValue - this.state.minValue;

                /*
                (MIN)---(F)-------(S)----(MAX)
                ///////////       ////////////
                leftDiff          rightDiff

                leftDiff + x + rightDiff = 100%;
                */

                const leftDiffPercents = leftDiff / this.constants.onePercent;
                const rightDiffPercents = rightDiff / this.constants.onePercent;

                const withPercents = 100 - leftDiffPercents - rightDiffPercents;
                const width = Math.round(320 * withPercents / 100);
                progress.style.width = width + 'px';
            }
        } else {
            if (parseInt(value) < parseInt(this.state.secondValue)) {
                this.setState({firstValue: value});
                const leftDiff = parseInt(value) - this.state.minValue;
                const rightDiff = this.state.maxValue - this.state.secondValue;
                const leftDiffPercents = leftDiff / this.constants.onePercent;
                const rightDiffPercents = rightDiff / this.constants.onePercent;
                const withPercents = 100 - leftDiffPercents - rightDiffPercents;
                const width = Math.round(320 * withPercents / 100);
                const left = (100 - rightDiffPercents - withPercents) * 320 / 100;
                progress.style.width = width + 'px';
                progress.style.left = left + 'px';
            }
        }

    }

    render() {
        return (
            <>
                <label
                    className="text-style-700-12-15 text-color-dark float-left margin-between-40 margin-top-10">диапазон
                    цены</label>
                <span id="prices-label"
                      className="float-left margin-between-40 text-style-pagination text-color-dark50 margin-top-10">
                                <span id="visible-min-price">{this.state.firstValue}₽</span> - <span
                    id="visible-max-price">{this.state.secondValue}₽</span></span>
                <br/>
                <div className='dr'>
                    <div className="slider">
                        <div id="progress"></div>
                    </div>
                    <div className="range-input">
                        <input type="range" className="range-min" value={this.state.firstValue}
                               min={this.state.minValue}
                               max={this.state.maxValue} step={this.state.step}
                               onChange={this.handleChange.bind(this, "first")}/>
                        <input type="range" className="range-max" value={this.state.secondValue}
                               min={this.state.minValue}
                               max={this.state.maxValue} step={this.state.step}
                               onChange={this.handleChange.bind(this, "second")}/>
                    </div>
                </div>

            </>

        )
    }


}

export default Range;


// constructor(props)

//     super(props);
//
//     this.state = {
//         minValue: 0,
//         maxValue: 20000,
//         step: 10,
//         firstValue: null,
//         secondValue: null
//     };
//     this.handleChange = this.handleChange.bind(this);
// }
//
// componentWillMount() {
//     this.setState({firstValue: this.state.minValue, secondValue: this.state.maxValue});
// }
//
// handleChange(name, e) {
//     let value = e.target.value;
//     if (name === "second") {
//         if (parseInt(this.state.firstValue) < parseInt(value)) {
//             this.setState({secondValue: value});
//         }
//     } else {
//         if (parseInt(value) < parseInt(this.state.secondValue)) {
//             this.setState({firstValue: value});
//         }
//     }
// }
//
//
// render() {
//     return (
//         <>
//             <label
//                 className="text-style-700-12-15 text-color-dark float-left margin-between-40 margin-top-10">диапазон
//                 цены</label>
//             <span id="prices-label"
//                   className="float-left margin-between-40 text-style-pagination text-color-dark50 margin-top-10">
//                 <span id="visible-min-price">{this.state.firstValue}₽</span> - <span id="visible-max-price">{this.state.secondValue}₽</span></span>
//             <br/>
//             <div className='dr'>
//                 <div className="slider">
//                     <div className="progress"></div>
//                 </div>
//             <div className="range-input">
//                 <input type="range" className="range-min" value={this.state.firstValue} min={this.state.minValue}
//                        max={this.state.maxValue} step={this.state.step}
//                        onChange={this.handleChange.bind(this, "first")}/>
//                 <input type="range" className="range-max" value={this.state.secondValue} min={this.state.minValue}
//                        max={this.state.maxValue} step={this.state.step}
//                        onChange={this.handleChange.bind(this, "second")}/>
//             </div>
//         </div>
//
//         </>
//     )
// }

