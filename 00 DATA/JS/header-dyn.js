const header = document.querySelector("header");
header.style.boxShadow = "0 0 0";

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 90) {
    header.style.boxShadow =
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";

      // header.classList.add("active");
  } else {
    header.style.boxShadow = "0 0 0";
    // header.classList.remove("active");
  }
});


