function previewPage(){
    const app = document.querySelector("#app");
    //Each time update the localstorage, and based on this localstorage value, the content on view subpage will be generated(the content on this page will be read-only - it cannot be edited)
    window.localStorage.setItem("content", app.innerHTML);
}

export default previewPage;