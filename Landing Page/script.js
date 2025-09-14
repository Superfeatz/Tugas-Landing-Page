// document.getElementById("leadForm").addEventListener("submit", function(e) {
//   e.preventDefault();
//   alert("Terima kasih telah mendaftar! Kami akan segera menghubungi Anda.");
//   this.reset();
// });

document.getElementById('ticketForm').addEventListener('submit', function (e) {
  e.preventDefault(); // cegah form kirim default

  // Ambil nilai input
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  // Validasi manual (ekstra di luar required HTML)
  if (!name || !email || !phone) {
    alert("Semua kolom harus diisi!");
    return;
  }

  // Tampilkan isi form
  alert(
    `Form berhasil dikirim!\n\nNama: ${name}\nEmail: ${email}\nNo. HP: ${phone}`
  );

  // Reset form setelah submit
  this.reset();
});
