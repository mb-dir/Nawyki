import getCurrentDayOfYear from "../auxiliary_functions/getCurrentDayOfYear";

function renderInputs(){
    //Checks if there is such an item
    const inputsState = !!window.localStorage.getItem("inputsState");
    if(inputsState){
        //Get a state array from storage
        const arrayOfInputsState = JSON.parse(window.localStorage.getItem("inputsState"));
        //Get all inputs from page
        const inputsFromPage = document.querySelectorAll(".calendar__input");
        //This vatiable keeps information about current day of a year, ex if it is 2nd of jan it equals to 1, cuz I use this value in loops with arrays, and index of array starts form 0, look getCurrentDayOfYear function
        const howMuchDaysPassed = getCurrentDayOfYear();

        //Inputs represent not today have diffrent styles in order to show user that they are disabled
        inputsFromPage.forEach((input, inputIndex)=>{
            //If it is current day, do not add special class, this day has to be clickabe
            if(inputIndex === howMuchDaysPassed){
                return;
            }else{
                //Reference to parent element, look DOM (input has "calendar__input" class)
                input.parentElement.classList.add("calendar__day--blank");
            }
        });
        
        //Loop throught all values from localstorage which represent the past days(thanks to this this function will not add an appropriate class to these inputs which are future and which user was not able to checked), if this value equals to 1 that means this day is "checked"
        for(let i = 0; i <= howMuchDaysPassed; i++){
            const value = arrayOfInputsState[i];
            if(value === 1){
                inputsFromPage[i].checked = true;
                inputsFromPage[i].parentElement.classList.add("calendar__day--checked");
            }else{
                inputsFromPage[i].parentElement.classList.add("calendar__day--unchecked");
            }
        }
    }
}

export default renderInputs;