// --- components.js (FIXED: SAFE COLORS & HIGH CONTRAST) ---

// 1. KAMUS BAHASA GLOBAL
const globalTranslations = {
    id: {
        backToCatalog: "Kembali ke Katalog Alat",
        footerPrivacy: "Kebijakan Privasi",
        footerTerms: "Syarat Ketentuan",
        footerAbout: "Tentang Kami",
        footerContact: "Hubungi Kami",
        footerDev: "Dikembangkan oleh DTID Analytics."
    },
    en: {
        backToCatalog: "Back to Tools Catalog",
        footerPrivacy: "Privacy Policy",
        footerTerms: "Terms of Service",
        footerAbout: "About Us",
        footerContact: "Contact Us",
        footerDev: "Developed by DTID Analytics."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    loadHeader();
    loadFooter();
    setupLanguageSwitcher(); 

    const initialLang = document.documentElement.lang || 'en';
    if (window.updateGlobalModules) window.updateGlobalModules(initialLang);
});

function loadHeader() {
    const headerContainer = document.getElementById('global-header-container');
    if (!headerContainer) return;

    // Logika Warna Header (Fallback ke Biru jika error)
    const category = window.headerCategory || 'health';
    let headerColor = '#1e3a8a';   // Health: Indigo 900 (Menggantikan Biru Asli 1e3a8a)
    let sliderColor = '#1e40af';   // Slider: Indigo 800

    if (category === 'finance') {
        headerColor = '#16a34a';   // Green
        sliderColor = '#15803d';
    } else if (category === 'productivity') {
        // --- REVISI INI: Mengganti Ungu (#9333ea) menjadi Indigo 800 (Lebih Gelap & Nyaman) ---
        headerColor = '#3730a3';   // Indigo 800 (Lebih Gelap/Soft)
        sliderColor = '#312e81';   // Indigo 900 (Slider: Lebih gelap dari header)
    }

    headerContainer.innerHTML = `
    <div class="w-full shadow-md transition-colors duration-300" style="background-color: ${headerColor};">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center text-white">
            
            <a href="../index.html" class="flex items-center text-gray-100 hover:text-white transition duration-150 group">
                <svg class="w-6 h-6 mr-1 group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7"></path>
                </svg>
                <span id="globalBackText" class="font-medium">Back to Tools Catalog</span>
            </a>
            
            <div id="languageSwitcher" class="lang-toggle-container relative flex bg-white rounded-full 
            p-1 cursor-pointer select-none w-24 h-9 shadow-inner">
                
                <div id="langToggleSlider" class="lang-toggle-slider absolute top-1 left-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-in-out z-0 shadow-sm" style="background-color: ${sliderColor};"></div>
                
                <button id="lang-en" class="relative z-10 w-1/2 text-center text-xs font-bold transition-colors duration-300 rounded-full focus:outline-none">EN</button>
                <button id="lang-id" class="relative z-10 w-1/2 text-center text-xs font-bold transition-colors duration-300 rounded-full focus:outline-none">ID</button>
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
            <a href="../privacy-policy.html" class="hover:text-blue-600 transition duration-150" id="globalPrivacy">Privacy Policy</a>
            <span aria-hidden="true" class="hidden sm:inline text-gray-300">|</span>
            <a href="../terms-of-service.html" class="hover:text-blue-600 transition duration-150" id="globalTerms">Terms of Service</a>
            <span aria-hidden="true" class="hidden sm:inline text-gray-300">|</span>
            <a href="../about-us.html" class="hover:text-blue-600 transition duration-150" id="globalAbout">About Us</a>
            <span aria-hidden="true" class="hidden sm:inline text-gray-300">|</span>
            <a href="../contact-us.html" class="hover:text-blue-600 transition duration-150" id="globalContact">Contact Us</a>
        </div>

        <div class="mt-6 text-center text-xs text-gray-500">
            &copy; ${currentYear} Digital Tools ID. All rights reserved. <span id="globalDev">Developed by DTID Analytics.</span>
        </div>
    </div>
    `;
}

function setupLanguageSwitcher() {
    const btnEn = document.getElementById('lang-en');
    const btnId = document.getElementById('lang-id');
    const container = document.getElementById('languageSwitcher');
    if (!btnEn || !btnId || !container) return;

    const changeLang = (lang) => {
        document.documentElement.lang = lang;
        if (window.updateGlobalModules) window.updateGlobalModules(lang);
    };

    btnEn.addEventListener('click', () => changeLang('en'));
    btnId.addEventListener('click', () => changeLang('id'));
}

window.updateGlobalModules = function(lang) {
    const t = globalTranslations[lang];
    if (!t) return;
    // Update Teks Global
    if (document.getElementById('globalBackText')) document.getElementById('globalBackText').textContent = t.backToCatalog;
    if (document.getElementById('globalPrivacy')) document.getElementById('globalPrivacy').textContent = t.footerPrivacy;
    if (document.getElementById('globalTerms')) document.getElementById('globalTerms').textContent = t.footerTerms;
    if (document.getElementById('globalAbout')) document.getElementById('globalAbout').textContent = t.footerAbout;
    if (document.getElementById('globalContact')) document.getElementById('globalContact').textContent = t.footerContact;
    if (document.getElementById('globalDev')) document.getElementById('globalDev').textContent = t.footerDev;
    
    // --- LOGIKA VISUAL TOGGLE (FIXED) ---
    const btnEn = document.getElementById('lang-en');
    const btnId = document.getElementById('lang-id');
    const slider = document.getElementById('langToggleSlider');

    const baseBtnClass = "relative z-10 w-1/2 text-center text-xs font-bold transition-colors duration-300 rounded-full focus:outline-none";
    // KITA GUNAKAN WARNA YANG PASTI ADA (SAFE COLORS)
    const activeText = "text-white";
    const inactiveText = "text-primary";

    if (btnEn && btnId && slider) {
        if (lang === 'en') {
            slider.style.transform = 'translateX(0%)';
            btnEn.className = `${baseBtnClass} ${activeText}`;   
            btnId.className = `${baseBtnClass} ${inactiveText}`; 
        } else {
            slider.style.transform = 'translateX(100%)';
            btnEn.className = `${baseBtnClass} ${inactiveText}`; 
            btnId.className = `${baseBtnClass} ${activeText}`;   
        }
    }
};