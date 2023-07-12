const menu = document.getElementById('menu');
function toggleMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('w-full');
    menu.classList.toggle('h-screen');
}

const carousel = document.getElementById('carousel')

let isDragging = false, startX, startScrollLeft;

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


const buttonsWrapper = document.getElementById('slash');

buttonsWrapper.addEventListener("click", e => {
    const buttonSlash = e.target.nodeName;

    if (buttonSlash === "BUTTON") {
        Array.from(buttonsWrapper.children).forEach(item =>
            item.classList.remove("active")
        );
        if (e.target.classList.contains("first")) {
            carousel.style.transform = "translateX(-0%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains("second")) {
            carousel.style.transform = "translateX(-33.33333333333333%)";
            e.target.classList.add("active");
        } else if (e.target.classList.contains('third')) {
            carousel.style.transform = 'translatex(-66.6666666667%)';
            e.target.classList.add('active');
        } else if (e.target.classList.contains('fourth')) {
            carousel.style.transform = 'translatex(-100%)';
            e.target.classList.add('active');
        }
    }
});

