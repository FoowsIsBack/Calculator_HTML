function number(val){
    display.value += val;
}

function clear_number(){
    display.value = "";
}

function calculate(){
    display.value = eval(display.value) || "Syntax Error :(";
}
