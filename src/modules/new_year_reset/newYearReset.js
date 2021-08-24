//An auxiliary function which helps to define if the year value from storage(which sets "setYear" from 1stAppRun) is still current
function isTheSameYear(){
    const yearFromStorge = parseInt(window.localStorage.getItem("year"));
    const currentYear = new Date().getFullYear();

    if(yearFromStorge === currentYear){
        return true;
    }else{
        //If there is a new year the app has to update the "year" in storage
        window.localStorage.setItem("year", currentYear);
        return false;
    }
}

function clearIfItIsDiffrentYear(){
    if(!isTheSameYear()){
        //The app has to get reference to these inputs here, in case before when this reference was in index.js, there was a problem with 29th of febuary - it does not exist in this element collection, cuz 29th of febuary was added later then the reference was obtained
        const monthInputsToClean = document.querySelectorAll(".calendar__input");
        for(const input of monthInputsToClean){
            //Here will be code responsible for reseting the inputs, but I am not able to write it now, cuz I do not write code responsible for handling input state(whether it was checked or not) and I do not know which classes this function has to remove from each input
        }
    }
}

export default clearIfItIsDiffrentYear;