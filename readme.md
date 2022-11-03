# __PlugBase__  <_alpha1.0.0_>
### web3.0へ向けて

## 使い方
plugBaseモジュールを使います
```js
const plugBase = require("./plugBase/plugbase");
```
> ### __保存の仕方__
保存には`baseCreate`関数を使います。
では例を見てみましょう。
```js
table_id = plugBase.baseCreate(
  {
    data:[
      {label: "user", data: "Satouyuya"},
      {label: "pass", data: "Omaemona"}
    ], 
    table: "account",
    num: "1"
  }
);
```
まず、`data`というリストを作成し、その中に保存したいデータをぶち込むわけですが、
そのデータを識別するための`label`と一緒にぶち込みましょう。
```js 
[{label: "識別用の文字列", data: "データ"}]
```
そして、それらを保存するテーブルを指定しましょう。
テーブルはなかった場合自動で生成されます。
```js
({table: "テーブル"})
```
そして、最後にそれらのデータが何個あるかを0から数えて`num`に記録してください。
```js
({num: "データの個数"})
```
書き込みに終了するとtable_idが戻り値として送られてきます。
これらはデータを取得する際に使いますので大切に取っておきましょう。

> ### __取得の仕方__
保存には`baseGet`関数を使います。
では例を見てみましょう。
```js
data = plugBase.baseGet(
  {
    data_label: "user",
    table_id: "1667433957443_Satouyuya",
    table: "account"
  }
);
```


ますはデータを保存する際にしようしたlabelを使います。
```js 
[{data_label: "識別用の文字列"}]
```
次に保存した際に戻り値として戻ってきたtable_idを代入します
```js 
[{table_id: "テーブルID"}]
```
最後にテーブルを指定します。
```js 
[{table: "account"}]
```