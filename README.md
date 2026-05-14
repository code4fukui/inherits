# inherits

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Browser-friendly inheritance fully compatible with the standard Node.js [util.inherits](https://nodejs.org/api/util.html#utilinheritsconstructor-superconstructor).

## Features

- Provides the standard Node.js `util.inherits` API in browsers.
- Includes a shim for `Object.create()` to support older environments.
- In a Node.js environment, this module simply exports the built-in `util.inherits`.
- Sets the `constructor.super_` property to the super-constructor for easy access.

## Usage

```js
import { inherits } from "https://code4fukui.github.io/inherits/inherits.js";

// 1. Define the Parent constructor
function Parent() {
  this.parentValue = 'parent';
}

// 2. Define the Child constructor, calling the Parent constructor
function Child() {
  // Call the parent constructor in the context of the child instance
  Parent.call(this);
  this.childValue = 'child';
}

// 3. Set up the prototype chain
inherits(Child, Parent);

// 4. Create an instance and verify the inheritance
const c = new Child();

console.log(c instanceof Child);  // true
console.log(c instanceof Parent); // true
console.log(c.childValue);        // 'child'
console.log(c.parentValue);       // 'parent'
console.log(c.constructor.super_ === Parent); // true
```

## Upgrading from v1.0

Version ~1.0 of this library had a different API and is not compatible with v2.0+ or the Node.js standard. If you are upgrading, be aware of these breaking changes:

- The superclass is now referenced via `constructor.super_` instead of `constructor.super`.
- The child's prototype is now completely overwritten (using `Object.create`), replacing any existing properties. The old version preserved existing properties on the child's prototype.

## License

ISC License
Copyright (c) 2011-2023 Isaac Z. Schlueter