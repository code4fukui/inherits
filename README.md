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