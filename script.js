// const button = document.getElementById("loginBtn")
// button.addEventListener("click", function () {
//     if (button.textContent === "Login"){
//         button.textContent = "Logout"
//     } else {
//         button.textContent = "Login"
//     }
// }

// )
let numbers = [1,2,3]
console.log(numbers)
console.log(numbers[2])

const paragraphs = document.getElementsByClassName('my-paragraph')
console.log(paragraphs)

const button = document.getElementById("Btn")
// for (let i = 0; i < paragraphs.length; i++) {
//     console.log(paragraphs[i].textContent);
// }
function changeColor(){
    for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].style.color = 'green'
}
}
button.addEventListener("click",changeColor)