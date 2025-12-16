// Function to show a section and hide all others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active')); // hide all

    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active'); // show target

    // Update nav links
    const navLinks = document.querySelectorAll('.nav_link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
    });

    const activeLink = document.querySelector(`.nav_link[data-section="${sectionId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
        activeLink.setAttribute('aria-current', 'page');
    }

    // Close hamburger menu on mobile after clicking
    const navList = document.querySelector('.nav_list');
    if (navList.classList.contains('show')) {
        navList.classList.remove('show');
    }
}

// Attach click events after DOM is ready
window.addEventListener('DOMContentLoaded', () => {
    // Include both nav links and name link
    const clickableLinks = document.querySelectorAll('.nav_link, .name-link');

    clickableLinks.forEach(link => {
        const section = link.getAttribute('data-section'); // must match section ID
        if (!section) return;

        link.addEventListener('click', e => {
            e.preventDefault(); // prevent default link jump
            showSection(section);
        });
    });

    // Show the homepage by default
    showSection('home');

    // Hamburger toggle
    const hamburger = document.querySelector('.hamburger');
    const navList = document.querySelector('.nav_list');

    if (hamburger && navList) {
        hamburger.addEventListener('click', () => {
            navList.classList.toggle('show');
        });
    }
});