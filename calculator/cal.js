function display(value) {
   document.getElementById("display").value += value;
}


function clr() {
   document.getElementById("display").value = "";
}

function solve() {
   try {
       let result = eval(document.getElementById("display").value);
       document.getElementById("display").value = result;
   } catch {
       alert("Invalid Expression");
       clearDisplay();
   }
}