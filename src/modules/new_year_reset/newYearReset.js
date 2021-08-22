//If it is 1st run of app the function will set an info about current year, each time the application is started again, an another function checks if it is still the same year, if the year is different, it will replace the value of "year" in storage and clear the selected inputs
function setYearWhen1stAppRun(){
    //Boolien value which define if there an appropriate item in storage
    const isYearInStorage = !!window.localStorage.getItem("year");
    //If there is a "year" in storage that means the app is lunched not 1st time and then this function does nothing
    if(isYearInStorage){
        return;
    }else{
        //In other case(when it is 1st run of app) thr app has to set "year" value in storage, so that app can determine if it is new year, which means the need to reset the inputs
        const year = new Date().getFullYear();
        window.localStorage.setItem("year", year);
    }
}

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
