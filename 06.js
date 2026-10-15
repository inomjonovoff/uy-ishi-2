//  6 mashq

let energiya = 0;
let qadam = 20;
console.log(`Energiya: ${energiya}%`);

const interval = setInterval(() => {
  energiya += qadam;

  if (energiya >= 100) {
    energiya = 100;
  }

  console.log("Energiya to'ldi ", energiya, "%");

  if (energiya === 100) {
    clearInterval(interval);
    console.log("Energiya to'ldi");
  }
}, 1000);
