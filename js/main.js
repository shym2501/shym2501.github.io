// Membuat objek tanggal dan waktu saat ini
var tanggalSekarang = new Date();

// Mendapatkan tanggal dalam format DD-MM-YYYY
var tanggal = tanggalSekarang.getDate();
var bulan = tanggalSekarang.getMonth() + 1; // Perhatikan bahwa bulan dimulai dari 0 (Januari adalah 0)
var tahun = tanggalSekarang.getFullYear();

// Mendapatkan hari dalam format nama hari
var namaHari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"][
  tanggalSekarang.getDay()
];

// Mendapatkan jam, menit, dan detik dalam format HH:MM:SS
var jam = tanggalSekarang.getHours();
var menit = tanggalSekarang.getMinutes();

// Menampilkan tanggal, hari, dan jam di elemen HTML
document.getElementById("tanggal").innerHTML =
namaHari + ", " + tanggal + "-" + bulan + "-" + tahun;
document.getElementById("jam").innerHTML =
  "Jam: " + jam + ":" + menit;
