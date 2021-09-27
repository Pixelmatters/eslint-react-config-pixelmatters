"use strict";

test("has the entry point", () => {
  expect(() => require("..")).not.toThrow();
});
