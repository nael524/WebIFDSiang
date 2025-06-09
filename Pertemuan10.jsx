const daftarTeks = [" HORORR", " ROMANCE", " COMEDYY", " ANDERNALINE"];
let indeksTeks = 0;
const elemenTeks = document.getElementById("refresh");

setInterval(() => {
  indeksTeks = (indeksTeks + 1) % daftarTeks.length;
  elemenTeks.textContent = daftarTeks[indeksTeks];
}, 4000);

const teks =
  "Halo! Selamat datang di website nael disini hanya untuk orang yang ingin belajar Website.";
const elemenKetik = document.getElementById("teks");

let indeksKetik = 0;

function ketikHuruf() {
  if (indeksKetik < teks.length) {
    elemenKetik.textContent += teks.charAt(indeksKetik);
    indeksKetik++;
    setTimeout(ketikHuruf, 100);
  }
}

ketikHuruf();
