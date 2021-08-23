function renderInputs(){
    //Checks if there is such an item
    const inputsState = !!window.localStorage.getItem("inputsState");
    if(inputsState){
        //Get a state array from storage
        const arrayOfInputsState = JSON.parse(window.localStorage.getItem("inputsState"));
        //Get all inputs from page
        const inputsFromPage = document.querySelectorAll(".calendar__input");
        
        //Loop throught all values from localstorage, if this value equals to 1 that means this day is "checked"
        for(let i = 0; i <= 365; i++){
            const value = arrayOfInputsState[i];
            if(value === 1){
                inputsFromPage[i].checked = true;
                inputsFromPage[i].parentElement.classList.add("calendar__day--checked");
            }else{
                inputsFromPage[i].parentElement.classList.add("calendar__day--unchecked");
            }
        }
    }
}

export default renderInputs;