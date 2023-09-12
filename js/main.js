function updateDateTime() {
  var tanggalSekarang = new Date();
  var tanggal = tanggalSekarang.getDate();
  var bulan = tanggalSekarang.getMonth() + 1;
  var tahun = tanggalSekarang.getFullYear();
  var namaHari = [
    "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"
  ][tanggalSekarang.getDay()];
  var jam = tanggalSekarang.getHours();
  var menit = tanggalSekarang.getMinutes();
  var detik = tanggalSekarang.getSeconds();

  document.getElementById("tanggal").innerHTML =
    namaHari + ", " + tanggal + "-" + bulan + "-" + tahun;
  document.getElementById("jam").innerHTML = "Jam: " + jam + ":" + menit + ":" +detik;
}

// Memperbarui tanggal dan waktu setiap detik (1000 ms)
setInterval(updateDateTime, 1000);

// Panggil fungsi updateDateTime untuk menampilkan tanggal dan waktu awal
updateDateTime();
