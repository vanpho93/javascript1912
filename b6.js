// var mang = new Array(101);
// mang[101] = 1;
// var tong = 0;
// mang.forEach(function(e, i){
//   console.log(i);
//   tong += i;
// })
//
// console.log(tong);

function add(i){
 return i==0 ? 0 : i + add(--i)
}

console.log(add(100));
