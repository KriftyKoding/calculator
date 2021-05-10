let diplayNum = ""
let operator = ""

display(0);

function numBttn(num){
    diplayNum += num
    if (diplayNum.charAt(0) == 0 && diplayNum.length > 1) diplayNum = diplayNum.substr(1,1);
    console.log(num);
    console.log(diplayNum);
    display(diplayNum);
}

function clearBttn(){
    diplayNum = ""
    operator = ""
    console.log(diplayNum);
    display(diplayNum);
}

function operatorBttn(operatorBttn){
    if (!operator == "") console.log("error");
    operator = operatorBttn
    console.log(operator);
}

function display(input){
    let solutionDisplay = document.querySelector("#solution-container");
    solutionDisplay.textContent = input;
}