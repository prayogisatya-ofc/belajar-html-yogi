const tombolToggle = document.querySelector(".menu-toggle")
tombolToggle.addEventListener("click", function(){
    const nav = document.querySelector(".nav")
    nav.classList.toggle("active")
})