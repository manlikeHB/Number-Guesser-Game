
const mainInput = document.querySelector('.main-input')
const submit = document.querySelector('.btn')
let secondP = document.querySelector('.second-p')

submit.addEventListener("click", checkAns)

let num = i();

console.log(num);

function i(){
    return Math.round(Math.random() * 10)
}

function playAgain() {
    num = i();
    console.log(num)
}


function checkAns(){
    if(num == mainInput.value){
        secondP.innerHTML = `Congratulations!!! ${mainInput.value} is the correct Answer.`;
        secondP.style.color = "green";
        playAgain();
       
    } else {
        secondP.innerHTML = "That was wrong. Try again"
        secondP.style.color = "red";
    }
    
    mainInput.value = ""
}






