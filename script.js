let resultNum = 0
let displayNum = ""
let operator = ""
let operatorToggle = false;

display("Math Assistance");

function numBttn(num){
    if (displayNum == "Math Assistance") displayNum = "";
    if (num != ".") {
        displayNum += num;
    } else if (!displayNum.includes(".")){
        displayNum += num;
    } 
    if (!displayNum.includes(".") & (displayNum.charAt(0) == 0 && displayNum.length > 1)) displayNum = displayNum.substr(1,1);
    display(displayNum);
    operatorToggle = false;
    
    if (operator == "=") {
        resultNum = Number(displayNum);
        displayNum = "";

    }
}

function clearBttn(){
    displayNum = "Math Assistance"
    operator = ""
    resultNum = 0
    display(displayNum);
    displayNum = ""
}

function operatorBttn(operatorBttn){
    if (operator == "" ) {
        // console.log("operator");
        // console.log(equalToggle);
        resultNum = Number(displayNum);
        displayNum = ""
        operator = operatorBttn;
        operatorToggle = true;
    } else{
        handleOperator()
        operator = operatorBttn
    }
}

function handleOperator(){
    if (operatorToggle != true) {
        operatorToggle = true;
        switch(operator){
            case "+" : add(); break;
            case "-" : subtract(); break;
            case "/" : divide(); break;
            case "*" : multiply(); break;
            case "=" : equal(); break;
            default : console.log('fail');
        }
    }
}

function display(input){
    let solutionDisplay = document.querySelector("#solution");
    let inputLength = input.length 
    //default display
     if (input == "Math Assistance") {
        solutionDisplay.textContent = input;
        return;}
    //control Length
    if(inputLength > 13) {
        input = "..." + input.slice((inputLength-11), inputLength)
    }
    solutionDisplay.textContent = input;
}
function calcDisplay(result){
    resultNum = result;
    display(result);
    displayNum = ""
}

function add(){
    console.log("add");
    console.log("og# " + resultNum)
    console.log("d# " + displayNum)
    calcDisplay(Number(displayNum) + resultNum);
    console.log("result add");
    console.log("og# " + resultNum)
    console.log("d# " + displayNum)
}

function subtract(){
    calcDisplay(resultNum - displayNum);
}
function divide(){
    let result = resultNum / displayNum;
    let resultLength = result.toString().length;
    if (resultLength >= 12){
        result = result.toString().slice(0,12);
    }
    if (resultNum == 0) {
        alert("ERROR!!! MATH NOT POSSIBLE");
        clearBttn();
        display('ERROR');
        operatorToggle = false;
    }else{
        calcDisplay(result);
    }
}
function multiply(){ 

    calcDisplay(displayNum * resultNum);
}
function equal(){
    display(resultNum);
}