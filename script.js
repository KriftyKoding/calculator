let originalNum = 0
let displayNum = ""
let operator = ""
let resultNum = 0

display(0);

function numBttn(num){
    displayNum += num
    // if (displayNum.charAt(0) == 0 && displayNum.length > 1) displayNum = displayNum.substr(1,1);
    // console.log(num);
    // console.log(displayNum);
    // console.log(Number(5.5));
    display(displayNum);
}

function clearBttn(){
    displayNum = ""
    operator = ""
    originalNum = 0
    // console.log(displayNum);
    display(displayNum);
}

function operatorBttn(operatorBttn){
    switch(operatorBttn){
        case "+" : console.log("plus"); break;
        case "-" : console.log("minus"); break;
        case "/" : console.log("divid"); break;
        case "*" : console.log("miltiply"); break;
        case "=" : console.log("="); break;
        default : console.log('fail');


    }
    
   
   
   
   
   
   
    // if (!operator == "") {
    //     console.log("error")
  
    operator = operatorBttn
    add();
    console.log(operator);
   
        
    
}

function display(input){
    let solutionDisplay = document.querySelector("#solution-container");
    solutionDisplay.textContent = input;
}

function add(){
    let numHolder = Number(displayNum);
    let result = numHolder + originalNum;
    originalNum = result
    display(result);
    displayNum = ""
}