// document.getElementById("leadForm").addEventListener("submit", function(e) {
//   e.preventDefault();
//   alert("Terima kasih telah mendaftar! Kami akan segera menghubungi Anda.");
//   this.reset();
// });

// document.getElementById('ticketForm').addEventListener('submit', function (e) {
//   e.preventDefault(); // cegah form kirim default

//   // Ambil nilai input
//   const name = document.getElementById('name').value.trim();
//   const email = document.getElementById('email').value.trim();
//   const phone = document.getElementById('phone').value.trim();

//   // Validasi manual (ekstra di luar required HTML)
//   if (!name || !email || !phone) {
//     alert("Semua kolom harus diisi!");
//     return;
//   }

//   // Tampilkan isi form
//   alert(
//     `Form berhasil dikirim!\n\nNama: ${name}\nEmail: ${email}\nNo. HP: ${phone}`
//   );

//   // Reset form setelah submit
//   this.reset();
// });

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('ticketForm');
  const tableBody = document.querySelector('#visitorTable tbody');

 const dummyVisitors = [
    { name: 'Andi Saputra', email: 'andi@gmail.com', phone: '081234567890' },
    { name: 'Rina Kartika', email: 'rina@email.com', phone: '082112223333' },
    { name: 'Budi Wijaya', email: 'budi.wijaya@yahoo.com', phone: '081355556789' },
    { name: 'Siti Marlina', email: 'siti.marlina@gmail.com', phone: '085612345678' },
    { name: 'Fajar Nugroho', email: 'fajar.nugroho@outlook.com', phone: '089812345678' }
  ];

  dummyVisitors.forEach(visitor => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${visitor.name}</td>
      <td>${visitor.email}</td>
      <td>${visitor.phone}</td>
    `;
    tableBody.appendChild(row);
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (!name || !email || !phone) {
      alert("Semua kolom harus diisi!");
      return;
    }

    // Tampilkan alert
    alert(`Form berhasil dikirim!\n\nNama: ${name}\nEmail: ${email}\nNo. HP: ${phone}`);

    // Tambahkan data ke tabel
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
      <td>${name}</td>
      <td>${email}</td>
      <td>${phone}</td>
    `;
    tableBody.appendChild(newRow);

    // Reset form
    form.reset();
  });
});
