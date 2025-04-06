
const navbarMenu = document.querySelectorAll(".navbar-nav .nav-item a"); 

navbarMenu.forEach((link) => {
    link.onclick = (event) => {
        console.log("تم النقر على:", event.target.textContent);

        removeActiveClass();

        link.classList.add("active");
    };
});

function removeActiveClass() {
    navbarMenu.forEach((link) => {
        link.classList.remove("active");
    });
}


