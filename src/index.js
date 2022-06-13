/**
 * const,let等の変数宣言
 */
// var val1 = "var変数";
// console.log(val1);

// //var変数は上書き可能

// val1 = "変数変更";
// console.log(val1);

// //var変数再宣言可能

// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書きが可能
// val2 = "let変数は上書き可能";
// console.log(val2);

// //letは再宣言不可能
// let val2 = "let変数を再宣言"；

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// // val3 = "const変数は上書き不可";
// // console.log(val3);

// const val3 = "const変数は再宣言も不可";
// console.log(val3);

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "ぺぇ",
//   age: "37?"
// };
// //オブジェクト(val4)のプロパティ(name等)にアクセスする場合は.でつなぐ
// val4.name = "PEE";
// val4.birthPlace = "群馬";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// // val5[2] = "bird";
// val5.push("monky");
// val5.push("Lion");
// console.log(val5);
//【結論】オブジェクトや配列はconstで宣言していても中身を変更することができる

/**
 * テンプレート文字列
 */
const name = "ぺえ";
const age = 37;
//私はぺえです。37歳です。

//従来の方法
const message1 = "私は" + name + "です。" + age + "歳です。";
console.log(message1);

//テンプレート文字列を用いた方法
//`(バッククォート)=>shift + @
const message2 = `私の名前は${name}です。${age}歳です。`;
console.log(message2);
