//This module is responsible for updating inputs status

function getCurrentDayOfYear(){//https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    //must be -1 cuz value represent 1st day of january has index === 0, not one(cuzx it is an array) in order to "match" number of day and array index there must be -1
    const day = Math.floor(diff / oneDay)-1;

    return day;
}


function updateInputsState(){
    const arrayOfInputsState = JSON.parse(window.localStorage.getItem("inputsState"));
    const inputsFromPage = document.querySelectorAll(".calendar__input");

    //When user clicks the input this code recognize if this input status === 0 or === 1 and change this status to the appropriate one(0 mieans unchecked, 1 mean checked)
    inputsFromPage.forEach((input, inputIndex)=>{
        input.addEventListener("click", ()=>{
            if(arrayOfInputsState[inputIndex] === 0){
                arrayOfInputsState[inputIndex] = 1;
            }else{
                arrayOfInputsState[inputIndex] = 0;
            }
            //Set new array to local storage
            window.localStorage.setItem("inputsState", JSON.stringify(arrayOfInputsState));
        });
    });
}

export default updateInputsState;