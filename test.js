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

// オブジェクト
const blueMeaning = '進め';
const yellowMeaning = '基本は止まれ';
const redMeaning = '止まれ';
const trafficLight = {
  blue: blueMeaning,
  yellow: yellowMeaning,
  red: redMeaning,
};
console.log(trafficLight);

const blue = '進め';
const yellow = '基本は止まれ';
const red = '止まれ';
const trafficLight1 = {
  blue,
  yellow,
  red,
};
console.log(trafficLight1);

const person = {
  name: '桃太郎',
  age: 7,
};
let key = 'name';
console.log(person[key]); // コンソールに「桃太郎」と表示される
key = 'age';
console.log(person[key]); // コンソールに「7」と表示される

// const person = {
//   name: '桃太郎',
//   age: 7,
// };
// const nickname = 'name';
// console.log(person.nickname); // コンソールに「undefined」と表示される
// ドット記法では変数を使ってプロパティにアクセスすることはできない

const person1 = {
  name: '桃太郎',
  age: 7,
};
const personName = person1.name;
console.log(personName); // コンソールに「桃太郎」と表示される

const person2 = {
  name: '桃太郎',
  age: 7,
};
person2.enemy = '鬼';// プロパティの追加
console.log(person2);

const person3 = {
  name: '桃太郎',
  age: 7,
};
console.log(person3);
delete person3.age; // プロパティの削除
console.log('ageプロパティを削除した後：', person3);

const person4 = {
  name: '桃太郎',
  greet: function() {
    console.log('こんにちは！');
  },
};
person4.greet(); // greetメソッドを呼び出す

// 練習
const animal = {
  name: '犬',
  voice: 'ワン！',
  bark() {
    console.log(`${this.name}は${this.voice}と鳴く`);
  },
};
animal.bark();

// 非同期処理
console.log(setTimeout(() => {
  console.log('呼んだ？');
}, 1000));
console.log(setTimeout(() => {
  console.log('呼んだ？');
}, 1000));
console.log(setTimeout(() => {
  console.log('呼んだ？');
}, 1000)); // それぞれの戻り値が最初に表示される

console.log('A');
setTimeout(() => {
  console.log('B');
}, 0);
console.log('C'); // setTimeoutは、設定値が０でも最後に処理される（非同期処理）


// Arrayオブジェクト
const members = ['桃太郎', 'イヌ', 'サル', 'キジ'];
function addRespect(member) {
    console.log(member + 'さん');
}
members.forEach(addRespect);
members.forEach((member) => {
  console.log(`${member}さん`);
}); // forEachで繰り返しの表示

function addRespect1(member) {
  return `${member}さん`;
}
const greatMembers = members.map(addRespect1);
console.log(greatMembers); // mapで新しい配列を作成

const dogs = ['柴犬', 'チワワ', 'トイプードル'];
const cats = ['ペルシャ', 'ロシアンブルー', 'シャム'];
const pets = dogs.concat(cats);
console.log(pets); //concatによる配列の連結

const pets2 = [];
pets2.push(dogs);
pets2.push(cats);
console.log(pets2); //pushにより、それぞれの配列のまま連結

const pets3 = [];
pets3.push(...dogs);
pets3.push(...cats);
console.log(pets3); //スプレッド構文により、展開して一つの配列にする


// Objectオブジェクト

// -Object.kesメソッド（配列のプロパティのみを抽出して配列）
const personProperties = Object.keys(person);
console.log(personProperties);

// -person[key]を使用して、プロパティの値を抽出
personProperties.forEach((key) => {
  console.log(person[key]);
});

Object.keys(person).forEach((key) => {
  console.log(person[key]);
});


// Stringオブジェクト

// -sliceメソッド
const name_momo = '桃太郎さん';
console.log(name_momo.slice(1, 3));
console.log(name_momo.slice(1)); // 終わりの指定がなければ、最後まで指定される
console.log(name_momo.slice(-2));


