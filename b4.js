function addWithTen(a){
  return function() {
    return a + 10;
  }
}

console.log(addWithTen(1)());

function c( dieuKien, func1, func2 ){
  if(dieuKien){
    func1()
  }else{
    func2()
  }
}

function a(){
  console.log('F1');
}

function b(){
  console.log('F2');
}

c(true, a, b);
