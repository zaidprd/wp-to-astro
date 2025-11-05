// src/data/menu.ts
// KODE LENGKAP - MENU "LAYANAN" DIJADIKAN LINK BIASA

export const headerMenu = [
    { name: 'Home', link: '/' },
    { 
        name: 'Layanan', 
        link: '/layanan', 
        // --- 👇 PERUBAHAN UTAMA DI SINI 👇 ---
        showArrow: false, // Panah dropdown dihilangkan
        // Array 'children' dihapus sepenuhnya
    },
    { name: 'Portofolio', link: '/portofolio' },
    { name: 'Blog', link: '/blog' },
    { name: 'Kontak', link: '/contact-us' },
];

// Menu Footer (tidak diubah, sudah benar)
export const footerMenu = [
    { name: 'Home', link: '/' },
    { name: 'Layanan', link: '/layanan' },
    { name: 'Blog', link: '/blog' },
    { name: 'Kontak', link: '/contact-us' },
];


