//Scroll

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll(".navlink");

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

//----------------------------------------------------------------
//menü navbar

document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.querySelector(".menu-icon");
    var nav = document.querySelector('#menu');

    menuToggle.addEventListener("click", function() {
        if (window.innerWidth <= 768) { // Überprüfen Sie die Bildschirmauflösung vor dem Anzeigen oder Ausblenden des Menüs
            if (nav.style.display === "block") {
                nav.style.display = "none";
            } else {
                nav.style.display = "block";
            }
        }
    });

    // Zusätzlicher Code für die Bildschirmauflösung größer als 768 Pixel
    if (window.innerWidth > 768) {
        nav.style.display = "flex";
    }

    // Event-Listener für die Überprüfung der Bildschirmauflösung bei Größenänderung
    window.addEventListener("resize", function() {
        if (window.innerWidth > 768) {
            nav.style.display = "flex";
        } else {
            nav.style.display = "none";
        }
    });
});

//----------------------------------------------------------------
//form

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the form from submitting in the default way
        
        // Assuming you have a confirmation message element with the ID "confirmation"
        const confirmation = document.getElementById("confirmation");
        confirmation.innerHTML = "Thanks for reaching out.";

        // You can also reset the form fields after submission if needed
        form.reset();
    });
});

//----------------------------------------------------------------