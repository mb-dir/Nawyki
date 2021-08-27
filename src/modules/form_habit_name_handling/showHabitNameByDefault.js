//Module responsible for showing habit name by default
function showHabitName(){
    //Ensure there is such an item in storage, if it exists that means it is not 1st time app run, and is storage exists habitName
    const isHabitName = !!window.localStorage.getItem("habitName");
    if(isHabitName){
        //Code responsible for showing habit name by default
        const habitName = window.localStorage.getItem("habitName");
        const inputWithHabitName = document.querySelector("#habit");
        inputWithHabitName.value = habitName;
    }
}

export default showHabitName;