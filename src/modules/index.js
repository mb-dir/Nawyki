//https://www.npmjs.com/package/regenerator-runtime
//runtime import - thanks to this we can use async function
import regeneratorRuntime from "regenerator-runtime";

//styles
import "../styles/main.css";

//modules import
import setYearWhen1stAppRun from "./1stAppRun/setYear";
import leapYearExtraDay from "./feb_leap_year/febLeapYear";
import clearIfItIsDiffrentYear from "./new_year_reset/newYearReset";
import setBasicStateWhen1stRun from "./1stAppRun/setBasicStateWhen1stRun";
import updateInputsState from "./state_handling/updateInputsState";
import renderInputs from "./render/renderState";

//dom variables
const febReference = document.querySelector("#febuary");
const febLeapYear = document.querySelector("#febLeapYear");

//functions
setYearWhen1stAppRun();
setBasicStateWhen1stRun();
leapYearExtraDay(febReference, febLeapYear);
clearIfItIsDiffrentYear();
updateInputsState();
renderInputs();