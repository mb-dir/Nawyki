// Here is code responsible for adding an extra(29th) day in Febuary when it is leap year

function leapYearExtraDay(febMonthElement, febLeapYearDays){
    const year = new Date().getFullYear();
    if(year%4 === 0){
        //Change from 28 into 29(string in the lower right corner of the header)
        febLeapYearDays.innerHTML = "29";
    }
}

export default leapYearExtraDay;