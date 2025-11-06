// Set minumum tanggal hari ini

const tanggalInput = document.getElementById('tanggal');
if (tanggalInput) {
    const today = new Date().toISOString().split('T')[0];
    tanggalInput.setAttribute('min', today);
}

// Pngiriman formulir
const konsultasiForm = document.getElementById('konsultasiForm');
if (konsultasiForm) {
    konsultasiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Ambil data formulir
        const formData = {
            nama: document.getElementById('nama').value,
            email: document.getElementById('email').value,
            telepon: document.getElementById('telepon').value,
            umur: document.getElementById('umur').value,
            jenisKelamin: document.getElementById('jenis-kelamin').value,
            spesialisasi: document.getElementById('spesialisasi').value,
            keluhan: document.getElementById('keluhan').value,
            tanggal: document.getElementById('tanggal').value,
            waktu: document.getElementById('waktu').value
        };
        
        // Tampilkan ringkasan janji konsultasi
        alert(`Terima kasih ${formData.nama}!\n\nJanji konsultasi Anda telah dibuat:\n\nSpesialisasi: ${formData.spesialisasi}\nTanggal: ${formData.tanggal}\nWaktu: ${formData.waktu}\n\nKami akan mengirimkan konfirmasi ke email Anda.`);
        
        // Reset formulir
        konsultasiForm.reset();
        
        // Alihkan ke halaman utama setelah 2 detik
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
}