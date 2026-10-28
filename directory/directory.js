const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]',
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl),
);

// FUNGSI PECARIAN TUGAS
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const cards = document.querySelectorAll(".card-matkul"); // Sesuaikan dengan class card kamu

  searchInput.addEventListener("keyup", function (e) {
    const searchTerm = e.target.value.toLowerCase();

    cards.forEach((card) => {
      // Ambil semua teks di dalam card (judul, deskripsi, dll)
      const cardText = card.textContent.toLowerCase();

      // Jika teks di card mengandung kata kunci pencarian
      if (cardText.includes(searchTerm)) {
        // Tampilkan card
        card.parentElement.style.display = "";
      } else {
        // Sembunyikan card (kita sembunyikan parent-nya yaitu div.col-12)
        card.parentElement.style.display = "none";
      }
    });
  });
});
