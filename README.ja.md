# inherits

このパッケージは、Node.js標準の`util.inherits()`を提供し、ブラウザ向けの実装も含んでいます。

## 機能
- Node.js環境では標準の`util.inherits()`を使用
- ブラウザ環境では独自の実装を提供
- 古いブラウザでも`Object.create()`をサポートするシムを含む

## 使い方
```js
import { inherits } from "https://code4fukui.github.io/inherits/inherits.js";
// 標準の`util.inherits()`と同様に使用できます
```

## 注意事項
バージョン~1.0では動機や挙動が完全に異なり、2.0やNode.js標準の`util.inherits()`とは互換性がありません。

バージョン~1.0から2.0に移行する場合は以下の変更点に注意が必要です:

- 新しいバージョンでは`super`ではなく`super_`を使用してスーパークラスを参照します
- 新しいバージョンでは既存のプロトタイプを上書きしますが、古いバージョンでは既存のプロパティを保持します

## ライセンス
ISCライセンス

Copyright (c) 2011-2023 Isaac Z. Schlueter