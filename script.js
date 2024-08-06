// // script.js
// document.getElementById('theme-toggle').addEventListener('click', () => {
//     document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
// });

// script.js
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const languageToggle = document.getElementById('language-toggle');
    const body = document.body;
    let isDarkTheme = false;
    let isEnglish = false;

    themeToggle.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        if (isDarkTheme) {
            body.setAttribute('data-theme', 'dark');
        } else {
            body.setAttribute('data-theme', 'light');
        }
    });

    languageToggle.addEventListener('click', () => {
        isEnglish = !isEnglish;
        if (isEnglish) {
            translateToEnglish();
        } else {
            translateToSpanish();
        }
    });

    function translateToEnglish() {
        document.querySelector('h1').textContent = 'Portfolio of Nelson Morales';
        document.querySelector('nav ul li:nth-child(1) a').textContent = 'Home';
        document.querySelector('nav ul li:nth-child(2) a').textContent = 'Skills';
        document.querySelector('nav ul li:nth-child(3) a').textContent = 'Projects';
        document.querySelector('nav ul li:nth-child(4) a').textContent = 'Contact';

        document.querySelector('#home h2').textContent = 'Welcome';
        document.querySelector('#home p').innerHTML = `Hi, I am an intermediate passionate backend developer with more than 3 years of experience in the field,
            creating REST applications in Python with Django, Flask, FastAPI, and Node.js with React.
            All this applying quality code with unit tests, also making integrations with some AWS services.`;

        document.querySelector('#skills h2').textContent = 'Skills';
        document.querySelectorAll('.skills-category h3')[0].textContent = 'Technologies:';
        document.querySelectorAll('.skills-category h3')[1].textContent = 'Frameworks and Libraries:';
        document.querySelectorAll('.skills-category h3')[2].textContent = 'Databases:';
        document.querySelectorAll('.skills-category h3')[3].textContent = 'Tools and Additional Technologies:';
        document.querySelectorAll('.skills-category h3')[4].textContent = 'Cloud Services:';
        document.querySelectorAll('.skills-category h3')[5].textContent = 'Methodologies and Work Tools:';
        document.querySelectorAll('.skills-category h3')[6].textContent = 'Others:';

        document.querySelector('#projects h2').textContent = 'Projects';
        document.querySelector('#projects .project h3').textContent = 'Python Developer Technical Test';
        document.querySelector('#projects .project .tech-container p').textContent = 'Made with:';

        document.querySelector('#contact h2').textContent = 'Contact';
        document.querySelectorAll('#contact .contact-item p')[0].textContent = 'nextnelson1234@gmail.com';
        document.querySelectorAll('#contact .contact-item p')[1].textContent = '+57 324 298 7112';

        document.querySelector('footer p').innerHTML = '&copy; 2024 Nelson Andres Tique Morales. All rights reserved.';
    }

    function translateToSpanish() {
        document.querySelector('h1').textContent = 'Portafolio de Nelson Morales';
        document.querySelector('nav ul li:nth-child(1) a').textContent = 'Inicio';
        document.querySelector('nav ul li:nth-child(2) a').textContent = 'Habilidades';
        document.querySelector('nav ul li:nth-child(3) a').textContent = 'Proyectos';
        document.querySelector('nav ul li:nth-child(4) a').textContent = 'Contacto';

        document.querySelector('#home h2').textContent = 'Bienvenido';
        document.querySelector('#home p').innerHTML = `Hola, Soy un apasionado desarrollador backend intermedio con más de 3 años de experiencia en el campo,
            creando aplicaciones REST en Python con Django, Flask, FastAPI, y Node.js con React.
            Todo esto aplicando código de calidad con pruebas unitarias, también haciendo integraciones con algunos servicios de AWS.`;

        document.querySelector('#skills h2').textContent = 'Habilidades';
        document.querySelectorAll('.skills-category h3')[0].textContent = 'Tecnologías:';
        document.querySelectorAll('.skills-category h3')[1].textContent = 'Frameworks y Bibliotecas:';
        document.querySelectorAll('.skills-category h3')[2].textContent = 'Bases de Datos:';
        document.querySelectorAll('.skills-category h3')[3].textContent = 'Herramientas y Tecnologías Adicionales:';
        document.querySelectorAll('.skills-category h3')[4].textContent = 'Servicios Cloud:';
        document.querySelectorAll('.skills-category h3')[5].textContent = 'Metodologías y Herramientas de Trabajo:';
        document.querySelectorAll('.skills-category h3')[6].textContent = 'Otros:';

        document.querySelector('#projects h2').textContent = 'Proyectos';
        document.querySelector('#projects .project h3').textContent = 'Prueba técnica desarrollador Python';
        document.querySelector('#projects .project .tech-container p').textContent = 'Hecho con:';

        document.querySelector('#contact h2').textContent = 'Contacto';
        document.querySelectorAll('#contact .contact-item p')[0].textContent = 'nextnelson1234@gmail.com';
        document.querySelectorAll('#contact .contact-item p')[1].textContent = '+57 324 298 7112';

        document.querySelector('footer p').innerHTML = '&copy; 2024 Nelson Andres Tique Morales. Todos los derechos reservados.';
    }
});
