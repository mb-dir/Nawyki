function previewPage(){
    
    const view = document.querySelector("#view");
    view.innerHTML = window.localStorage.getItem("content");
    const link = document.querySelector(".link");
    //There is no needed to display "Whatch preview" link on preview page
    link.style.display = "none";

    const calendarInputs = document.querySelectorAll(".calendar__input");
    //Each input must be disaled in order to user was not able to update the app state from preview page
    for(const input of calendarInputs){
        input.disabled = true;
    }
}
    

export default previewPage;