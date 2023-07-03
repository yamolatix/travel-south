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
                whatsapp: '#24d367',
                icons: '#2A334F',
            },
            fontFamily: {
                bebas: ['Bebas Neue', 'sans-serif'],
                playfair: ['Playfair Display', 'serif']
            },
            screens: {
                'movil':'384px',
                'smartphone':'640px',
                'laptop': "1024px",
                'desktop': "1920px"
            }
        }
    }
}
