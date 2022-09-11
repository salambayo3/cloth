var menu = document.querySelector("#bars");
var navbar = document.querySelector(".navbar");
var shop = document.querySelector("#shop");
var header = document.querySelector("header");


// window.onscroll = () => {
//     header.classList.toggle("sticky", window.scrollY >= 100);  
// }

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("navbar-active");
}


shop.addEventListener("click", function () {
    alert(" Opps!!!" + " carts not yet added");
})











var scrollTop = document.querySelector(".scroll-up");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 80);
})