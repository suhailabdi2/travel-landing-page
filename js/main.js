
// Data Structures

const destinations = [
    { id: 1, name: "Rome,Italy", price: 4200, days: 12, image: "./images/Rome.png", location: { latitude: 41.896, longitude: 12.482 } },
    { id: 2, name: "London,UK", price: 3400, days: 8, image: "./images/London.jpg", location: { latitude: 51.5074, longitude: 0.1278 } },
    { id: 3, name: "Ibiza,Spain", price: 4000, days: 8, image: "./images/ibiza.jpg", location: { latitude: 38.9088, longitude: 1.4322 } },
    { id: 4, name: "Paris,France", price: 2500, days: 13, image: "./images/europe.png", location: { latitude: 48.8566, longitude: 2.3522 } }
];
const search1=document.querySelector("#search");
search1.value
function renderdestinations(dest){
    let para = document.querySelector(".destinations-grid");
    let div1 = document.createElement("div");
    div1.innerHTML=` <div class="destination-card">
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
        </div>`;
    para.appendChild(div1);
    console.log(dest);
}
destinations.map(destination =>renderdestinations(destination));







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



function hi(sum){
    return sum ===0;
}


const hero = document.querySelector(".tagline");
document.querySelector(".play").addEventListener("click",function(){
    fetch("https://catfact.ninja/fact?max_length=78").then(response =>response.json())
    .then(data =>
        {console.log(data);
        renderfacts(data.fact);})
    .catch(error =>{console.log("Error:" ,error)}) }
)
    
function renderfacts(data){
    hero.innerHTML=data;
}
async function asyncFunc(){
    let result = await promise;
    console.log(result);
    console.log("hey hey");
}
let promise = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve('Promise REsolved', 4000);
    })
    reject("hii haifanyi");
});

const input = document.querySelector("#city-input").value();
document.querySelector("#get-weather").addEventListener("click",)