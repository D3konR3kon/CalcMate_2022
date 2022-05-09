function clearScreen() {
    document.getElementById("display").value = "";
   }
   
   // This function display values
   function display(value) {
    document.getElementById("display").value += value;
   }
   
   // This function evaluates the expression and return result
   
   function calculate() {
    var p = document.getElementById("display").value;

    var q = eval(p);
    document.getElementById("display").value = q;
   }