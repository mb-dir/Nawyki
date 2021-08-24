//This module is responsible for showing in right top corner of each month container ammout of checked inputs. Thanks to this user the number of days did its habit

function showNumberOfCheckedInputs(){
    const monthsElement = document.querySelectorAll(".calendar__monthContainer");

    for(const month of monthsElement){
        const inputsInMonths = month.querySelectorAll(".calendar__input");
        console.log(inputsInMonths);
    }
}
export default show;