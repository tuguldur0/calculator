const numbers = ["del", "AC", "%", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", "+/-", 0, "."];
const calculator = document.getElementById("calculator");
const equals = document.createElement("button")
const operators = ["%", "/", "x", "-", "+"];
const modifiers = ["AC", "%", "del"];
const newArr = numbers.map(displayNums);
const input = document.getElementById("input");
let currentOperator, temp1, temp2;
equals.textContent = "="
equals.classList.add("operators")
calculator.appendChild(equals);
function reset(){
    temp1, temp2, currentOperator = undefined;
}
function operate(num1, num2, op){
    if(op == "%"){
        return num1 % num2;
    } else if(op == "/"){
        return num1 / num2;
    } else if(op == "x"){
        return num1 * num2;
    } else if(op == "-"){
        return num1 - num2;
    } else if(op == "+"){
        return num1 + num2;
    }
}
function displayNums(num) {
    let button = document.createElement("button");
    button.textContent = num;
    if(operators.includes(num)){
        button.classList.add("operators");
    } else if (modifiers.includes(num)){
        button.classList.add("modifiers")
    } else {
        button.classList.add("button");
    }
    calculator.appendChild(button); 
    button.addEventListener("click", function(){
        if(typeof num === "number"){
            input.value += num;
        } else if(num == "del"){
            input.value = input.value.substring(0, input.value.length-2);
        } else if (num == 0 && input.value != ""){
            input.value += num;
        } else if (num == "AC"){
            input.value = "";
            reset();
        } else if (operators.includes(num)){
            if(temp1 == undefined && currentOperator == undefined){
                currentOperator = num;
                temp1 = Number(input.value);
                input.value = "";
            } else {
                temp2 = Number(input.value);
                temp1 = operate(temp1, temp2, currentOperator);
                currentOperator = num;
                input.value = "";
            }
        } else if (num == "+/-"){
            if(input.value == ""){
                input.value = -1;
            } else {
                input.value = Number(input.value) * -1
            }
        } else if(num == "."){
            if((!input.value.includes(".")) && input.value != ""){
                input.value = String(input.value) + "."
            } else if(input.value == ""){
                input.value = "0."
            }
        } 
    })
}
equals.addEventListener("click", function(){
    temp2 = Number(input.value);
    if(input.value != ""){
    if(currentOperator == "%"){
        result = temp1 % temp2;
        input.value = result;
        reset();
    } else if (currentOperator == "/"){
        result = temp1 / temp2;
        input.value = result;
        reset();
    } else if (currentOperator == "x"){
        result = temp1 * temp2;
        input.value = result;
        reset();
    } else if (currentOperator == "-"){
        result = temp1 - temp2;
        input.value = result;
        reset();
    } else if (currentOperator == "+"){
        result = temp1 + temp2;
        input.value = result;
        reset();
       }
    }
})