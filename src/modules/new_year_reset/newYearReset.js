//This module "resets" inputs at the beginning of each new year

//An auxiliary function which helps to define if the year value from storage(which sets "setYear" from 1st_app_run) is still current
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

//If user runs this app 1st time in new year below function will "reset" all inputs so that they are ready for reuse
function clearIfItIsDiffrentYear(){
    if(!isTheSameYear()){
        //The app has to get reference to these inputs here, in case before when this reference was in index.js, there was a problem with 29th of febuary - it does not exist in this element collection, cuz 29th of febuary was added later then the reference was obtained
        const monthInputsToClean = document.querySelectorAll(".calendar__input");
        for(const input of monthInputsToClean){
            input.classList.remove("calendar__day--checked");
            input.classList.remove("calendar__day--unchecked");
        }
    }
}

export default clearIfItIsDiffrentYear;