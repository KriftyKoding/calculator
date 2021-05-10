let diplayNum = ""
let operator = ""


function numBttn(num){
    diplayNum += num
    console.log(num);
    console.log(diplayNum);
}

function clearBttn(){
    diplayNum = ""
    operator = ""
    console.log(diplayNum);
}

function operatorBttn(operatorBttn){
    if (!operator == "") console.log("error");
    operator = operatorBttn
    console.log(operator);
}