const navLinks = document.querySelectorAll('nav ul li a');
const contentSections = document.querySelectorAll('.content');

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior

        const contentId = link.getAttribute('data-content');

        contentSections.forEach(section => {
            section.classList.remove('active');
        });

        document.getElementById(contentId).classList.add('active');
    });
});

// Initially show the "All" content
document.getElementById('all').classList.add('active');