document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('ul a');

    for (const link of navLinks) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = 80; // Adjust this value as needed
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    }
});

//menü navbar

document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector(".menu-icon");
    var nav = document.querySelector('#menu');

    menuToggle.addEventListener("click", function() {
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    });
});


