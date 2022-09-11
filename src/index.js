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

// const myProf = ["ぺ", 12];
// const message12 = `私は${myProf[0]}です。在籍${myProf[1]}年です。`;
// console.log(message12);

// const [name, worksAge] = myProf;
// const message14 = `私は${name}です。在籍${worksAge}年です。`;
// console.log(message14);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ぼんた") => console.log(`こんにちは${name}さん`);
// sayHello();

/**
 * スプレット 構文 ... =>順番に処理
 * 元の参照を引き継ぐ
 */
/**
 * 配列の展開
 */
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// // console.log(arr1[0] + arr1[1]);
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);
/**
 * まとめる
 */
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// //console.log(arr6);
// // const arr8 = (arr4, arr5) => console.log(arr4 + arr5);
// // arr8(...arr5);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = [...arr4];
// arr8[0] = 200;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["鶴", "亀", "猫"];
// for(let index = 0; index < nameArr.length; index++){
//   console.log(`${index}番目は、${nameArr[index]}です。`);
// }
// for(let index = 0; index < nameArr.length; index++){
//   console.log(nameArr[index]);
// };
//map
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//nameArr.map((name) => console.log(name));
// nameArr.map((ppp, name) => console.log(`${name + 1}番目は${ppp}です。`));

//filter
// const numArr = [1, 2, 3, 4, 5];
// const numArrOdd = numArr.filter((nameOdd) => {
//   return nameOdd % 2 === 1; //奇数
//   // return nameOdd % 2 === 0; //偶数
// });
// console.log(numArrOdd);

//猫以外をさん付けで表示
// const newNameArr = nameArr.map((name) => {
//   if (name === "猫") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
//ある条件 ? 条件がtrueの時 : 条件がfalseの時 ;
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// const formattNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100より大きいです" : "許容範囲です";
// };
// console.log(checkSum(71, 30));

/**
 * 論理演算子の本当の意味を知ろう || &&
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  //または
  console.log("1か2はtrueになります。");
}
if (flag1 && flag2) {
  //かつ
  console.log("1も2もtrueになります。");
}

// ||は左が側falseだったら右側を返す
const num = 200;
const fee = num || "金額未設定です。";
console.log(fee);

// && は左側がtrueなら右側を返す
const num2 = 100;
const fee23 = num2 && "何か設定されました。";
console.log(fee23);
