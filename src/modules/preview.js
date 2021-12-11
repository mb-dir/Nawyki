//styles
import "../styles/main.css";

//Imports of function which are required to render app view
import previewPage from "./createPreview/previewPage";
//Functions handling the render of the content from firebase
import showHabitName from "./form_habit_name_handling/showHabitNameByDefault";
import renderInputs from "./render/renderState";



previewPage();
showHabitName();
renderInputs();