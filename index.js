const numbers = ["del", "clear", "%", "/", 7, 8, 9, "x", 4, 5, 6, "-", 1, 2, 3, "+", "+/-", 0, "."];
const calculator = document.getElementById("calculator");
const equals = document.createElement("button")
const newArr = numbers.map(displayNums);
const input = document.getElementById("input");

equals.textContent = "="
equals.classList.add("button")
calculator.appendChild(equals);

function displayNums(num) {
    let button = document.createElement("button");
    button.textContent = num;
    button.classList.add("button")
    calculator.appendChild(button);
    
    button.addEventListener("click", function(){
        for(let i = 0; i < 10; i++){
            if(num == i){
                input.value += num;
            }
        }
        if(num == "del"){
            input.value = input.value.substring(0, [input.value.length-1]);
        } else if (num == "clear"){
            input.value = "";
        } else if (num == "/"){
            let temp = Number(input.value);
            input.value = "";
            equals.addEventListener("click", function(){
                console.log(temp , input.value)
                let temp1 = Number(input.value);
          
                input.value = String(temp / temp1);

            })

        }
        //  else if (num == "%"){
        //     let temp = Number(input.value);
        //     input.value = "";
        //     equals.addEventListener("click", function(){
        //         let temp1 = Number(input.value);
        //         let result = Number(temp % temp1);
        //         input.value = result;
        //     })
        // }
    })
}