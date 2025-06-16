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
/*fetch (`https://api.openweathermap.org/data/2.5/weather?lat=41.8967&lon=12.4822&appid=43c1847a8970b73a267743e49f0e0c5c&units=metric`).then((response) => response.json())
.then((data)=>renderWeather(data))
.catch(error=>renderError(error));
function renderWeather(data){
    const d1=document.querySelector(".destination-header");
    let para = document.createElement("p");
    para.innerHTML=`☀️${data.weather[0].description}`;
    d1.appendChild(para);
}

/*fetch (`https://api.openweathermap.org/data/2.5/weather?lat=51.507&lon=0.127&appid=43c1847a8970b73a267743e49f0e0c5c&units=metric`).then((response) => response.json())
.then((data)=>renderLondon(data))
.catch(error=>renderError(error));
function renderLondon(data){
    const headers = document.querySelectorAll(".destination-header");
    if (headers.length >= 2) {
        let para = document.createElement("p");
        para.innerHTML = `☀️ ${data.weather[0].description}`;
    headers[1].appendChild(para); // index 1 is the second one
    }
}
*/

const destinations=[
    {name:"Rome,Italy",price:"$4.2K",days:12,image:"./images/Rome.png", latitude:41.896,longitude:12.482},
    {name:"London,UK",price:"$3.4K",days:8,image:"./images/London.jpg", latitude:51.5074,longitude:0.1278},
    {name:"Ibiza,Spain",price:"4K",days:8,image:"./images/ibiza.jpg", latitude: 38.9088, longitude: 1.4322},
    {name:"Paris,France",price:"$2.5K",days:13,image:"./images/europe.png", latitude:48.8566,longitude:2.3522}
];

const container= document.querySelector(".destinations-grid");

destinations.forEach(destination=>{
    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${destination.latitude}&lon=${destination.longitude}&appid=43c1847a8970b73a267743e49f0e0c5c&units=metric`)
    .then((response) => response.json())
    .then((data)=>renderWeather(destination.name,data))
    .catch(renderError)
}    
)
function renderWeather(name,data){
    const d1 = document.querySelector(`.destination-header[data-city="${name}"]`);
    if (!d1) {
        console.warn(`No element found for city: ${name}`);
        return;
    }
    const para=document.createElement("p");
    para.innerHTML=`⛅${data.weather[0].description} `;
    d1.appendChild(para);
    console.log(data);
}
function renderError(error){
    console.log(error);
}
document.getElementById('search').addEventListener("keyup", function (e) {
    const query = e.target.value.toLowerCase();
    const filtered = destinations.filter(dest =>
        dest.name.toLowerCase().includes(query)
    );
    console.log(filtered);
    renderDestinations(filtered);
});
function renderDestinations(list) {
    container.innerHTML = list.map(dest => `
        <div class="destination-card">
            <img src="${dest.image}" alt="${dest.name}">
            <div class="destination-info">
                <div class="destination-header" data-city="${dest.name}">
                    <span>${dest.name}</span>
                    <span>${dest.price}</span>
                </div>
                <div class="destination-details">
                    <span class="icon">🧭</span>
                    <span>${dest.days} Days Trip</span>
                </div>
            </div>
        </div>
    `).join('');
}
window.addEventListener("DOMContentLoaded", () => {
    renderDestinations(destinations);
});