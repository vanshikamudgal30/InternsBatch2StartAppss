function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    if(b===0){
        return "Error:Cannot Divide by Zero";
    }
    return a/b;
}

function calculate(operator){
    let num1=parseFloat(document.getElementById("num1").value);
    let num2=parseFloat(document.getElementById("num2").value);
    let result;

if(isNaN(num1) || isNaN(num2)){
    document.getElementById("result").innerText="Please enter valid numbers";
    return;
}

switch(operator){
    case '+':
        result=add(num1,num2);
        break;

    case '-':
        result=subtract(num1,num2);
        break;
    
    case '*':
    result=multiply(num1,num2);
    break;

    case '/':
    result=divide(num1,num2);
    break;

    default:
        result="Invalid Operation";
}

document.getElementById('result').innerText= "Result: " + result;
}