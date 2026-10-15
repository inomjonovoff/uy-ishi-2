//  4mashq
let qolganVaqt = 5;
console.log(`Qoldi: ${qolganVaqt}`);

const interval = setInterval(() => {
  qolganVaqt--;
  console.log(`Qoldi: ${qolganVaqt}`);

  if (qolganVaqt === 0) {
    clearInterval(interval);
    console.log("O'yin boshlandi!");
  }
}, 1000);
