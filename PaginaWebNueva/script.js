
function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}



const track = document.querySelector('.carousel-track');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
const cardWidth = 300 + 16; // width + gap

let currentPosition = 0;

nextBtn.addEventListener('click', () => {
    const maxScroll = track.scrollWidth - track.clientWidth;
    currentPosition = Math.min(currentPosition + cardWidth, maxScroll);
    track.style.transform = `translateX(-${currentPosition}px)`;
});

prevBtn.addEventListener('click', () => {
    currentPosition = Math.max(currentPosition - cardWidth, 0);
    track.style.transform = `translateX(-${currentPosition}px)`;
});
