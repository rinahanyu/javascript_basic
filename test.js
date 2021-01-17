const name = '太郎';
console.log(name);

// name = '花子さん'; 定数は変更できない
// console.log(name);

console.log('Hello \' World!'); //「Hello ' World!」と表示される

console.log("123\n456\n789");

console.log('111' + 222);

const hello = 'こんにちは、' + name + 'さん';
console.log(hello);

const goodEvening = 'こんばんは、' + name + 'さん';
console.log(goodEvening);

const numbers = `123
456
789`;
console.log(numbers);

const hello_ = `こんにちは、${name}さん`;
console.log(hello_);

function helloConsole() { // 関数を定義する
  console.log('こんにちは！');
}

helloConsole(); // 関数を呼び出す
helloConsole(); // 関数を呼び出す


function greeting() {
  const hour = new Date().getHours(); // 現在の時間を取得
  if( hour <= 11 ) {
    return 'おはようございます。'; // 午前中なので、朝の挨拶を返す
  }
  return 'こんにちは。'; // 午後（12時以降）なので、お昼の挨拶を返す
}

console.log(greeting());  // 関数を呼び出す

const aisatu = greeting();

console.log('太郎さん、' + aisatu);// 太郎さんという文字列と変数の値をコンソールに表示する
console.log('花子さん、' + aisatu);// 花子さんという文字列と変数の値をコンソールに表示する


function findTriangleArea(a, b) {
  const area = a * b / 2;
  return area;
}

console.log(findTriangleArea(5, 2));

// 無名関数
const add_ = function (x, y) { // 無名関数を定義して、変数に代入する
  const sum = x + y;
  return sum;
}

const result = add_(2, 3);
console.log(result);

// アロー関数
const add = (x, y) => { // アロー関数を定義して、変数に代入する
  const sum = x + y;
  return sum;
};
const result_ = add(2, 3);
console.log(result_);

const add2 = (x, y) => x + y;
const result2 = add2(2, 3);
console.log(result2);

const double = x => x * 2;
const result3 = double(5);
console.log(result3);

// 条件分岐
const result1 = 10 < 3;
if (!result1) {
  console.log('yes');
} else {
  console.log('no');
}

const num = 1;
if (num < 3 || num >= 7) { // numが3未満または7以上の場合
  console.log('ok');
}

const result4 = undefined;
if (result4) {
  console.log('truthy');
} else {
  console.log('falsy');
}

// 配列
const numbers_ = [1, 2, 3, 4, 5, 7, 10];
let total = 0;

for (let i = 0; i < numbers_.length; i++) {
  console.log(`${i + 1}回目のループ: 小計 = ${total} + ${numbers_[i]}`);
  total += numbers_[i];
}
console.log(`合計: ${total}`);

// FizzBuzz問題
for (let i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log('FizzBuzz');
  } else if(i % 3 == 0) {
    console.log('Fizz');
  } else if(i % 5 == 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}