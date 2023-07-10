// Responsive Toggle
const menu = document.getElementById('menu');
function toggleMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('w-full');
    menu.classList.toggle('h-screen');
}

const carousel = document.querySelector(".carousel")

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



tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#333333',
                secondary: '#973529',
                tertiary: '#D0B280',
                whatsapp: '#24d367'
            },
            fontFamily: {
                bebas: ['Bebas Neue', 'sans-serif'],
                playfair: ['Playfair Display', 'serif']
            },
            backgroundImage: {
                'destinations': "url('/assets/images/patagonia.jpg')",
                'destination-name': "url('/assets/images/banner.jpg')"
            }
        }
    }
}
