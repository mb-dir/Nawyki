//https://www.npmjs.com/package/regenerator-runtime
//runtime import - thanks to this we can use async function
import regeneratorRuntime from "regenerator-runtime";

//styles
import "../styles/main.css";

//modules import
import leapYearExtraDay from "./feb_leap_year/febLeapYear";
import clearIfItIsDiffrentYear from "./new_year_reset/newYearReset";
import setBasicStateWhen1stRun from "./state_handling/setBasicStateWhen1stRun";

//dom variables
const febReference = document.querySelector("#febuary");
const febLeapYear = document.querySelector("#febLeapYear");

//functions
leapYearExtraDay(febReference, febLeapYear);
clearIfItIsDiffrentYear();
setBasicStateWhen1stRun();