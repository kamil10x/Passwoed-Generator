let btn = document.getElementById("btn");

let inputSlide = document.getElementById("inputSlide");
let sliderVal = document.getElementById("sliderVal");

let symbols = document.getElementById("symbols");
let numbers = document.getElementById("numbers");
let uppercase = document.getElementById("uppercase");
let lowercase = document.getElementById("lowercase");
let passBox = document.querySelector(".passBox");


btn.addEventListener("click",() =>{
    btn.style.backgroundColor = "blue";

    setTimeout(() => {
        btn.style.backgroundColor = "";
    }, 100);

    passBox.value = generatePass();
});

sliderVal.textContent = inputSlide.value;

inputSlide.addEventListener('input',() =>{
    sliderVal.textContent = inputSlide.value;

});


let upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbol = "@#$%^&*()!~"

function generatePass(){
    let pass = "";
    let allChar = "";
    //pass = upperChar.charAt(Math.floor(Math.random() * upperChar.length));
    allChar += lowercase.checked ? lowerChar : "";
    allChar += uppercase.checked ? upperChar : "";
    allChar += numbers.checked ? number : "";
    allChar += symbols.checked ? symbol : "";

    if(allChar == "" || allChar.length == 0){
        return pass;
    }

    let i=1;
    while(i<=inputSlide.value){

        pass += allChar.charAt(Math.floor(Math.random() * allChar.length));
        i++;
    }

    return pass;
}






