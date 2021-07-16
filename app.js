const btnNum = document.querySelectorAll(".btn--num");
const displayScreen = document.querySelector("#displayScreen");
const operators = document.querySelectorAll(".btn--sign");

let result = Number(displayScreen.innerText);
let previousNum,nextNum;
let counter = 0,
operant = true,
operator = "";

console.log(operators[0].innerText);
console.log(operators[1].innerText);
console.log(operators[2].innerText);
console.log(operators[3].innerText);
console.log(operators[4].innerText);





btnNum[0].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>0</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[1].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>1</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>1</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[2].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>2</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>2</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[3].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>3</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>3</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[4].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>4</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>4</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[5].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>5</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>5</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[6].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>6</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>6</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[7].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>7</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>7</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[8].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>8</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>8</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[9].addEventListener('click',function () {
    if (operant) {
        displayScreen.innerHTML = "<h2 style='display:inline;'>0</h2>";
        operant = false;
    }

    if (displayScreen.innerText === "0") {
        displayScreen.innerHTML = "<h2 style='display:inline;'>9</h2>";
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>9</h2>";
        // console.log(displayScreen.innerText);
    }
});
btnNum[10].addEventListener('click',function () {
    if (displayScreen.innerText.includes(",")) {
        
        // console.log(displayScreen.innerText);
    } else {
        displayScreen.innerHTML += "<h2 style='display:inline;'>.</h2>";
        // console.log(displayScreen.innerText);
    }
});





function operate(x,y,operator) {
    if (operator === "/") {
        if (y === 0) {
            result = "Error";
        }else {
            result = x / y;
        }
    }
    if (operator === "*") {
        result = x * y;
    }
    if (operator === "-") {
        result = x - y;
    }
    if (operator === "+") {
        result = x + y;
    }
    operator="";
}
function showResult() {
    console.log(result,"  res else");
    displayScreen.innerHTML = `<h2 style='display:inline;'>${result}</h2>`;
    previousNum = result;
    console.log(previousNum,"  prv else");
}




operators[0].addEventListener('click',() => {
    operant = true;
    if (counter < 1) {
        result = Number(displayScreen.innerText);
        previousNum = result;
        operator = "/";
        console.log(previousNum," prv if");
    } else {
        if (operator === "") {
            operator = "/"
            // showResult();
        }else{
            result = Number(displayScreen.innerText);
            nextNum = result;
            console.log(nextNum,"  nxt else");

            operate(previousNum,nextNum,operator);
            operator = "/"
            showResult();
        }
    }
    counter++;
});

operators[1].addEventListener('click',() => {
    operant = true;
    if (counter < 1) {
        result = Number(displayScreen.innerText);
        previousNum = result;
        operator = "*";
        console.log(previousNum," prv if");
    } else {
        if (operator === "") {
            operator = "*"
            // showResult();
        }else {
            result = Number(displayScreen.innerText);
            nextNum = result;
            console.log(nextNum,"  nxt else");
            
            operate(previousNum,nextNum,operator);
            operator = "*"
            showResult();
        }
    }
    counter++;
});

operators[2].addEventListener('click',() => {
    operant = true;
    if (counter < 1) {
        if (operator === "") {
            operator = "/"
            // showResult();
        }
        result = Number(displayScreen.innerText);
        previousNum = result;
        operator = "-";
        console.log(previousNum," prv if");
    } else {
        if (operator === "") {
            operator = "-"
            // showResult();
        } else{
            result = Number(displayScreen.innerText);
            nextNum = result;
            console.log(nextNum,"  nxt else");
            
            operate(previousNum,nextNum,operator);
            operator = "-"
            showResult();
        }
    }
    counter++;
});

operators[3].addEventListener('click',() => {
    operant = true;
    if (counter < 1) {
        result = Number(displayScreen.innerText);
        previousNum = result;
        operator = "+";
        console.log(previousNum," prv if");
    } else {
        if (operator === "") {
            operator = "+"
            // showResult();
        }else{
            result = Number(displayScreen.innerText);
            nextNum = result;
            console.log(nextNum,"  nxt else");

            operate(previousNum,nextNum,operator);
            operator = "+"
            showResult();
        }
        
    }
    counter++;
});

operators[4].addEventListener('click',() => {
    operant = true;
    result = Number(displayScreen.innerText);
    nextNum = result;
    console.log(nextNum,"  nxt else");
    operate(previousNum,nextNum,operator);
    showResult();
    operator="";
    counter++;
});