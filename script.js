function ClearDisplay(){
    document.getElementById('display').textContent = '0';
}

function InsertValue(value){
    const display = document.getElementById('display');
    if(display.textContent === '0'){
        display.textContent = value;
    }else{
        display.textContent += value;
    }

}

function calculation(){
    const display = document.getElementById('display');
    try{
        display.textContent = eval(display.textContent);
    }catch{
        display.textContent = 'Error';
    }
}

function sliceValue(){
    const display = document.getElementById('display');
    display.textContent = display.textContent.slice(0 , -1);

}

document.addEventListener('keydown', function(event){
    const key = event.key;
    if((key >= '0' && key <= '9' ) || key == '.' || key == '/' || key == '*' || key == '-' || key == '+' || key == '%'){
        InsertValue(key);
    }else if(key == 'Enter'){
        calculation();
    }else if(key === 'Backspace'){
        sliceValue();
    }else if(key == 'Escape'){
        ClearDisplay();
    }

})