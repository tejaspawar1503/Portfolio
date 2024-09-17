window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.section-title, .skill, .project-card');

    reveals.forEach(function (reveal) {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove('active');
        }
    });
}
