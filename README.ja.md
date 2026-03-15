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

## ライセンス
ISCライセンス