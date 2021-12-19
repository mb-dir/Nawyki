function saveMainAppContent(){
    const app = document.querySelector("#app");

    //Wait until the moment everything will be loaded
    console.log(1)
    window.addEventListener("load", ()=>{
        console.log("2")
        window.localStorage.setItem("content", app.innerHTML); 
    });
}
    

export default saveMainAppContent;