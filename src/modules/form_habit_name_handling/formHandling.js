// This simple module "listing" to change event on input, and set new habit name in storage each time detects change. habitName will be shown by default the next time when the app is started
function formHandling(){
    const form = document.querySelector("#habitForm");

    form.addEventListener("change", ({target})=>{
        const habitName = target.value;
        console.log(habitName);
    })
}

export default formHandling;