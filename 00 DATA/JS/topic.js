const topTitle = document.getElementById("topTitle");


window.addEventListener("scroll", () => {

    if (window.pageYOffset > 100) {
    // topTitle.classList.add("titStick");
    // upBtn.classList.remove("up-op0");
    topTitle.classList.add("titStick");
}
else{
    topTitle.classList.remove("titStick");
    // upBtn.classList.remove("up-op1");
        // upBtn.classList.add("up-op0");
    }
})



// toggle side bar



const ham = document.getElementById("ham");
const mor = document.getElementById("more");
// const hamburger = document.getElementById("hamburger");
// const hamp = document.getElementById("hamp");

ham.addEventListener("click", () => {
    mor.classList.toggle("sub-on-off");
    hamburger.classList.toggle("ham-activ");
    hamp.classList.toggle("hamp");
    console.log("hi");

})


const article = document.querySelector("article");

article.addEventListener("click", () => {
    mor.classList.remove("sub-on-off");
    // hamburger.classList.toggle("ham-activ");
    // hamp.classList.toggle("hamp");
    console.log("hi");
})


const mobMenu = document.getElementById("mob-menu");
const toggle = document.getElementById("toggle");

toggle.onclick = function(){
    toggle.classList.toggle("togActive");
    topTitle.classList.toggle("disNone");
    mobMenu.classList.toggle("mob-menu-on");
}
