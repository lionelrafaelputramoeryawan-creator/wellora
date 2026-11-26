const dataBerita = [
  {
    id: 1,
    judul: "5 Langkah Memulai Pola Makan Sehat Tanpa Diet Menyiksa",
    deskripsi:
      "Pelajari cara menyeimbangkan porsi karbohidrat, protein, dan serat harian secara bertahap tanpa perlu rasa lapar berlebihan.",
    isi: "DOM (Document Object Model) merupakan struktur yang memungkinkan JavaScript mengakses dan mengubah elemen HTML. Dengan DOM, kita dapat mengubah teks, warna, gambar, serta menambahkan interaksi pada halaman website. Contohnya adalah membuat tombol yang dapat mengubah teks ketika diklik.",
  },
  {
    id: 2,
    judul: "Berapa Langkah Kaki yang Sebenarnya Dibutuhkan Tubuh ?",
    deskripsi: "Kupas tuntas mitos 10.000 langkah dan fakta ilmiah tentang kebutuhan gerak harian untuk menjaga kesehatan jantung dan stamina.",
    isi: "Angka 10.000 langkah populer sebagai target aktivitas harian, tetapi bukan angka wajib bagi semua orang. Sasaran 7.000–10.000 langkah per hari dapat menjadi acuan bagi kebanyakan orang dewasa. Mulailah dari tingkat aktivitas yang sesuai kemampuan, tingkatkan secara bertahap, dan padukan dengan jalan cepat atau naik tangga.",
  },
  {
    id: 3,
    judul: "Rahasia Tidur Nyenyak Demi Produktivitas Maksimal",
    deskripsi:
      "Kualitas tidur menentukan metabolisme tubuh. Terapkan 4 kebiasaan malam ini untuk bangun dengan energi penuh keesokan hari",
    isi: "Template HTML merupakan kerangka halaman website yang dapat digunakan kembali. Dengan template, pengembang tidak perlu membuat struktur HTML dari awal untuk setiap halaman. Template juga dapat dikombinasikan dengan JavaScript untuk menampilkan konten secara dinamis sehingga proses pembuatan website menjadi lebih cepat dan efisien.",
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

// Mengambil elemen detai berita
const detailBerita = document.getElementById("detail-berita");