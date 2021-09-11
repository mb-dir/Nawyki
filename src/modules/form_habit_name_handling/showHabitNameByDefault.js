//Module responsible for showing habit name by default

//Import firebase(this is file with firebase config)
import app from "../firebase";

function showHabitName(){
    //Code responsible for showing habit name by default
    const inputWithHabitName = document.querySelector("#habit");
    //Get the refference to "habitName" value on firebase
    const habitNameOnDatabase = app.database().ref("habitName");

    habitNameOnDatabase.on("value", function(data) {
        //Set the value from firebase as a input value
        inputWithHabitName.value = data.val();
    }, function (error) {
        console.log("Error: " + error.code);
    });
}

export default showHabitName;