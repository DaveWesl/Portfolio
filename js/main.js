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
//mySkills animation

document.addEventListener("DOMContentLoaded", function() {
    var mySkillsSection = document.getElementById('my-skills');
  
    function handleIntersection(entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          mySkillsSection.classList.add('animated');
        } else {
          mySkillsSection.classList.remove('animated');
        }
      });
    }
  
    var observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
  
    observer.observe(mySkillsSection);
  });

  /*-------------------------------------------------*/
  /*Legacy*/

  function openPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}