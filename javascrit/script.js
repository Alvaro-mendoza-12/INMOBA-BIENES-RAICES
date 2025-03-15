document.getElementById('hamburger').addEventListener('click', function() {
    var navLinks = document.getElementById('nav-links');
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
});

var navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navLinks.forEach(function(nav) {
            nav.classList.remove('active');
        });
        this.classList.add('active');
    });
});
