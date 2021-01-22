// // DOM操作（JavaScriptからフォームに入力されたデータを取得したり、HTMLを変更したりすること）

// const box = document.getElementById('box');

// for (let i = 0; i < 5; i++) {
//   const p = document.createElement('p'); // p要素をつくる

//   p.textContent = 'こんにちは'; // p要素の中に、テキストを入れる
//   p.setAttribute('class', 'bordered'); // p要素にclass属性を追加する
//   box.appendChild(p); // id="box"のdiv要素に、p要素を追加する
// }

// -----------------------------------------------

// 電卓

// 各種定義
const buttonAdd = document.getElementById(`button-add`);
const buttonSub = document.getElementById(`button-sub`);
const buttonMul = document.getElementById(`button-mul`);
const buttonDiv = document.getElementById(`button-div`);
const num1 = document.getElementById(`num1`);
const num2 = document.getElementById(`num2`);

// 数値に修正
const getNum1 = () => {
  const numberNum1 = Number.parseFloat(num1.value);
  return numberNum1
};
const getNum2 = () => {
  const numberNum2 = Number.parseFloat(num2.value);
  return numberNum2
};

// 計算後の値の表示
const showResult = (num) => {
  document.getElementById('box').textContent = num;
}; //innerHTMLでも代替可

// 足し算
buttonAdd.addEventListener(`click`, () => {
  const result = getNum1() + getNum2();
  showResult(result);
});

// 引き算
buttonSub.addEventListener(`click`, () => {
  const result = getNum1() - getNum2();
  showResult(result);
});

// 掛け算
buttonMul.addEventListener(`click`, () => {
  const result = getNum1() * getNum2();
  showResult(result);
});

// 割り算
buttonDiv.addEventListener(`click`, () => {
  const result = getNum1() / getNum2();
  showResult(result);
});