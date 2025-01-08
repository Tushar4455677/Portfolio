var typed=new Typed("#typing",{
    strings:["Full stack Web Developer"],
    typeSpeed:200,
    backSpeed:150,
    loop:true
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= -50 && rect.top < window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
});
