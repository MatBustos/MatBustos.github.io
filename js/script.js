const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const filterBtns = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.project-card');
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !expanded);
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;

        filterBtns.forEach(b => {
            b.classList.toggle('filter-btn--active', b === btn);
            b.setAttribute('aria-pressed', b === btn);
        });

        cards.forEach(card => {
            const tags = card.dataset.tags.split(' ');
            card.style.display = (filter === 'all' || tags.includes(filter)) ? '' : 'none';
        });
    });
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    formStatus.textContent = ''; // limpia mensaje de un intento anterior

    const data = new FormData(form);
    try {
        const res = await fetch(form.action, {
            method: 'POST',
            body: data,
            headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
            form.reset();
            formStatus.textContent = '¡Mensaje enviado!';
        } else {
            formStatus.textContent = 'Hubo un error, intentá de nuevo.';
        }
    } catch {
        formStatus.textContent = 'Error de conexión.';
    } finally {
        submitBtn.disabled = false;
    }
});
