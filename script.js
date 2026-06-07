// GSAP Animation
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from(".jumbotron img", { duration: 2, y: -200, ease: "bounce" });
gsap.from(".display-4", { duration: 1, x: -50, opacity: 0, delay: 0.5, ease: "back" });
gsap.from("#jsBar", {
  width: "0%",
  duration: 3,
  ease: "power2.out",
});

// AOS
const galleryImage = document.querySelectorAll(".gallery-img");

galleryImage.forEach((img, i) => {
  img.dataset.aos = "fade-down";
  img.dataset.aosDelay = i * 100;
  img.dataset.aosDuration = 1000;
});
AOS.init();

// logika typing teks
let typed = new Typed("#typing", {
  strings: ["Informatics Engineering Student", "Pharmacy Staff", "Web Developer Enthusiast"],
  typeSpeed: 50, // Kecepatan mengetik
  backSpeed: 30, // Kecepatan menghapus
  backDelay: 2000, // Waktu tunggu sebelum menghapus (2 detik)
  loop: true, // Mengulang terus menerus
});

// Fungsi Utama untuk Update Bar, Warna, dan Angka
function updateProgressBar(id, textId, value) {
  const bar = document.getElementById(id);
  const text = document.getElementById(textId);

  if (!bar || !text) return; // Guard clause jika ID tidak ditemukan

  // 1. Bersihkan kelas warna Bootstrap sebelumnya
  bar.classList.remove("bg-danger", "bg-warning", "bg-success", "bg-info");

  // 2. Tentukan warna berdasarkan logika nilai
  if (value < 40) {
    bar.classList.add("bg-danger"); // Merah
  } else if (value >= 41 && value <= 60) {
    bar.classList.add("bg-warning"); // Kuning
  } else if (value > 61 && value <= 80) {
    bar.classList.add("bg-success"); // Hijau
  } else {
    bar.classList.add("bg-primary");
  }

  // 3. Animasi Bar Tumbuh dengan GSAP
  gsap.to(bar, {
    width: value + "%",
    duration: 2,
    ease: "power2.out",
  });

  // 4. Animasi Angka Berjalan (Counter) dengan GSAP
  let counter = { val: 0 };
  gsap.to(counter, {
    val: value,
    duration: 2,
    ease: "power2.out",
    onUpdate: function () {
      text.innerText = Math.ceil(counter.val) + "%";
    },
  });
}

// 5. Jalankan fungsi saat halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Panggil sesuai dengan ID yang Anda buat di HTML
  updateProgressBar("htmlBar", "htmlText", 90);
  updateProgressBar("cssBar", "cssText", 75);
  updateProgressBar("jsBar", "jsText", 70);
  updateProgressBar("phpBar", "phpText", 55);
});

// ============= Contact Form Google Sheet ==============
const scriptURL = "https://script.google.com/macros/s/AKfycbyvrg4vvGy73_H2BB9FRMLgpZpHM1Ja_mbupX9hJ_T-QvEiAk6PBYMcFGXWlc1Z_0lA/exec";
const form = document.forms["wildan-contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Menghentikan reload halaman

  // 1. Ambil nilai dari input (Penting: pakai .value)
  const nama = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;

  // 2. Logika Validasi (Jika ada yang kosong)
  if (nama === "" || email === "" || pesan === "") {
    alert("Tolong lengkapi dahulu datanya, Wildan!");
    return; // Berhenti di sini, jangan lanjut kirim ke Google Sheets
  }

  // 3. Jika sudah lengkap, baru jalankan Fetch ke Google Sheets
  console.log("Sedang mengirim data...");

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      console.log("Success!", response);
      alert("Terima kasih! Pesan Anda berhasil terkirim.");
      form.reset(); // Kosongkan form setelah berhasil
    })
    .catch((error) => {
      console.error("Error!", error.message);
      alert("Waduh, sepertinya ada masalah koneksi.");
    });
});
