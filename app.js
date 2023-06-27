const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".nav-menu");

 hamburger.addEventListener("click", () => {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
 })

 document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
     hamburger.classList.remove("active");
    navMenu.classList.remove("active");
 }))

 const sections = document.querySelectorAll("section");
 const navlist = document.querySelectorAll("header .navbar ul li");

 window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset > sectionTop) {
            current = section.getAttribute("id");
        }
    })
    navlist.forEach( li => {
        li.classList.remove("active");
        if(li.classList.contains("current")){
            li.classList.add("active")
        }
    })
 })
