// Toggle Menu Mobile
const menu = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#navLinks');

menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Tambahkan CSS .active di style.css jika ingin menu muncul di mobile
    alert("Menu Mobile akan dikembangkan!"); 
});

// Fungsi Order
function orderNow(planName) {
    alert("Anda memilih paket: " + planName + " Hosting. Mengalihkan ke pembayaran...");
}
