var kq = 832;
var soLanLap = 1;
var myNumber = getRandomIntInclusive(0, 999);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// while (myNumber != kq){
  // myNumber = getRandomIntInclusive(0, 999);
  // console.log('Lan mua thu ' + soLanLap + ': ' + myNumber);
  // soLanLap++;
// }

// do {
//   myNumber = getRandomIntInclusive(0, 999);
//   console.log('Lan mua thu ' + soLanLap + ': ' + myNumber);
//   soLanLap++;
// } while (myNumber != kq);
for(;;){
  if(myNumber == kq) break;
  myNumber = getRandomIntInclusive(0, 999);
  soLanLap++;
}

console.log('Trung giai sau ' + soLanLap);
