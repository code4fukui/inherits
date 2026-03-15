# inherits

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Browser-friendly inheritance fully compatible with standard node.js [inherits](https://nodejs.org/api/util.html#utilinheritsconstructor-superconstructor).

## Usage
```js
import { inherits } from "https://code4fukui.github.io/inherits/inherits.js";
// then use exactly as the standard one
```

## Note on version ~1.0
Version ~1.0 had completely different motivation and is not compatible neither with 2.0 nor with standard node.js `inherits`.

If you are using version ~1.0 and planning to switch to ~2.0, be careful:

* new version uses `super_` instead of `super` for referencing superclass
* new version overwrites current prototype while old one preserves any existing fields on it

## License
The ISC License

Copyright (c) 2011-2023 Isaac Z. Schlueter

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.