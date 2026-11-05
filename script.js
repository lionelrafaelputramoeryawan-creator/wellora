const dataBerita = [
  {
    id: 1,
    judul: "Belajar DOM JavaScript",
    deskripsi:
      "Belajar cara mengakses dan memanipulasi elemen HTML menggunakan JavaScript.",
    isi: "DOM (Document Object Model) merupakan struktur yang memungkinkan JavaScript mengakses dan mengubah elemen HTML. Dengan DOM, kita dapat mengubah teks, warna, gambar, serta menambahkan interaksi pada halaman website. Contohnya adalah membuat tombol yang dapat mengubah teks ketika diklik.",
  },
  {
    id: 2,
    judul: "Website Interaktif",
    deskripsi: "Membuat website yang dapat berinteraksi dengan pengguna.",
    isi: "Website interaktif adalah website yang dapat merespons tindakan pengguna. Dengan menggunakan HTML, CSS, dan JavaScript, kita dapat membuat fitur seperti tombol, formulir, menu navigasi, dan animasi. Website interaktif memberikan pengalaman yang lebih menarik dan memudahkan pengguna dalam mengakses informasi.",
  },
  {
    id: 3,
    judul: "Template HTML",
    deskripsi:
      "Template dapat digunakan kembali untuk menampilkan konten secara dinamis.",
    isi: "Template HTML merupakan kerangka halaman website yang dapat digunakan kembali. Dengan template, pengembang tidak perlu membuat struktur HTML dari awal untuk setiap halaman. Template juga dapat dikombinasikan dengan JavaScript untuk menampilkan konten secara dinamis sehingga proses pembuatan website menjadi lebih cepat dan efisien.",
  },
  {
    id: 4,
    judul: "Artificial Intelligence",
    deskripsi:
      "Teknologi kecerdasan buatan yang membantu manusia dalam berbagai aktivitas.",
    isi: "Artificial Intelligence (AI) atau kecerdasan buatan merupakan teknologi yang memungkinkan komputer melakukan tugas yang biasanya membutuhkan kecerdasan manusia. AI dapat digunakan untuk mengenali gambar, memahami bahasa, memberikan rekomendasi, dan membantu menyelesaikan berbagai pekerjaan. Teknologi ini terus berkembang dan banyak digunakan dalam kehidupan sehari-hari.",
  },
  {
    id: 5,
    judul: "Keamanan Siber",
    deskripsi: "Melindungi data dan informasi pribadi dari ancaman digital.",
    isi: "Keamanan siber merupakan upaya melindungi sistem komputer, jaringan, dan data dari serangan digital. Ancaman seperti virus, phishing, dan pencurian data dapat membahayakan informasi pribadi. Oleh karena itu, pengguna internet perlu menggunakan kata sandi yang kuat, mengaktifkan autentikasi dua faktor, serta berhati-hati saat membuka tautan yang mencurigakan.",
  },
  {
    id: 6,
    judul: "Cloud Computing",
    deskripsi: "Teknologi penyimpanan dan pengelolaan data melalui internet.",
    isi: "Cloud computing adalah teknologi yang memungkinkan pengguna menyimpan dan mengakses data melalui internet tanpa harus bergantung pada perangkat penyimpanan lokal. Teknologi ini memudahkan pengguna dalam berbagi file, menjalankan aplikasi, dan mengelola data dari berbagai perangkat. Contoh layanan cloud computing adalah Google Drive, Microsoft Azure, dan Amazon Web Services.",
  },
];

// Mengambil elemen template dari HTMl
const template = document.getElementById("template");
const daftarKartu = document.getElementById("daftar-kartu");

// Memastikan elemen tersedia
if (daftarKartu && template) {
  // Mengulang seluruh data berita
  dataBerita.forEach(({ id, judul, deskripsi }) => {
    // Membuat salinan template html yg akan diisi dengan data berita
    const templateClone = template.content.cloneNode(true);

    // Mengambil elemen article dari salinan template dan mengisi datanya
    const kartu = templateClone.querySelector(".kartu");
    kartu.href = `detail-berita.html?id=${id}`;

    // Mengisi data
    kartu.querySelector(".judul").textContent = judul;
    kartu.querySelector(".deskripsi").textContent = deskripsi;

    // Menambahkan kartu ke dalam daftar kartu
    daftarKartu.appendChild(kartu);
  });
}

// MENAMPILKAN DETAIL BERITA

// Mengambil elemen detail berita
const detailBerita = document.getElementById("detail-berita");

// Memastikan elemen detail berita tersedia
if (detailBerita) {
  // Mengambil parameter dari URL
  // URL kita berisi detail-berita.html?id=1, maka isi dari variabel parameter = ?id=1
  const parameter = new URLSearchParams(window.location.search);

  // Mengambil id dari parameter
  const idBerita = parameter.get("id");

  // mencari berita berdasarkan id
  const berita = dataBerita.find((item) => item.id === parseInt(idBerita));


// memastikan berita ditemukan
if (berita) {
  // mengambil elemen html
  const judulBerita = document.getElementById("judul-berita");
  const deskripsiBerita = document.getElementById("info-berita");
  const isiBerita = document.getElementById("isi-berita");

  // mengisi data setiap elemen
  judulBerita.textContent = berita.judul;
  deskripsiBerita.textContent = berita.deskripsi;
  isiBerita.textContent = berita.isi;

  detailBerita.hidden = false;
}}


