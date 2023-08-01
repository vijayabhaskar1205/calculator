function appendToDisplay(value) {
    var display = document.getElementById("display");
    display.value += value;
  }
  
  function clearDisplay() {
    var display = document.getElementById("display");
    display.value = "";
  }
  
  function calculate() {
    var display = document.getElementById("display");
    try {
      var result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value = "Error";
    }
  }