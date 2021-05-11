let originalNum = 0
let displayNum = ""
let operator = ""
let equalToggle = true;

display("Math Assistance");

function numBttn(num){
    if (displayNum == "Math Assistance") displayNum = "";
    displayNum += num
    if (displayNum.charAt(0) == 0 && displayNum.length > 1) displayNum = displayNum.substr(1,1);
    display(displayNum);
}

function clearBttn(){
    displayNum = "Math Assistance"
    operator = ""
    originalNum = 0
    display(displayNum);
    displayNum = ""
}

function operatorBttn(operatorBttn){
    if (operator == "" && operatorBttn == "="){
        equalToggle = false;
        return;
    }
    if (operator == "" ||  equalToggle == false) {
        originalNum = Number(displayNum);
        displayNum = ""
        operator = operatorBttn;
        equalToggle = true;
    } else{
        switch(operator){
            case "+" : add(); break;
            case "-" : subtract(); break;
            case "/" : divide(); break;
            case "*" : multiply(); break;
            case "=" : equal(); break;
            default : console.log('fail');
        }
        operator = operatorBttn
    }
}

function display(input){
    let solutionDisplay = document.querySelector("#solution");
    let inputLength = input.length 
    //default display
     if (input == "Math Assistance" || input == "ERROR") {
        solutionDisplay.textContent = input;
        return;}
    //control Length
    if(inputLength > 13) {
        input = "..." + input.slice((inputLength-11), inputLength)
    }
    solutionDisplay.textContent = input;
}
function calcDisplay(result){
    originalNum = result;
    display(result);
    displayNum = ""
}

function add(){
    calcDisplay(Number(displayNum) + originalNum);
}

function subtract(){
    calcDisplay(originalNum - displayNum);
}
function divide(){
    let result = originalNum / displayNum;
    let resultLength = result.toString().length;
    if (resultLength >= 12){
        result = result.toString().slice(0,12);
    }
    if (originalNum == 0) {
        alert("ERROR!!! MATH NOT POSSIBLE")
        calcDisplay("ERROR")
        originalNum = 0;
    }else calcDisplay(result);
}
function multiply(){
    calcDisplay(displayNum * originalNum);
}
function equal(){
    calcDisplay(originalNum);
    console.log("OG# " + originalNum);
    console.log("dis# " + displayNum);
}