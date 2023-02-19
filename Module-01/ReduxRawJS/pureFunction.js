const value = {
  a : 10
}

const impure = () =>{
  return value.a = value.a * 2
}


impure()
impure()
console.log(value.a);


let b = 10;
let c = 20;

function a() {
  return b * c;
}

console.log(b, c);