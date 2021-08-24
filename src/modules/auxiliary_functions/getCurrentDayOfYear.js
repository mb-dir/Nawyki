function getCurrentDayOfYear(){//https://stackoverflow.com/questions/8619879/javascript-calculate-the-day-of-the-year-1-366
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
    const oneDay = 1000 * 60 * 60 * 24;
    //must be -1 cuz value represent 1st day of january has index === 0, not one(cuzx it is an array) in order to "match" number of day and array index there must be -1
    const day = Math.floor(diff / oneDay)-1;

    return day;
}

export default getCurrentDayOfYear;