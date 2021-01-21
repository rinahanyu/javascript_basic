// // jsでHTMLの書き換え

// --------------------------------------------------

// // -getElementById() メソッド・・・指定した名前のid属性を持つHTMLの要素をオブジェクトとして取得
// document.getElementById('box').textContent = 'こんにちは！';

// // -時刻の表示
// document.getElementById('box').textContent = new Date().toLocaleString();

// // -文字列の連結
// document.getElementById('box').textContent = 'abc' + 'def';

// // -数値計算
// document.getElementById('box').textContent = 1 + 2;


// // <イベント>
// const button = document.getElementById('my-button');

// button.addEventListener('click', () => {
//   alert('押された！');
// });

// // -仮引数でのイベント設定
// button.addEventListener('click', (e) => {
//   console.log('イベントの種類：', e.type);
// });

// --------------------------------------------------

// // -mouse関係イベント
// const box = document.getElementById('box');

// // マウスが乗った時
// box.addEventListener(
//   'mouseenter',
//   // e.targetはイベント発生元の要素（<div id="box">）
//   (e) => {
//     e.target.textContent = 'マウスが乗った！';
//   }
// );

// // マウスが離れた時
// box.addEventListener(
//   'mouseleave',
//   (e) => {
//   e.target.textContent = 'マウスが離れた！';
//   }
// );

// --------------------------------------------------

// -changeイベント
// const select = document.getElementById('my-select');

// select.addEventListener('change', (e) => {
//   console.log('value: ', e.target.value);
// });

// --------------------------------------------------

// -submitイベント
// const input = document.getElementById('input-word');
// const form = document.getElementById('my-form');

// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('value: ', input.value);
// });
// ※e.preventDefault(); は、フォームの送信され、リロードされるのを止めるために記述

// --------------------------------------------------

// -イベントにもともと設定されている動きを止める
// const link = document.getElementById('my-link');

// link.addEventListener('click', (e) => {
//   e.preventDefault();
// });

// --------------------------------------------------

// -バブリングフェーズ（イベントが上位の要素へと伝わる段階）
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// parent.addEventListener('click', () => {
//   console.log('親要素のイベントリスナー');
// });
// child.addEventListener('click', () => {
//   console.log('子要素のイベントリスナー');
// });

// --------------------------------------------------

// -ボタン
// const button = document.getElementById('my-button');
// const box = document.getElementById('box');

// button.addEventListener('click', () => {
//   box.innerHTML += 'どん！<br>';
// });
// ※testContentとの違いは、``内を文字列として処理されるか、HTMlとして処理されるか
// ※A += B は、 A = A + B を省略した書き方。文字列と一緒に使った場合は、A の既存の内容を消さずに B を後ろに追加する。

// --------------------------------------------------

// フォームに入力された値を受け取る
// const button = document.getElementById('button-greeting');
// const input = document.getElementById('name');
// const box = document.getElementById('box');

// button.addEventListener('click', () => {
//   const name = input.value;
//   box.textContent = `こんにちは、${name}さん`;
// });

// --------------------------------------------------

// if文で表示内容の切替
// 複数のボタンをつける
// 関数を作る
// const button = document.getElementById('button-greeting');
// const buttonCheerful = document.getElementById('button-cheerful');
// const input = document.getElementById('name');
// const box = document.getElementById('box');

// const greet = () => {
//   let greeting;
//   const hour = new Date().getHours();

//   if (hour >= 6 && hour < 12) {
//     greeting = 'おはよう';
//   } else if (hour >= 12 && hour < 18) {
//     greeting = 'こんにちは';
//   } else {
//     greeting = 'こんばんは';
//   }

//   return greeting;
// };

// button.addEventListener('click', () => {
//   const name = input.value;
//   const greeting = greet();

//   // ------------以下をまとめて、greet関数作成----------------
//   // const hour = new Date().getHours();
//   // let greeting;

//   // console.log(`現在の時間：${hour}時`);

//   // if (hour >= 6 && hour < 12) {
//   //   greeting = 'おはよう';
//   // } else if (hour >= 12 && hour < 18) {
//   //   greeting = 'こんにちは';
//   // } else {
//   //   greeting = 'こんばんは';
//   // }
//   // -----------------------------------------

//   box.textContent = `${greeting}、${name}さん`;
// });

// buttonCheerful.addEventListener('click', () => {
//   const name = input.value;
//   const greeting = greet();

//   // ------------以下をまとめて、greet関数作成----------------
//   // const hour = new Date().getHours();
//   // let greeting;

//   // console.log(`現在の時間：${hour}時`);

//   // if (hour >= 6 && hour < 12) {
//   //   greeting = 'おはよう';
//   // } else if (hour >= 12 && hour < 18) {
//   //   greeting = 'こんにちは';
//   // } else {
//   //   greeting = 'こんばんは';
//   // }
//   // -----------------------------------------

//   box.textContent = `${greeting}！、${name}さん！！！`;
// });

// --------------------------------------------------

// 処理を遅らせて実行
// const buttonGreeting = document.getElementById('button-greeting');
// const buttonCheerful = document.getElementById('button-cheerful');
// const buttonLate = document.getElementById('button-late');

// const input = document.getElementById('name');
// const box = document.getElementById('box');

// const greet = () => {
//   let greeting;
//   const hour = new Date().getHours();

//   if (hour >= 6 && hour < 12) {
//     greeting = 'おはよう';
//   } else if (hour >= 12 && hour < 18) {
//     greeting = 'こんにちは';
//   } else {
//     greeting = 'こんばんは';
//   }

//   return greeting;
// };

// buttonGreeting.addEventListener('click', () => {
//   const name = input.value;
//   const greeting = greet();

//   box.textContent = `${greeting}、${name}さん`;
// });

// buttonCheerful.addEventListener('click', () => {
//   const name = input.value;
//   const greeting = greet();

//   box.textContent = `${greeting}！、${name}さん！！！`;
// });

// buttonLate.addEventListener('click', () => {
//   const name = input.value;

//   setTimeout(() => {
//     // 1秒経過した後に実行される
//     box.textContent = `遅れてごめん、${name}さん`;
//   }, 1000);
// });

// --------------------------------------------------

// ループ（繰り返し処理）
// const box = document.getElementById('box');

// // 10回繰り返す
// for (let i = 1; i <= 10; i++) {
//   box.innerHTML += `${i}<br>`;
// }

// --------------------------------------------------

// ランダム要素
// const button = document.getElementById('my-button');
// const box = document.getElementById('box');

// button.addEventListener('click', () => {
//   // 0以上1未満のランダムな数値をnum変数に代入する
//   const num = Math.random();

//   if (num >= 0.5) {
//     // numが0.5以上の場合
//     box.innerHTML = `${num}<br>当たり！`;
//   } else {
//     // numが0.5未満の場合
//     box.innerHTML = `${num}<br>ハズレ…`;
//   }
// });

// --------------------------------------------------

// フォームの入力を受け取って足し算
// const buttonAdd = document.getElementById('button-add');
// const box = document.getElementById('box');
// const num1 = document.getElementById('num1');
// const num2 = document.getElementById('num2');

// buttonAdd.addEventListener('click', () => {
//   // const result = num1.value + num2.value;
//   const numberNum1 = Number.parseFloat(num1.value); //文字列から数値へ
//   const numberNum2 = Number.parseFloat(num2.value);
//   const result = numberNum1 + numberNum2;
//   box.textContent = result;
// });
