"use strict";

const $ = selector => document.querySelector(selector);

//function for displaying values
const display = val => {
    let oldVal = $("#displayOutput").value;
    let newVal = "";
    if (oldVal == "0") {
        newVal = val;
    }
    else {
        newVal = oldVal + val;
    }
    $("#displayOutput").value = newVal;
};

//function for sin
const sin = () => {

    $("#displayOutput").value = Math.sin($("#displayOutput").value);

};

//function for cos
const cos = () => {
    

    $("#displayOutput").value = Math.cos($("#displayOutput").value);

};

//function for tan
const tan = () => {

    $("#displayOutput").value = Math.tan($("#displayOutput").value);

};

//function for squarroot
const squarroot = () => {

    $("#displayOutput").value = Math.sqrt($("#displayOutput").value);

};

//function of square
const square = () => {

    $("#displayOutput").value = Math.pow($("#displayOutput").value, 2);

};

//function for evaluation
const solve = () => {

    $("#displayOutput").value = eval($("#displayOutput").value);

};

//function for clearing the display
const clr = () => {

    $("#displayOutput").value = "";

};

//function for log
const logvalue = () => {

    $("#displayOutput").value = Math.log($("#displayOutput").value);

};

//function for pi value
const Pivalue = () => {

    if ($("#displayOutput").value == "") {
        $("#displayOutput").value = Math.PI.toFixed(8);
    }
    else {
        $("#displayOutput").value = $("#displayOutput").value * Math.PI.toFixed(8);
    }

};

//function for backspace
const backspace = () => {

    $("#displayOutput").value = $("#displayOutput").value.substring(0, $("#displayOutput").value.length - 1);

};

//function of percent
const Percent = () => {
    let displayVal = $("#displayOutput").value;
    $("#displayOutput").value = eval(displayVal) / 100;
};

//function to change sign of the number
const changeSign = () => {
    if ($("#displayOutput").value.substring(0, 1) == "-") {
        $("#displayOutput").value = $("#displayOutput").value.substring(1, $("#displayOutput").value.length);
    }
    else {
        $("#displayOutput").value = "-" + $("#displayOutput").value;
    }
};

//function to calculate exponent 
const expValue = () => {
    $("#displayOutput").value = Math.exp($("#displayOutput").value);
};