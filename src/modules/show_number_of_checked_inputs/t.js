//This module is responsible for showing in right top corner of each month container ammout of checked inputs. Thanks to this user the number of days did its habit

function showNumberOfCheckedInputs(){
    const monthsElement = document.querySelectorAll(".calendar__monthContainer");

    for(const month of monthsElement){
        const inputsInMonths = month.querySelectorAll(".calendar__input");
        //Each month has special place when this information will be shown
        const placeToShowAmount = month.querySelector(".calendar__userActiveCount");

        //Iterator for number of "checked" inputs
        let i = 0;
        //Loop throught all inputs in month which helps to determine how many of inputs has checked === true
        for(const input of inputsInMonths){
            const isChecked = input.checked;
            if(isChecked){
                i++;
            }
        }
        //After counting all inputs with checked === true in month show it in top right corner of month container
        placeToShowAmount.innerHTML = i;
    }
}
export default showNumberOfCheckedInputs;