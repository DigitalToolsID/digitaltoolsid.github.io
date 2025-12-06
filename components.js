document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
});

function loadHeader() {
    const headerContainer = document.getElementById('global-header-container');
    if (!headerContainer) return;

    // LOGIKA WARNA KATEGORI:
    // Default = Biru (Primary Dark) - Untuk Kesehatan & Gaya Hidup
    let bgClass = 'bg-[#1e3a8a]'; // Biru Default
    let sliderClass = 'bg-[#1e3a8a]';

    // Cek Kategori Halaman
    if (window.isDocPage) {
        // Dokumen (Privacy, Terms, dll) -> Abu-abu
        bgClass = 'bg-gray-700';
        sliderClass = 'bg-gray-500';
    } else if (window.headerCategory === 'finance') {
        // Keuangan -> Hijau
        bgClass = 'bg-[#27ae60]'; 
        sliderClass = 'bg-[#27ae60]';
    } else if (window.headerCategory === 'productivity') {
        // Produktivitas -> Ungu
        bgClass = 'bg-[#8e44ad]'; 
        sliderClass = 'bg-[#8e44ad]';
    }

    headerContainer.innerHTML = `
    <div class="w-full ${bgClass} shadow-md transition-colors duration-300">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center text-white">
            
            <a href="../index.html" class="flex items-center text-gray-200 hover:text-white transition duration-150 group">
                <svg class="w-6 h-6 mr-1 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span id="backToCatalogText" class="font-medium">Back to Tools Catalog</span>
            </a>
            
            <div id="languageSwitcher" class="relative flex bg-white rounded-full p-1 shadow-sm cursor-pointer select-none w-24 h-9">
                <div id="langToggleSlider" class="absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] ${sliderClass} rounded-full transition-all duration-300 ease-in-out z-0"></div>
                <button id="lang-en" onclick="setLanguage('en')" class="relative z-10 w-1/2 text-center text-xs font-bold transition-colors duration-300 rounded-full focus:outline-none text-white">EN</button>
                <button id="lang-id" onclick="setLanguage('id')" class="relative z-10 w-1/2 text-center text-xs font-bold transition-colors duration-300 rounded-full focus:outline-none text-gray-700">ID</button>
            </div>

        </div>
    </div>
    `;
}

function loadFooter() {
    const footerContainer = document.getElementById('global-footer-container');
    if (!footerContainer) return;

    const currentYear = new Date().getFullYear();
    
    footerContainer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap justify-center space-x-4 sm:space-x-8 text-sm font-medium text-gray-600">
            <a href="../privacy-policy.html" class="hover:text-secondary transition duration-150 ease-in-out">Privacy Policy</a>
            <span aria-hidden="true" class="hidden sm:inline">|</span>
            <a href="../terms-of-service.html" class="hover:text-secondary transition duration-150 ease-in-out">Terms of Service</a>
            <span aria-hidden="true" class="hidden sm:inline">|</span>
            <a href="../about-us.html" class="hover:text-secondary transition duration-150 ease-in-out">About Us</a>
            <span aria-hidden="true" class="hidden sm:inline">|</span>
            <a href="../contact-us.html" class="hover:text-secondary transition duration-150 ease-in-out">Contact Us</a>
        </div>
        
        <div class="mt-6 text-center text-xs text-gray-500">
            &copy; ${currentYear} Digital Tools ID. All rights reserved. Developed by DTID Analytics.
        </div>
    </div>
    `;
}