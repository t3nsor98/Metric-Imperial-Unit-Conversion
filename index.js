//lets grab all the dyanmic elements
const inputEl = document.getElementById("input-el");
const buttonEl = document.getElementById("convert-btn");
//all conversions lines
const lengthEl = document.getElementById("length");
const volumeEl = document.getElementById("volume");
const massEl = document.getElementById("mass");
//The number that need to convert
const convNumEl = document.getElementById("num-to-conv");

//lets make a function for conversion

buttonEl.addEventListener("click", function(){
    let inputValue = inputEl.value;
    let meter =  (inputValue * 3.281).toFixed(3);
    let feet =  (inputValue / 3.281).toFixed(3);
    let gallon =  (inputValue * 0.264).toFixed(3);
    let litre =  (inputValue / 0.264).toFixed(3);
    let kilo =  (inputValue * 2.204).toFixed(3);
    let pound =  (inputValue / 2.204).toFixed(3);
    //if statement for empty input
    if (inputValue === "") {
        console.log("Please input something");
    }else{
        lengthEl.innerHTML = `${inputValue} meters = ${meter} feet | ${inputValue} feet = ${feet} meters`;
        volumeEl.innerHTML = `${inputValue} liters = ${litre} gallons | ${inputValue} gallons = ${gallon} liters`;
        massEl.innerHTML = `${inputValue} kilos = ${kilo} pounds | ${inputValue} pounds = ${pound} kilos`
    }
});
