const logo = document.querySelector(".navbar-brand > img");
const anchors = document.querySelectorAll(".nav-item");

const changeLogo = () => logo.src = "./images/logoNomeRoxo.png";
const unchangeLogo = () => logo.src = "./images/logoNomeBranco.png";

const addActive = e => {
  anchors.forEach(anchor => {
    anchor.firstElementChild.classList.remove("active");
    console.log("removendo");
  });
  e.target.classList.add("active");
};

anchors.forEach(anchor => {
  anchor.addEventListener("click", addActive);
});

// window.addEventListener("scroll", () => console.log(window.scrollY));

logo.onmouseover = changeLogo;
logo.onmouseout = unchangeLogo;