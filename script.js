// GSAP Animation
gsap.from(".navbar", { duration: 1.5, y: "-100%", opacity: 0, ease: "bounce" });
gsap.from(".jumbotron img", { duration: 2, y: -200, ease: "bounce" });
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

const linkedin = document.getElementById("linkedin");

linkedin.addEventListener("click", () => {
  alert("Linkedin Belum tersedia, Terimakasih!");
});
