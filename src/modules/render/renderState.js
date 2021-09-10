//This module is responsible for showing informations from localstorage

//Import firebase(this is file with firebase config)
import app from "../firebase";

//Import an auxiliary function which returnes current day of year
import getCurrentDayOfYear from "../auxiliary_functions/getCurrentDayOfYear";

//Function which show amout of done habit in month, it will be called at the end of the rendering function to show the number of done habits
import showNumberOfCheckedInputs from "../show_number_of_checked_inputs/numberOfDoneHabit";

function renderInputs(){
    const arrayOfHabitsRef = app.database().ref("arrayOfHabits");

    //The entire rendering process is supposed to happen as soon as the array value is retrieved from firebase
    //Doc - https://firebase.google.com/docs/reference/js/v8/firebase.database.Reference#once
    arrayOfHabitsRef.once("value", (data)=>{
        const arrayOfInputsState = data.val();
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
        
        //Loop throught all values from firebase DB which represent the past days(thanks to this this function will not add an appropriate class to these inputs which are future and which user was not able to checked), if this value equals to 1 that means this day is "checked"
        for(let i = 0; i <= howMuchDaysPassed; i++){
            const value = arrayOfInputsState[i];
            if(value === 1){
                inputsFromPage[i].checked = true;
                inputsFromPage[i].parentElement.classList.add("calendar__day--checked");
            }else{
                inputsFromPage[i].parentElement.classList.add("calendar__day--unchecked");
            }
        }
        //Call the function showing amount of done habits, due to the specificity of this function(showNumberOfCheckedInputs), it must be called after updating the DOM - this function gets the reference to all inputs, and checks if disabled === true/false and on the basis of this it counts the number of done habits
        showNumberOfCheckedInputs();
    }, ()=>{
        console.log("Error: " + error.code);
    });
}

export default renderInputs;