let mytable = document.querySelector(".myTable");
let color = document.querySelector(".color1");
let btn = document.querySelector(".btn");
let td = document.querySelectorAll("td");


let colorCell = '#000000';
let tablenum = '';
let myTableColor = '#ffffff';
let borderCell = "2px solid #000000";
let borderDefault = "1px solid #000000";

color.addEventListener('input', inputColor);
mytable.addEventListener('click', clickTable);
btn.addEventListener('click', clickBtn);

function inputColor (e) {
    colorCell = e.target.value
}

function clickTable (e) {    
	if(tablenum) {
		tablenum.style.border = borderDefault;
	}
    tablenum = e.target;
    tablenum.style.border = borderCell;

}

function clickBtn () {
    for(let i = 0; i < td.length; i++) {
        td[i].style.backgroundColor = colorCell;
    }
    tablenum.style.background = myTableColor;
}
