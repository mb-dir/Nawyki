//This module is responsible for updating inputs status
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