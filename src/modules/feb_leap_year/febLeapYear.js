// Here is code responsible for adding an extra(29th) day in Febuary when it is leap year

function leapYearExtraDay(){
    const year = new Date().getFullYear();
    //Reference to elements which will get a new value(when it is leap year ofc)
    const febMonthElement = document.querySelector("#febuary");
    const febLeapYearDays = document.querySelector("#febLeapYear");
    if(year%4 === 0){
        //Change from 28 into 29(string in the lower right corner of the header)
        febLeapYearDays.innerHTML = "29";

        const day29 = returnNewFebuaryDayElement();

        febMonthElement.appendChild(day29);
    }
}
//Special function which is responsible for creating an appropriate HTML(li representes 29th feb) structure
function returnNewFebuaryDayElement(){
    const li = document.createElement("li");
    li.classList.add("calendar__day");

    const label = document.createElement("label");
    label.setAttribute("for", "29Feb");
    label.classList.add("calendar__dayName");
    label.innerHTML = "29th day of month";
    
    const input = document.createElement("input");
    input.type = "checkbox";
    input.setAttribute("id", "29Feb");
    input.classList.add("calendar__input");

    li.appendChild(label);
    li.appendChild(input);

    return li;
}

export default leapYearExtraDay;