// 3 mashq
let bekorQilish = true;
let yuborishTaymeri = null;

console.log("Xabar rejalashtirildi");

yuborishTaymeri = setTimeout(() => {
  console.log("habar guruhga yuborildi");
}, 5000);

if (bekorQilish) {
  setTimeout(() => {
    clearTimeout(yuborishTaymeri);
    console.log("habar yuborish bekor qilindi");
  }, 2000);
}
