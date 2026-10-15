//  5mashq

const treklar = ["Lofi tong", "Yomg'ir ovozi", "Tinch ritm", "Kechki fokus"];
let indeks = 0;

console.log("pleylist boshlandi");

const interval = setInterval(() => {
  console.log(`Trek: ${treklar[indeks]}`);
  indeks++;

  if (indeks === treklar.length) {
    clearInterval(interval);
    console.log("Pleylist tugadi");
  }
}, 2000);
