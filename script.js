let originalNum = 0
let displayNum = ""
let operator = ""

display(0);

function numBttn(num){
    displayNum += num
    if (displayNum.charAt(0) == 0 && displayNum.length > 1) displayNum = displayNum.substr(1,1);
    display(displayNum);
}

function clearBttn(){
    displayNum = ""
    operator = ""
    originalNum = 0
    display(displayNum);
}

function operatorBttn(operatorBttn){
   
    if (operator == "") {
        originalNum = Number(displayNum);
        displayNum = ""
        operator = operatorBttn;
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
    solutionDisplay.textContent = input;
}
function calcDisplay(result){
    originalNum = result
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
    calcDisplay(originalNum / displayNum);
}
function multiply(){
    calcDisplay(displayNum * originalNum);
}
function equal(){
    calcDisplay(originalNum);
}