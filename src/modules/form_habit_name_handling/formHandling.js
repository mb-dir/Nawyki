// This simple module "listing" to change event on input, and set new habit name in storage each time detects change. habitName will be shown by default the next time when the app is started

//Import firebase(this is file with firebase config)
import app from "../firebase";

function formHandling(){
    const form = document.querySelector("#habitForm");
    //Get the refference to table on firebase
    const habitNameOnDatabase = app.database().ref();

    form.addEventListener("change", ({target})=>{
        const habitNameToSave = target.value;
        //Update the element of table from firebase
        habitNameOnDatabase.update({habitName: habitNameToSave});
    })
}

export default formHandling;