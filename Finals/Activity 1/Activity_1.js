function add(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let value = number1 + number2;
    document.getElementById("result").innerHTML = "<b>Result: " + value + "</b>"
}

function subtract(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let value = number1 - number2;
    document.getElementById("result").innerHTML = "<b>Result: " + value + "</b>"
}


function multiply(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let value = number1 * number2;
    document.getElementById("result").innerHTML = "<b>Result: " + value + "</b>"
}


function divide(){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);
    let value = number1 / number2;
    document.getElementById("result").innerHTML = "<b>Result: " + value + "</b>"
}
