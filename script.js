document.addEventListener('DOMContentLoaded', function() {

    // --- STICKY NAVBAR ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) { 
            navbar.classList.add('bg-white', 'shadow-lg', 'py-2'); 
            navbar.classList.remove('py-4'); 
            document.querySelectorAll('.logo-text, #navbar a, #menu-toggle').forEach(el => el.classList.add('text-slate-900')); 
        } else { 
            navbar.classList.remove('bg-white', 'shadow-lg', 'py-2'); 
            navbar.classList.add('py-4'); 
            document.querySelectorAll('.logo-text, #navbar a, #menu-toggle').forEach(el => el.classList.remove('text-slate-900')); 
        }
    });

    // --- HAMBURGER MENU LOGIC ---
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const menuIcon = document.getElementById('menu-icon');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('fa-bars', isHidden);
            menuIcon.classList.toggle('fa-times', !isHidden);
        });
    }

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.add('fa-bars');
            menuIcon.classList.remove('fa-times');
        });
    });

    // --- CHART (Gunakan pengecekan agar tidak error di halaman selain beranda) ---
    const ctx = document.getElementById('chartPenduduk');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Produktif', 'Anak', 'Lansia'],
                datasets: [{ 
                    data: [280, 100, 70], 
                    backgroundColor: ['#2563eb', '#10b981', '#f59e0b'], 
                    borderWidth: 0 
                }]
            },
            options: { 
                responsive: true, 
                maintainAspectRatio: false, 
                plugins: { legend: { position: 'bottom' } } 
            }
        });
    }
});