
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('nav ul a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});



window.addEventListener('scroll', function() {
    var headerText = document.getElementById('headerText');
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');
    var section5 = document.getElementById('section5');
    var section6 = document.getElementById('section6');

    if (window.scrollY >= section1.offsetTop && window.scrollY < section2.offsetTop) {
        headerText.innerText = 'Xibalba';
    } else if (window.scrollY >= section2.offsetTop && window.scrollY < section3.offsetTop) {
        headerText.innerText = 'Tartarus';
    } else if (window.scrollY >= section3.offsetTop && window.scrollY < section4.offsetTop) {
        headerText.innerText = 'Nifleheim';
    } else if (window.scrollY >= section4.offsetTop && window.scrollY < section5.offsetTop) {
        headerText.innerText = 'Yomi';
    } else if (window.scrollY >= section5.offsetTop && window.scrollY < section6.offsetTop) {
        headerText.innerText = 'Diyou';
    } else if (window.scrollY >= section6.offsetTop) {
        headerText.innerText = 'Hell';
    } else {
        headerText.innerText = 'Xibalba';
    }
});

window.addEventListener('scroll', function() {
    var headerText = document.getElementById('headerText2');
    var section1 = document.getElementById('section1');
    var section2 = document.getElementById('section2');
    var section3 = document.getElementById('section3');
    var section4 = document.getElementById('section4');
    var section5 = document.getElementById('section5');
    var section6 = document.getElementById('section6');
    var section7 = document.getElementById('section7');

    if (window.scrollY >= section1.offsetTop && window.scrollY < section2.offsetTop) {
        headerText2.innerText = 'Xibalba';
    } else if (window.scrollY >= section2.offsetTop && window.scrollY < section3.offsetTop) {
        headerText2.innerText = 'Tartarus';
    } else if (window.scrollY >= section3.offsetTop && window.scrollY < section4.offsetTop) {
        headerText2.innerText = 'Nifleheim';
    } else if (window.scrollY >= section4.offsetTop && window.scrollY < section5.offsetTop) {
        headerText2.innerText = 'Yomi';
    } else if (window.scrollY >= section5.offsetTop && window.scrollY < section6.offsetTop) {
        headerText2.innerText = 'Diyou';
    } else if (window.scrollY >= section6.offsetTop) {
        headerText2.innerText = 'Hell';
    } else {
        headerText2.innerText = 'Xibalba';
    }

   
});


