// HTML elementlerini seçiyoruz
const heart = document.getElementById('neonHeart');
const message = document.getElementById('message');

// Kalbe tıklama olayını dinliyoruz
heart.addEventListener('click', () => {
    // Mesajın CSS sınıfını 'visible' olarak değiştirerek görünür yapıyoruz
    message.classList.add('visible');

    // İsteğe bağlı: Mesajı bir süre sonra gizlemek isterseniz (5 saniye sonra gizler)
    setTimeout(() => {
        message.classList.remove('visible');
    }, 5000); 
});
