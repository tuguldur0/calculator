const numbers = ["del", "clear", "%", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", "+/-", 0, "."];
const calculator = document.getElementById("calculator");
const equals = document.createElement("button")
const operators = ["%", "/", "x", "-", "+"];
const newArr = numbers.map(displayNums);
const input = document.getElementById("input");
let currentOperator;
let temp1;
equals.textContent = "="
equals.classList.add("button")
calculator.appendChild(equals);

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
        } else if (num == "clear"){
            input.value = "";
        } else if (num == "%"){
            currentOperator = num;
            temp1 = Number(input.value);
            input.value = "";
        } else if (num == "/"){
            currentOperator = num;
            temp1 = Number(input.value);
            input.value = "";
        } else if (num == "x"){
            currentOperator = num;
            temp1 = Number(input.value);
            input.value = "";
        } else if (num == "-"){
            currentOperator = num;
            temp1 = Number(input.value);
            input.value = "";
        } else if (num == "+"){
            currentOperator = num;
            temp1 = Number(input.value);
            input.value = "";
        } else if (num == "+/-"){
            if(input.value == ""){
                input.value = -1;
            } else {
                input.value = Number(input.value) * -1
            }
        } else if(num == "."){
            input.value = String(input.value) + "."
        } 
        
    })

}
const operatorsButton = document.querySelector(".operators")
operatorsButton.addEventListener("click", function(){
    if (num == "%"){
            currentOperator = num;
            temp1 = Number(input.value);
            input.value = "";
        } else if (num == "/"){
            currentOperator = num;
            temp1 = Number(input.value);
            input.value = "";
        } else if (num == "x"){
            currentOperator = num;
            temp1 = Number(input.value);
            input.value = "";
        } else if (num == "-"){
            currentOperator = num;
            temp1 = Number(input.value);
            input.value = "";
        } else if (num == "+"){
            currentOperator = num;
            temp1 = Number(input.value);
            input.value = "";
        }
})


equals.addEventListener("click", function(){
    let temp2 = Number(input.value);
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
