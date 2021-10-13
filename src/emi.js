import React, { Component } from "react";
import InputSlider from "./emiProps";

export default class EMI extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <InputSlider value = {50} min ={0} max={100} step={1} headingValue={"How Much You Want"} unit={"Rs."}/>
                <InputSlider value = {50} min ={0} max={100} step={1} headingValue={"For How Long"} unit={"Month."}/>
                <InputSlider value = {50} min ={0} max={100} step={1} headingValue={"Interest Rate"} unit={"%"}/>
            </div>
        );
    }
}