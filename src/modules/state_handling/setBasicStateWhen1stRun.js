//This module will work only when it is 1st app run, this function sets basic inputs state, default the value is 0, cuz user doesn't check any input yet
function setBasicStateWhen1stRun(){
    //Boolien value which define if there is "inputState"(array represent input state - 1 means input was is checked, 0 means input is not checked), if it is false that means it is 1st app run, and the app has to set this array with defaul values - 0
    const inputsState = !!window.localStorage.getItem("inputsState");
    if(!inputsState){
        const arrayOfInputsState = [];
        //<= 366 cuz I want to have one extra index for 29th of febuary
        for(let i = 0; i <= 366; i++){
            arrayOfInputsState[i] = 0;//0 cuz each input is not check by default
        }
        window.localStorage.setItem("inputsState", arrayOfInputsState);
    }
}

export default setBasicStateWhen1stRun;