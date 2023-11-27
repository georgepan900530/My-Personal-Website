function toggleMenu(){
    // Targeting the whole class specified by "{class}" in () 
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    // Change the class of menu (icon) to "{original class} open"
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}