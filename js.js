let a = 1;
let b = 2;
let c = 0;
for (let i = 0; i < 5; i++) {
  c = a + b;
  a = b;
  b = c;
  console.log(c);
}
