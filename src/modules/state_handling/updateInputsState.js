//This module is responsible for updating inputs status

//Import an auxiliary function which returnes current day of year
import getCurrentDayOfYear from "../auxiliary_functions/getCurrentDayOfYear";

function updateInputsState(){
    const arrayOfInputsState = JSON.parse(window.localStorage.getItem("inputsState"));
    const inputsFromPage = document.querySelectorAll(".calendar__input");
    const currentYearDay = getCurrentDayOfYear();

    //When user clicks the input this code recognize if this input status === 0 or === 1 and change this status to the appropriate one(0 means unchecked, 1 means checked)

    //Handling for input represents current day(this input is clickable, and will call the inputState change in storage)
    inputsFromPage[currentYearDay].addEventListener("click",()=>{
        if(arrayOfInputsState[currentYearDay] === 0){
            arrayOfInputsState[currentYearDay] = 1;
        }else{
            arrayOfInputsState[currentYearDay] = 0;
        }
        //Set new array to local storage
        window.localStorage.setItem("inputsState", JSON.stringify(arrayOfInputsState));
    });

    //Handling for the inputs which represent not current day, the user will get information about not allowed operation
    inputsFromPage.forEach((input, inputIndex)=>{
        input.addEventListener("click", (e)=>{
            if(inputIndex === currentYearDay){
                return;
            }else{
                alert("You cannot check the input for not today");
                e.preventDefault();
           }
        });
    });
}

export default updateInputsState;