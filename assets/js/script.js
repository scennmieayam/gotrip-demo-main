const translations = {
    id: {
        'nav.home': 'Beranda',
        'nav.packages': 'Paket',
        'nav.gallery': 'Galeri',
        'nav.about': 'Tentang',
        'nav.contact': 'Kontak',
        'footer.navigation': 'Navigasi',
        'footer.contactInfo': 'Informasi Kontak',
        'fab.chat': 'Chat dengan Kami',

        // Index Page
        'hero.title': 'Temukan Surga Bawah Laut<br class="hidden sm:block"/> Pulau Menjangan',
        'hero.subtitle': 'Rasakan perpaduan sempurna keindahan laut dan alam liar di Banyuwangi. Snorkeling, diving, dan pengamatan rusa menanti Anda.',
        'hero.viewPackages': 'Lihat Paket',
        'hero.bookWhatsApp': 'Pesan via WhatsApp',
        'section.whyChoose': 'Mengapa Memilih Kami',
        'section.whyChooseDesc': 'Kami menyediakan pengalaman terbaik untuk liburan Anda dengan layanan profesional dan keahlian lokal.',
        'section.ourServices': 'Layanan Kami',
        'section.popularPackages': 'Paket Populer',
        'section.viewAll': 'Lihat Semua Paket',

        // Package Page
        'packages.title': 'Pilihan Paket Wisata',
        'packages.subtitle': 'Temukan paket wisata terbaik untuk pengalaman liburan tak terlupakan di Banyuwangi',
        'filter.all': 'Semua',
        'filter.openTrip': 'Open Trip',
        'filter.privateTrip': 'Private Trip',
        'pkg.openTrip': 'Open Trip',
        'pkg.privateTrip': 'Private Trip',
        'pkg.menjanganTabuhan.title': 'Open Trip Pulau Menjangan & Tabuhan',
        'pkg.menjanganTabuhan.desc': 'Eksplorasi keindahan bawah laut Pulau Menjangan dan pesona Pulau Tabuhan dalam satu hari perjalanan.',
        'pkg.kawahIjen.title': 'Open Trip Kawah Ijen',
        'pkg.kawahIjen.desc': 'Saksikan fenomena Blue Fire yang langka dan keindahan sunrise dari puncak Kawah Ijen.',
        'pkg.baluranJeep.title': 'Open Trip TN. Baluran Jeep Experience',
        'pkg.baluranJeep.desc': 'Jelajahi savana Afrika-nya Jawa dengan Jeep Trooper yang gagah dan instagramable.',
        'pkg.baluranJeepPrivate.title': 'Private Trip Baluran Jeep Experience',
        'pkg.baluranJeepPrivate.desc': 'Nikmati safari private di TN. Baluran dengan Jeep Trooper, lebih leluasa dan eksklusif.',
        'pkg.banyuwangiSelatanPrivate.title': 'Private Trip Banyuwangi Selatan',
        'pkg.banyuwangiSelatanPrivate.desc': 'Jelajahi pantai-pantai eksotis di selatan Banyuwangi: Djawatan, Pulau Merah, dan Teluk Ijo.',
        'pkg.djawatanBaluranPrivate.title': 'Private Trip Djawatan Baluran',
        'pkg.djawatanBaluranPrivate.desc': 'Kombinasi sempurna hutan magis Djawatan dan savana Baluran dalam satu paket private.',
        'pkg.kawahIjenPrivate.title': 'Private Trip Kawah Ijen',
        'pkg.kawahIjenPrivate.desc': 'Pendakian private ke Kawah Ijen. Waktu lebih fleksibel dan pelayanan lebih personal.',
        'btn.detail': 'Lihat Detail',
        'btn.book': 'Pesan Sekarang'
    },
    en: {
        'nav.home': 'Home',
        'nav.packages': 'Packages',
        'nav.gallery': 'Gallery',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'footer.navigation': 'Navigation',
        'footer.contactInfo': 'Contact Info',
        'fab.chat': 'Chat with Us',

        // Index Page
        'hero.title': 'Discover the Underwater<br class="hidden sm:block"/> Paradise of Menjangan',
        'hero.subtitle': 'Experience the perfect blend of marine beauty and wild nature in Banyuwangi. Snorkeling, diving, and deer watching await.',
        'hero.viewPackages': 'View Packages',
        'hero.bookWhatsApp': 'Book via WhatsApp',
        'section.whyChoose': 'Why Choose Us',
        'section.whyChooseDesc': 'We provide the best experience for your holiday with professional services and local expertise.',
        'section.ourServices': 'Our Services',
        'section.popularPackages': 'Popular Packages',
        'section.viewAll': 'View All Packages',

        // Package Page
        'packages.title': 'Tour Packages',
        'packages.subtitle': 'Find the best tour packages for an unforgettable holiday experience in Banyuwangi',
        'filter.all': 'All',
        'filter.openTrip': 'Open Trip',
        'filter.privateTrip': 'Private Trip',
        'pkg.openTrip': 'Open Trip',
        'pkg.privateTrip': 'Private Trip',
        'pkg.menjanganTabuhan.title': 'Open Trip Menjangan & Tabuhan Island',
        'pkg.menjanganTabuhan.desc': 'Explore the underwater beauty of Menjangan Island and the charm of Tabuhan Island in a one-day trip.',
        'pkg.kawahIjen.title': 'Open Trip Ijen Crater',
        'pkg.kawahIjen.desc': 'Witness the rare Blue Fire phenomenon and the beautiful sunrise from the top of Ijen Crater.',
        'pkg.baluranJeep.title': 'Open Trip Baluran NP Jeep Experience',
        'pkg.baluranJeep.desc': 'Explore the Africa of Java savanna with a dashboard and instagramable Jeep Trooper.',
        'pkg.baluranJeepPrivate.title': 'Private Trip Baluran Jeep Experience',
        'pkg.baluranJeepPrivate.desc': 'Enjoy a private safari in Baluran NP with a Jeep Trooper, more free and exclusive.',
        'pkg.banyuwangiSelatanPrivate.title': 'Private Trip South Banyuwangi',
        'pkg.banyuwangiSelatanPrivate.desc': 'Explore exotic beaches in southern Banyuwangi: Djawatan, Red Island, and Green Bay.',
        'pkg.djawatanBaluranPrivate.title': 'Private Trip Djawatan Baluran',
        'pkg.djawatanBaluranPrivate.desc': 'Perfect combination of Djawatan magical forest and Baluran savanna in one private package.',
        'pkg.kawahIjenPrivate.title': 'Private Trip Ijen Crater',
        'pkg.kawahIjenPrivate.desc': 'Private hike to Ijen Crater. More flexible time and more personal service.',
        'btn.detail': 'View Detail',
        'btn.book': 'Book Now'
    }
};

