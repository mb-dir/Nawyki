//This simple module is responsible for showing alert when user wants to check input for not this day

const alertModal = document.querySelector("#alertModal");

function showModal(){
    alertModal.classList.remove("alertModal--appear");
    // There must be setTimeout. Adding the animation with a slight delay will make the animation executable - without setTimeout the animation will not "reset"
    window.setTimeout(()=>{
        alertModal.classList.add("alertModal--appear");
  },0);
}

export default showModal;