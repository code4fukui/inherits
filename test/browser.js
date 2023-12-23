import * as t from "https://deno.land/std/testing/asserts.ts";
import { inherits } from "../inherits.js";

Deno.test("simple", () => {
  function test(c) {
    t.equal(c.constructor, Child)
    t.equal(c.constructor.super_, Parent)
    t.equal(Object.getPrototypeOf(c), Child.prototype)
    t.equal(Object.getPrototypeOf(Object.getPrototypeOf(c)), Parent.prototype)
    t.assert(c instanceof Child)
    t.assert(c instanceof Parent)
  }

  function Child() {
    Parent.call(this)
    test(this)
  }

  function Parent() {}

  inherits(Child, Parent)

  var c = new Child
  test(c)

  t.assert(typeof inherits == 'function')

  function Orphan() {}
  inherits(Orphan, null)
});
