function addWithTen(a){
  return function() {
    return a + 10;
  }
}

console.log(addWithTen(1)());

function c( dieuKien, func1, func2 ){
  // if(dieuKien){
  //   func1()
  // }else{
  //   func2()
  // }
  // var d = dieuKien?func1:func2;
  // d();
  dieuKien?func1('abcd'):func2('efgh');
}

//github.com/vanpho93

function a(g){
  console.log('F1 ' + g);
}

function b(h){
  console.log('F2 ' + h);
}

c(false, a, b);
