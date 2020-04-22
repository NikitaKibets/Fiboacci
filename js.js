let a = 1;
let b = 2;
let c = 0;
for (let i = 0; i < 5; i++) {
  c = a + b;
  a = b;
  b = c;
  console.log(c);
}
//------- one more-------------

let counter = 0;
function func(prevPrevNum, prevNum) {
let sum = prevPrevNum + prevNum;
prevPrevNum = prevNum;
prevNum = sum;
console.log(sum);

counter++
if (counter < 10) {
func(prevPrevNum, prevNum);
}
};

func(1, 2);