let currentLang = 'id';

function updateLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.lang-toggle').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active', 'font-bold', 'bg-white/20', 'text-white', 'rounded-full');
            btn.classList.remove('text-white/70', 'font-medium');
        } else {
            btn.classList.remove('active', 'font-bold', 'bg-white/20', 'text-white');
            btn.classList.add('text-white/70', 'font-medium');
        }
    });

    document.documentElement.lang = lang;
    localStorage.setItem('selectedLang', lang);
}

document.addEventListener('DOMContentLoaded', () => {

    // Header Language Toggle Buttons (desktop & mobile)
    // Note: The HTML no longer has these buttons in the header, 
    // but we keep the listener in case they are re-added or exist elsewhere.
    document.querySelectorAll('.lang-toggle').forEach(btn => {
        btn.addEventListener('click', () => updateLanguage(btn.dataset.lang));
    });

    // Mobile Menu Toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = menuBtn.querySelector('.material-symbols-outlined');
            icon.textContent = mobileMenu.classList.contains('hidden') ? 'menu' : 'close';
        });
    }

    // Load saved language
    const savedLang = localStorage.getItem('selectedLang') || 'id';
    updateLanguage(savedLang);
});


/* ==================== LIGHTBOX ==================== */
const Lightbox = {
    images: [],
    currentIndex: 0,
    modal: null,
    imgElement: null,

    init() {
        // Create modal HTML logic if not exists
        if (document.getElementById('lightbox-modal')) {
            this.modal = document.getElementById('lightbox-modal');
            this.imgElement = document.getElementById('lightbox-image');
            return;
        }

        const modalHtml = `
            <div id="lightbox-modal">
                <img id="lightbox-image" src="" alt="Lightbox Image">
                <button id="lightbox-close" class="lightbox-btn" aria-label="Close Lightbox">
                    <span class="material-symbols-outlined">close</span>
                </button>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        this.modal = document.getElementById('lightbox-modal');
        this.imgElement = document.getElementById('lightbox-image');

        // Event Listeners
        document.getElementById('lightbox-close').addEventListener('click', (e) => {
            e.stopPropagation();
            this.close();
        });
        this.modal.addEventListener('click', () => this.close());
        this.imgElement.addEventListener('click', (e) => e.stopPropagation()); // Prevent closing when clicking image
    },

    open(images, startIndex = 0) {
        if (!this.modal) this.init();

        this.images = images;
        this.currentIndex = startIndex;
        this.updateImage();

        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll
    },

    close() {
        if (this.modal) {
            this.modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    },

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateImage();
    },

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateImage();
    },

    updateImage() {
        const img = this.images[this.currentIndex];
        // Handle if image is object (url, caption) or just string url
        const src = typeof img === 'object' ? img.url : img;

        this.imgElement.src = src;
    }
};

// Initialize keyboard support
document.addEventListener('keydown', (e) => {
    if (!Lightbox.modal || !Lightbox.modal.classList.contains('active')) return;

    if (e.key === 'Escape') Lightbox.close();
    if (e.key === 'ArrowLeft') Lightbox.prev();
    if (e.key === 'ArrowRight') Lightbox.next();
});
