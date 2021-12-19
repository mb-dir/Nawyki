function saveMainAppContent(){
    const app = document.querySelector("#app");

    //Wait until the moment everything will be loaded
    window.addEventListener("load", ()=>{
        window.localStorage.setItem("content", app.innerHTML); 
    });
}
    

export default saveMainAppContent;