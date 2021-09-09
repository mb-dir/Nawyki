//This module will work only when it is 1st app run, this function sets basic inputs state, default the value is 0, cuz user doesn't check any input yet

//Import firebase(this is file with firebase config)
import app from "../firebase";

function setBasicStateWhen1stRun(){
    //Refference to database on firebase
    const arrayOfHabitsRef = app.database().ref();
    arrayOfHabitsRef.once("value")
        .then(function(snapshot) {
            const isArrayInDB = snapshot.child("arrayOfHabits").exists();
            // If it is false that means it is 1st time run app, so there is a necessity to set the basic state for each input(default 0 cuz none of them is checked) 
            if(!isArrayInDB){
                const arrayOfInputsState = [];

                //"Push" as many value as there are days in the year, so if it is leap year push one more value
                let len = 365;
                const year = new Date().getFullYear();
                if(year % 4 === 0){
                    len = 366;
                }
                for(let i = 0; i <= len; i++){
                    arrayOfInputsState[i] = 0;//0 cuz each input is not check by default(1 means checked)
                }
                //Set it in firebase
                arrayOfHabitsRef.update({arrayOfHabits: arrayOfInputsState});             
            }
    });
}

export default setBasicStateWhen1stRun;