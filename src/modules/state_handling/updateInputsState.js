//This module is responsible for updating inputs status

//Import firebase(this is file with firebase config)
import app from "../firebase";
//Import an auxiliary function which returnes current day of year
import getCurrentDayOfYear from "../auxiliary_functions/getCurrentDayOfYear";
//Function which show amout of done habit in month, it will be called each time user changes the input checked value, in consequence the user always has real amout of done habit
import showNumberOfCheckedInputs from "../show_number_of_checked_inputs/numberOfDoneHabit";
// Import function which shows an appropriate alert when user tries to checks "not today" input
import showModal from "./showAlert";

function updateInputsState(){
    const inputsFromPage = document.querySelectorAll(".calendar__input");
    const currentYearDay = getCurrentDayOfYear();

    //Reference to DB from firebase
    const DBRef = app.database().ref();
    const arrayOfHabitsRef = app.database().ref("arrayOfHabits");

    //Getting the array of inputs state from DB - https://firebase.google.com/docs/reference/js/v8/firebase.database.Reference#once
    arrayOfHabitsRef.once("value", function(data) {
        const arrayOfInputsState = data.val();


        //When user clicks the input this code recognize if this input status === 0 or === 1 and change this status to the appropriate one(0 means unchecked, 1 means checked)
        //Handling for input represents current day(this input is clickable, and will call the inputState change in storage)
        inputsFromPage[currentYearDay].addEventListener("click",()=>{
            //Each change of checked value by user makes that a different value of done habit must be displayed
            showNumberOfCheckedInputs();

            //Look DOM structure
            const thisDayElement = inputsFromPage[currentYearDay].parentElement;

            if(arrayOfInputsState[currentYearDay] === 0){
                arrayOfInputsState[currentYearDay] = 1;

                //Dynamically class change, after user clicks the input
                thisDayElement.classList.remove("calendar__day--unchecked");
                thisDayElement.classList.add("calendar__day--checked");
            }else{
                arrayOfInputsState[currentYearDay] = 0;
            
                //Dynamically class change, after user clicks the input
                thisDayElement.classList.remove("calendar__day--checked");
                thisDayElement.classList.add("calendar__day--unchecked");
            }
            //Seting new array with inputs state - first remove old array from DB, next set new array
            arrayOfHabitsRef.remove()
            .then(function() {
              DBRef.update({arrayOfHabits: arrayOfInputsState});      
            })
            //arrayOfHabitsRef.remove error handling
            .catch(function(error) {
              console.log("Remove failed: " + error.message);
            });
            //arrayOfHabitsRef.once error handling
        }, function (error) {
            console.log("Error: " + error.code);
        });
    });
    
    //Handling for the inputs which represent not current day, the user will get information about not allowed operation
    inputsFromPage.forEach((input, inputIndex)=>{
        input.addEventListener("click", (e)=>{
            if(inputIndex === currentYearDay){
                return;
            }else{
                // Modal informates about attempted forbidden operation(check the input for not today)
                showModal();
                e.preventDefault();
           }
        });
    });
}

export default updateInputsState;