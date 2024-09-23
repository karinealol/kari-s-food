
// Menu mobile
const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Menu filtering and sorting
const menuItems = document.querySelectorAll('.menu-item');
const filterBtns = document.querySelectorAll('.filter-btn');
const sortSelect = document.getElementById('sort-select');

function filterMenu(category) {
    menuItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function sortMenu(order) {
    const sortedItems = Array.from(menuItems).sort((a, b) => {
        const priceA = parseFloat(a.dataset.price);
        const priceB = parseFloat(b.dataset.price);
        return order === 'preco-asc' ? priceA - priceB : priceB - priceA;
    });

    const menuContainer = document.getElementById('menu-items');
    sortedItems.forEach(item => menuContainer.appendChild(item));
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => {
            b.classList.remove('bg-primary');
            b.classList.add('bg-secondary');
        });
        btn.classList.remove('bg-secondary');
        btn.classList.add('bg-primary');
        filterMenu(btn.dataset.filter);
    });
});

sortSelect.addEventListener('change', (e) => {
    sortMenu(e.target.value);
});

// GSAP animations
gsap.registerPlugin(ScrollTrigger);

gsap.from('#menu .menu-item', {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#menu',
        start: 'top 80%',
    }
});

gsap.from('#sobre .bg-white', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#sobre',
        start: 'top 80%',
    }
});

gsap.from('#localizacao .bg-white', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#localizacao',
        start: 'top 80%',
    }
});

gsap.from('#footer', {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
        trigger: '#footer',
        start: 'top 80%',
    }
});

// Form submission
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    alert('Mensagem enviada com sucesso!');
    form.reset();
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backToTopButton.classList.remove('hidden');
        backToTopButton.classList.add('flex');
    } else {
        backToTopButton.classList.remove('flex');
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
