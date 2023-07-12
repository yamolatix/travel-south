// Responsive Navbar
const menu = document.getElementById('menu');
function toggleMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('w-full');
    menu.classList.toggle('h-screen');
}

function slideCarousel(btnWrapper, contentWrapper) {

    btnWrapper.addEventListener("click", e => {

        if (e.target.nodeName === "BUTTON") {
            Array.from(btnWrapper.children).forEach(item =>
                item.classList.remove("active")
            );

            if (e.target.classList.contains("first")) {
                contentWrapper.style.transform = "translateX(-0%)";
                e.target.classList.add("active");
            } else if (e.target.classList.contains("second")) {
                contentWrapper.style.transform = "translateX(-33.33333333333333%)";
                e.target.classList.add("active");
            } else if (e.target.classList.contains('third')) {
                contentWrapper.style.transform = 'translatex(-66.6666666667%)';
                e.target.classList.add('active');
            } else if (e.target.classList.contains('fourth')) {
                contentWrapper.style.transform = 'translatex(-100%)';
                e.target.classList.add('active');
            }
        }
    });
}

const destinationsWrapper = document.getElementById('destinations-wraper');
const destinationsCarousel = document.getElementById('destinations-carousel')

slideCarousel(destinationsWrapper, destinationsCarousel)

const reviewsWrapper = document.getElementById('reviews-wrapper')
const reviewsCarousel = document.getElementById('reviews-carousel')

slideCarousel(reviewsWrapper, reviewsCarousel)

const favoritesWrapper = document.getElementById('favorites-wrapper')
const favoritesCarousel = document.getElementById('favorites-carousel')

slideCarousel(favoritesWrapper, favoritesCarousel)


/* let isDragging = false, startX, startScrollLeft;

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging")
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
document.addEventListener("mouseup", dragStop)
 */