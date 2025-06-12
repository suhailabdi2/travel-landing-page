// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Carousel Functionality
function initCarousel(container) {
    const cards = container.querySelector('.cards, .destinations');
    const prevBtn = container.querySelector('.prev');
    const nextBtn = container.querySelector('.next');
    const cardWidth = cards.querySelector('.card, .destination-card').offsetWidth;
    const gap = 30; // Gap between cards
    let currentPosition = 0;

    function updateCarousel() {
        cards.style.transform = `translateX(${currentPosition}px)`;
    }

    prevBtn.addEventListener('click', () => {
        const maxScroll = -(cards.scrollWidth - cards.clientWidth);
        currentPosition = Math.min(currentPosition + (cardWidth + gap), 0);
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        const maxScroll = -(cards.scrollWidth - cards.clientWidth);
        currentPosition = Math.max(currentPosition - (cardWidth + gap), maxScroll);
        updateCarousel();
    });
}

// Initialize all carousels
document.querySelectorAll('.carousel-container').forEach(initCarousel);

// Add touch support for mobile
document.querySelectorAll('.cards, .destinations').forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Carousel functionality
    const carousels = document.querySelectorAll('.services-carousel, .destinations-carousel');
    
    carousels.forEach(carousel => {
        const track = carousel.querySelector('.carousel-track');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');
        const items = track.querySelectorAll('.card, .destination-card');
        let currentIndex = 0;

        function updateCarousel() {
            const offset = -currentIndex * 115;
            track.style.transform = `translateX(${offset}%)`;
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % items.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + items.length) % items.length;
            updateCarousel();
        }

        prevButton.addEventListener('click', prevSlide);
        nextButton.addEventListener('click', nextSlide);
    });
}); 
//