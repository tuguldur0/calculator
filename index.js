const numbers = ["del", "AC", "%", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", "+/-", 0, "."];
const calculator = document.getElementById("calculator");
const equals = document.createElement("button")
const operators = ["%", "/", "x", "-", "+"];
const newArr = numbers.map(displayNums);
const input = document.getElementById("input");
let currentOperator;
let temp1;
let temp2;
equals.textContent = "="
equals.classList.add("button")
calculator.appendChild(equals);

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
    for(let i = 0; i < operators.length; i++){
        if(num == operators[i]){
            button.classList.add("operators")
        } else {
            button.classList.add("button")
        }
    }
    calculator.appendChild(button);
    
    button.addEventListener("click", function(){
        for(let i = 1; i < 10; i++){
            if(num == i){
                input.value += num;
            }
        }
        if(num == "del"){
            input.value = input.value.substring(0, input.value.length-2);
        } else if (num == 0 && input.value != ""){
            input.value += num;
        } else if (num == "AC"){
            input.value = "";
            temp1 = undefined;
            temp2 = undefined;
            currentOperator = undefined;
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
            if(!input.value.includes(".")){
            input.value = String(input.value) + "."
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
    } else if (currentOperator == "/"){
        result = temp1 / temp2;
        input.value = result;
    } else if (currentOperator == "x"){
        result = temp1 * temp2;
        input.value = result;
    } else if (currentOperator == "-"){
        result = temp1 - temp2;
        input.value = result;
    } else if (currentOperator == "+"){
        result = temp1 + temp2;
        input.value = result;
       }
    }
})
