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

// バブリングフェーズ（イベントが上位の要素へと伝わる段階）
const parent = document.getElementById('parent');
const child = document.getElementById('child');

parent.addEventListener('click', () => {
  console.log('親要素のイベントリスナー');
});
child.addEventListener('click', () => {
  console.log('子要素のイベントリスナー');
});