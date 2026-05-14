# inherits


ブラウザ環境に適した継承機能であり、Node.js標準の[util.inherits](https://nodejs.org/api/util.html#utilinheritsconstructor-superconstructor)と完全な互換性があります。

## 機能

- ブラウザ環境でNode.js標準の `util.inherits` APIを提供します。
- 古い環境をサポートするための `Object.create()` のシムを含んでいます。
- Node.js環境では、このモジュールは単に組み込みの `util.inherits` をエクスポートします。
- 簡単にアクセスできるように、`constructor.super_` プロパティにスーパーコンストラクタを設定します。

## 使い方

```js
import { inherits } from "https://code4fukui.github.io/inherits/inherits.js";

// 1. 親コンストラクタを定義
function Parent() {
  this.parentValue = 'parent';
}

// 2. 親コンストラクタを呼び出す子コンストラクタを定義
function Child() {
  // 子インスタンスのコンテキストで親コンストラクタを呼び出す
  Parent.call(this);
  this.childValue = 'child';
}

// 3. プロトタイプチェーンを設定
inherits(Child, Parent);

// 4. インスタンスを作成し、継承を確認
const c = new Child();

console.log(c instanceof Child);  // true
console.log(c instanceof Parent); // true
console.log(c.childValue);        // 'child'
console.log(c.parentValue);       // 'parent'
console.log(c.constructor.super_ === Parent); // true
```

## v1.0からのアップグレード

本ライブラリのバージョン ~1.0 はAPIが異なり、v2.0以降やNode.js標準との互換性はありません。アップグレードする際は、以下の破壊的変更に注意してください。

- スーパークラスは `constructor.super` ではなく `constructor.super_` を介して参照されるようになりました。
- 子のプロトタイプは（`Object.create` を使用して）完全に上書きされ、既存のプロパティはすべて置き換えられるようになりました。旧バージョンでは、子のプロトタイプ上の既存のプロパティは保持されていました。

## ライセンス

ISC License
Copyright (c) 2011-2023 Isaac Z. Schlueter
