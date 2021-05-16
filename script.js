let resultNum = 0
let displayNum = ""
let operator = ""
let operatorToggle = false;
let bttnTime;
let bttnIDGlobal = "clear";

display("Math Assistance");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Number Input/////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function numBttn(num){
    checkTimeOut()
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
    checkTimeOut();
    operator = ""
    resultNum = 0
    display("Math Assistance");
    displayNum = ""
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Operator Input///////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function operatorBttn(operatorBttn){
    checkTimeOut();
    if (operator == "" ) {
        console.log("its a operator");
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
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////Key down Listener////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
window.addEventListener("keydown", function(e){
      if (e.key.match(/[0-9]/) != null){
        numBttn(e.key);
    } else if(e.key.match(/[+\-*/=]/) != null ){
        operatorBttn(e.key);
    }

    checkTimeOut();
    
    
    switch(e.key){
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

    function bttnColor(bttnID){
        bttnIDGlobal = bttnID;
        let bttn = document.getElementById(bttnID)
        bttn.classList.add('operator-button-focus')
        bttnTime = setTimeout(function (){ 
            bttn.classList.remove('operator-button-focus')
        }, 2000);
    }    
})


function checkTimeOut(){
    let bttn = document.getElementById(bttnIDGlobal)
    let test = bttn.getAttribute("class")
    if (test.includes('operator-button-focus')){
        bttn.classList.remove('operator-button-focus')
    }
}