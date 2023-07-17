const toggler = document.getElementById("toggler");
const navItems = document.getElementById('nav-items')

toggler.addEventListener('click', () => {
    navItems.classList.toggle("show-nav-items");
})