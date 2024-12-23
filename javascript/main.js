const close_btn = document.querySelector("i.fa-square-xmark");
const mobile_btn = document.querySelector("main>div.mobile_navbar_btn");
// const mobile_nav = document.querySelector("main>div.mobile_navbar_btn i");
const side_menu = document.querySelector("aside");





mobile_btn.addEventListener('click', () => {
    side_menu.style.display = "block";
    mobile_btn.style.display = "none";
})
close_btn.addEventListener('click', () => {
    side_menu.style.display = "none";
})













// const toggleNavbar = () => {
    // side_menu.classList.toggle("show");
    // mobile_btn.classList.toggle("hide");
// }
// 
// mobile_nav.addEventListener('click', () => toggleNavbar());
// 
// 
// 
// const closeDocument = () => {
    // mobile_btn.classList.toggle("show");
    // side_menu.classList.toggle("hide");
// }
// 
// close_btn.addEventListener('click', () => closeDocument());
