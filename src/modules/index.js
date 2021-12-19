//https://www.npmjs.com/package/regenerator-runtime
//runtime import - thanks to this we can use async function
import regeneratorRuntime from "regenerator-runtime";

//styles
import "../styles/main.css";
//modules import
import setYearWhen1stAppRun from "./1st_app_run/setYear";
import setBasicStateWhen1stRun from "./1st_app_run/setBasicStateWhen1stRun";
import leapYearExtraDay from "./feb_leap_year/febLeapYear";
import clearIfItIsDiffrentYear from "./new_year_reset/newYearReset";
import updateInputsState from "./state_handling/updateInputsState";
import renderInputs from "./render/renderState";
import showNumberOfCheckedInputs from "./show_number_of_checked_inputs/numberOfDoneHabit";
import formHandling from "./form_habit_name_handling/formHandling";
import showHabitName from "./form_habit_name_handling/showHabitNameByDefault";
import saveMainAppContent from "./createPreview/saveMainAppContent";


setYearWhen1stAppRun();
setBasicStateWhen1stRun();
leapYearExtraDay();
clearIfItIsDiffrentYear();
updateInputsState();
renderInputs();
showNumberOfCheckedInputs();
formHandling();
showHabitName();
saveMainAppContent();