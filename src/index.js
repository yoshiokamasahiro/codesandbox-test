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
// const name = "ぺえ";
// const age = 37;
// //私はぺえです。37歳です。

// //従来の方法
// const message1 = "私は" + name + "です。" + age + "歳です。";
// console.log(message1);

// //テンプレート文字列を用いた方法
// //`(バッククォート)=>shift + @
// const message2 = `私の名前は${name}です。${age}歳です。`;
// console.log(message2);

// //従来の関数
// function func1(str) {
//   return str;
// }
// console.log(func1("func1です"));

// function funcw(str2) {
//   return str2;
// }
// console.log(funcw("func2です"));

// function fuku(sttr) {
//   return sttr;
// }
// console.log(fuku("sttrですよ"));

// const funcs = function (ppp) {
//   return ppp;
// };
// console.log(funcs("ゾゾゾ"));

// //アロー関数
// const funcs2 = (Sppp) => {
//   return Sppp;
// };
// console.log(funcs2("funcs2です"));
// //単一処理の場合、returnを省略できる
// const plan = (eps) => eps;
// console.log(plan("プランです"));

// const names = ["cat", "dog"];
// console.log(names);

// const nums = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(nums(10, 20));

// const nums2 = (num3, num4) => num3 + num4;
// console.log(nums2(20, 20));

// // const num3 = (num5, num6) => {
// //   return num5 + num6;
// // };

// const num3 = (num5, num6) => num5 + num6;
// console.log(num3(20, 49));

/**
 * 分割代入
 */

// const myprofile = {
//   nameProf: "ぺ",
//   ageProf: 37
// };
// const messageMyProf01 = `私の名前は${myprofile.nameProf}です。年齢は${myprofile.ageProf}です。`;
// console.log(messageMyProf01);

// const { nameProf, ageProf } = myprofile;
// const messageMyProf02 = `私の名前は${nameProf}です。年齢は${ageProf}です。`;
// console.log(messageMyProf02);

// const myProfile = ["ぺ", 37, "男"];
// const messageMyprofile = `私は${myProfile[0]}です。${myProfile[1]}歳の${myProfile[2]}性です。`;
// console.log(messageMyprofile);

// const [namepro, agepro, sexpro] = myProfile;
// const messageMyprofile02 = `私は${namepro}です。${agepro}歳の${sexpro}性です。`;
// console.log(messageMyprofile02);

// const sayHello = (name) => console.log(`こんにちは、${name}さん。`);
// sayHello("ぺえ");

// const sayHello = (name) => console.log(`こんにちは${(name, "ぺり")}さん!`);
// sayHello();

// const sayHello = (name = "ひま") => console.log(`こんにちは、${name}さん`);
// sayHello("");
