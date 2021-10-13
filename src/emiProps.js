import React, { Component } from "react";
import Slider from '@material-ui/lab/Slider';
import TextField from '@material-ui/core/TextField';

export default class InputSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "value" : this.props.value,
            "min" : this.props.min,
            "max" : this.props.max,
            "step" : this.props.step,
            "heading" : this.props.headingValue,
            "unit" : this.props.unit
        }
    }
    handleSlide = (event, value)=> {
        this.setState({value});
    }

    textHandle=(event)=> {
        this.setState({value : event.target.value});
    }
    
    render() {
        return(
            <div style={{textAlign: "center"}}>
                <p style={{textAlign : "center"}}>{this.state.heading}</p>
                <TextField type={"number"} onChange={this.textHandle} value={this.state.value}/>
                <Slider max={100} min={0} step={1}  onChange={this.handleSlide} value={this.state.value }/>
                <p>
                    <span style={{float : "left"}}>Minimum Value: {this.state.min+" "+this.state.unit}</span>
                    <span style={{float : "right"}}>Maximum Value: {this.state.max+" "+this.state.unit}</span>
                </p>
            </div>
        );
    }
}