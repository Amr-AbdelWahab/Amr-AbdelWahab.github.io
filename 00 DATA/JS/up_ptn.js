const upBtn = document.getElementById("up_btn");


window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {
    upBtn.classList.add("up-op1");
    upBtn.classList.remove("up-op0");
}
else{
        upBtn.classList.remove("up-op1");
        upBtn.classList.add("up-op0");
    }
})






