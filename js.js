let box = []
let number = document.getElementById('number')
let output = document.getElementById('output')
function addNumber() {
    let num = parseInt(number.value)
box.push(num)
console. log(box)
}
function showNumbers() {
output.innerHTML = ''
for (let i = 0; i < box.length; i++) {
    output.innerHTML += `<div class= "box">${box[i]}</div>`
}
}
function clearNumbers() {
    box = []
    output.innerHTML = ''
}
