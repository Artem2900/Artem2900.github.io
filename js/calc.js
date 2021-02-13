let currentInput = '';
let currentAction = '';
let cuurentValue = '0';
function numberln(num){
    if (currentInput.length >= 10) return;
    if(currentInput == '' && num == '0' ) return;
    currentInput = currentInput + num;
    showCurreninput(currentInput);
  
}
// отображенте текущего значения
function showCurreninput(value){
   document.querySelector('.input-field').innerHTML= value; 

}
// очистка поля ввода
function clearln(){
 currentInput = '';
currentAction='';
currentValue=0;
 showCurreninput('0');
}

//  метод вызова действия
function doAction(action){
 calculate(); 
currentAction = action;
currentValue = +currentInput;
currentInput ='';
}

// метод подсчета
function calculate(){
const secondValue  = +currentInput;



if(currentAction == '+') {
    //сложение
const result = currentValue + secondValue;
showCurreninput(result);
}

if(currentAction == '-') {
    const result = currentValue - secondValue;
showCurreninput(result)
    //вычитание
}
if(currentAction == '*') {
    const result = currentValue * secondValue;
showCurreninput(result)
//  умножение
}

if(currentAction == '/') {
    const result1 = currentValue / secondValue;
const result = Math.floor(result1 * 10000000000 ) / 10000000000
showCurreninput(result);
    //деление 
}
}









