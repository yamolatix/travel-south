// Responsive Toggle
var menu = document.getElementById('menu');
function toggleMenu() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('w-full');
    menu.classList.toggle('h-screen');
}


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
