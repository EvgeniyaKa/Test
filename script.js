let mytable = document.querySelector(".myTable");
let color = document.querySelector(".color1");
let btn = document.querySelector(".btn")
let td = document.querySelectorAll("td")

console.log(td[2]);

let colorCell = '';
let tablenum = '';
let myTableColor = '#ffffff'

color.addEventListener('input', inputColor)
function inputColor (e) {
    colorCell = e.target.value
}

mytable.addEventListener('click', clickTable)
function clickTable (e) {    
    tablenum = e.target
    console.log(e.target);
}
btn.addEventListener('click', clickBtn)
function clickBtn () {
    for(let i = 0; i < td.length; i++) {
        td[i].style.backgroundColor = colorCell;
    }
    tablenum.style.background = myTableColor;
}