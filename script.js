let resultNum = 0
let displayNum = ""
let operator = ""
let operatorToggle = false;

display("Math Assistance");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Number Input/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function numBttn(num){
    // make sure only one decimal
    if (num != ".") {
        displayNum += num;
    } else if (!displayNum.includes(".")){
        displayNum += num;
    } 
    // remove first 0 if equals 0___
    if (!displayNum.includes(".") & (displayNum.charAt(0) == 0 && displayNum.length > 1)) displayNum = displayNum.substr(1,1);
    display(displayNum);
    operatorToggle = false;
    //reset to new # after =
    if (operator == "=") {
        resultNum = Number(displayNum);
        displayNum = "";
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Clear Input//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function clearBttn(){
    operator = ""
    resultNum = 0
    display("Math Assistance");
    displayNum = ""
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Operator Input///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
// pick operator selected
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Display Function/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function display(input){
    let solutionDisplay = document.querySelector("#solution");
    let inputLength = input.length 
    //dont control OG display size
     if (input == "Math Assistance") {
        solutionDisplay.textContent = input;
        return;}
    //control Length displayed
    if(inputLength > 13) {
        input = "..." + input.slice((inputLength-11), inputLength)
    }
    solutionDisplay.textContent = input;
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Calc Result???///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function calcDisplay(result){
    resultNum = result;
    display(result);
    displayNum = ""
}

function add(){
    calcDisplay(Number(displayNum) + resultNum);
}

function subtract(){
    calcDisplay(resultNum - displayNum);
}

function divide(){
    let result = resultNum / displayNum;
    let resultLength = result.toString().length;
    //round number
    if (resultLength >= 12){
        result = result.toString().slice(0,12);
    }
    //create Error Alert 
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