

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});





let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let id = sec.getAttribute('id');
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);
};


    
const sr = ScrollReveal({
    reset: true,
    distance: '88px',
    duration: 2000,
    delay: 200
});

sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-content, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });

const scriptURL = 'https://script.google.com/macros/s/AKfycbwInOVusDzTR7Dam1Nz7Lg0U8OX9w2OtnxQ-Lmyyp8lC_dURUinkUgfrIoL7WnFv7oo/exec';
    const form = document.querySelector('#contact-form');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const fullName = document.querySelector('#full-name').value;
        const emailAddress = document.querySelector('#email-address').value;
        const mobileNumber = document.querySelector('#mobile-number').value;
        const emailSubject = document.querySelector('#email-subject').value;
        const message = document.querySelector('#message').value;

        const formData = new FormData();
        formData.append('Full Name', fullName);
        formData.append('Email Address', emailAddress);
        formData.append('Mobile Number', mobileNumber);
        formData.append('Email Subject', emailSubject);
        formData.append('Message', message);

        fetch(scriptURL, { method: 'POST', body: formData })
            .then(response => {
                console.log('Success!', response);
                
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });


