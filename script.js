function scrollToSection(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    const headerHeight = document.querySelector("header")?.offsetHeight || 0;
    if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
}

document.querySelectorAll("#contact-link").forEach(button => {
    button.addEventListener("click", () => scrollToSection(".contact"));
});

document.querySelectorAll("#portfolio-link").forEach(button => {
    button.addEventListener("click", () => scrollToSection(".portfolio"));
});

document.querySelectorAll("#about-link").forEach(button => {
    button.addEventListener("click", () => scrollToSection(".about"));
});

document.querySelectorAll("#home-link").forEach(button => {
    button.addEventListener("click", () => scrollToSection(".hero"));
});


//handling form subbmition

const form = document.getElementById("contact-form");
const statusElement = document.querySelector("#status-element");
const URL = "https://script.google.com/macros/s/AKfycbzfIs4nm-pbEnbTEbeXKd5LaEaBoILyvINVPYCsE6J1MC5q6e7xB05XT4KhwimvLodGjw/exec";


form.addEventListener('submit', e => {
    e.preventDefault();
    statusElement.style.color = 'rgba(255, 255, 255, 0.6)';
    statusElement.textContent = 'Wysyłanie...';

    fetch(URL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            console.log('Success!', response);
            statusElement.textContent = 'Wiadomość została wysłana!';
            statusElement.style.color = 'green';
            setTimeout(() => {
                statusElement.textContent = '';
            }, 8000);
            form.reset();
        })
        .catch(error => {
            console.error('Error!', error.message);
            statusElement.textContent = 'Błąd wysyłania wiadomości. Spróbuj ponownie.';
            statusElement.style.color = 'red';
            setTimeout(() => {
            statusElement.textContent = '';
            }, 8000);
        });
});