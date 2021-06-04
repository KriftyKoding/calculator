let resultNum = 0
let display = ""
let operator = ""
let operatorToggle = false;
let bttnTimer;
let bttnIDGlobal = "clear";

handleDisplay("Math Assistance");
window.addEventListener("keydown", keydownListener);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Number Input/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function numBttn(num) {
    checkTimeOut()
    if((operator == "/") && (num == "0")) {
        resultNum = 0;
        handleDisplay("You Can't do that!!!");
        display = ""
        operator = ""
    } else {
        // make sure only one decimal
        if ((num != ".") || (!display.includes("."))   ) {
            display += num;
        } 
        // remove first 0 if equals 0___
        if (!display.includes(".") & (display.charAt(0) == 0 && display.length > 1)) display = display.substr(1,1);
        if (operator === "=") {
            resultNum = Number(display);
            operator = ""
        }
        
        handleDisplay(display);
        operatorToggle = false;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Clear Input//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function clearBttn() {
    checkTimeOut();
    operator = ""
    resultNum = 0
    handleDisplay("Math Assistance");
    display = ""
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Operator Input///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function operatorBttn(operatorBttn) {
    checkTimeOut();
    if (operator == "" ) {
        console.log("its a operator");
        resultNum = Number(display);
        display = ""
        operator = operatorBttn;
        operatorToggle = true;
    } else{
        handleOperator()
        operator = operatorBttn
    }
}
// pick operator selected
function handleOperator() {
    if (operatorToggle != true) {
        operatorToggle = true;
        switch(operator) {
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
function handleDisplay(input) {
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
function operatorDisplay(result) {
    resultNum = result;
    handleDisplay(result);
    display = ""
}

function add() {
    operatorDisplay(Number(display) + resultNum);
}

function subtract() {
    operatorDisplay(resultNum - display);
}

function divide() {
    let result = resultNum / display;
    let resultLength = result.toString().length;
    //round number
    if (resultLength >= 12) {
        result = result.toString().slice(0,12);
    }
    operatorDisplay(result);
    }

function multiply() { 
    operatorDisplay(display * resultNum);
}

function equal() {
    handleDisplay(resultNum);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Key down Listener////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function keydownListener(e) {
    if (e.key.match(/[0-9]/)) {
        numBttn(e.key);
        
    } else if (e.key.match(/[+\-*/=]/)) {
        operatorBttn(e.key);
    }

    // checkTimeOut();  // already handled in numBttn and operatorBttn
        
    switch(e.key) { 
        case "+" : bttnColor("plus");  break;
        case "-" : bttnColor("minus");  break;
        case "/" : bttnColor("divide");  break;
        case "*" : bttnColor("multiply");  break;
        case "=" : bttnColor("equal");  break;
        case "0" : bttnColor("zero"); break;
        case "1" : bttnColor("one"); break;
        case "2" : bttnColor("two"); break;
        case "3" : bttnColor("three"); break;
        case "4" : bttnColor("four"); break;
        case "5" : bttnColor("five"); break;
        case "6" : bttnColor("six"); break;
        case "7" : bttnColor("seven"); break;
        case "8" : bttnColor("eight"); break;
        case "9" : bttnColor("nine"); break;
        case "." : bttnColor("decimal"); break;
    }

    function bttnColor(bttnID) { // paints the button pressed based on ID
        bttnIDGlobal = bttnID;  // sets a global variable for later use to remove the painted button
        let bttn = document.getElementById(bttnID)
        bttn.classList.add('operator-button-focus')
        bttnTimer = setTimeout(function () { // clears the painted button after a given amount of time
            bttn.classList.remove('operator-button-focus')
        }, 2000);
    }    
}

function checkTimeOut() {   // checks for a previously painted button and removes the paint
    let bttn = document.getElementById(bttnIDGlobal)
    let test = bttn.getAttribute("class")
    if (test.includes('operator-button-focus')) {
        bttn.classList.remove('operator-button-focus')
    }
}