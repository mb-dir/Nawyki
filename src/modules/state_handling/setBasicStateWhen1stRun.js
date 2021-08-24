//This module will work only when it is 1st app run, this function sets basic inputs state, default the value is 0, cuz user doesn't check any input yet
function setBasicStateWhen1stRun(){
    //Boolien value which define if there is "inputState"(array represent input state - 1 means input was is checked, 0 means input is not checked), if it is false that means it is 1st app run, and the app has to set this array with defaul values - 0
    const inputsState = !!window.localStorage.getItem("inputsState");
    if(!inputsState){
        const arrayOfInputsState = [];

        //"Push" as many value as there are days in the year, so if it is leap year push one more value
        let len = 365;
        const year = new Date().getFullYear();
        if(year % 4 === 0){
            len = 366;
        }
        for(let i = 0; i <= len; i++){
            arrayOfInputsState[i] = 0;//0 cuz each input is not check by default
        }
        window.localStorage.setItem("inputsState", JSON.stringify(arrayOfInputsState));
    }
}

export default setBasicStateWhen1stRun;